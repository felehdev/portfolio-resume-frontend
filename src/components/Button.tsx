interface ButtonProps {
  label: string;
  icon: string;
  isActive: boolean;
  onClick: (name: string) => void;
  sectionRef: React.RefObject<HTMLElement>;
  wrapper: React.RefObject<HTMLDivElement>;
}

const Button: React.FC<ButtonProps> = ({ label, icon, isActive, onClick, sectionRef, wrapper }) => {
  const scrollToSection = () => {
    if (sectionRef.current && wrapper.current) {
      const startPosition = wrapper.current.scrollTop;
      const targetPosition = sectionRef.current.offsetTop;
      const distance = targetPosition - startPosition;
      const duration = 200;
      let startTime: number | null = null;

      const easeInOutQuad = (t: number) => (t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t);

      const animation = (currentTime: number) => {
        if (startTime === null) startTime = currentTime;

        const elapsedTime = currentTime - startTime;
        const progress = Math.min(elapsedTime / duration, 1);
        const easedProgress = easeInOutQuad(progress);

        if (wrapper.current) {
          wrapper.current.scrollTop = startPosition + distance * easedProgress;
        }

        if (elapsedTime < duration) {
          requestAnimationFrame(animation);
        }
      };

      requestAnimationFrame(animation);
      onClick(label);
    }
  };

  return (
    <button className={`btn jump-to rounded-0 ${isActive ? "active" : ""}`} onClick={scrollToSection}>
      <i className={`navicon bi bi-${icon}`} aria-hidden="true"></i>
      <span className="visually-hidden">{label}</span>
    </button>
  );
};

export default Button;
