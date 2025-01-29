import { useEffect } from "react";
import Typed from "typed.js";

const useInitApp = (): void => {
  useEffect(() => {
    async function typeParagraphs(): Promise<void> {
      const paragraphs =
        document.querySelectorAll<HTMLElement>(".typed-greeting p");

      for (const [index, paragraph] of Array.from(paragraphs).entries()) {
        await new Promise<void>((resolve) => {
          const typedElement =
            paragraph.nextElementSibling as HTMLElement | null;
          if (!typedElement) return resolve();

          new Typed(typedElement, {
            strings: [paragraph.innerHTML],
            typeSpeed: 100,
            onComplete: () => {
              resolve();
              typedElement.nextElementSibling?.remove();
            },
          });
        });
      }
    }

    const initTyped = () => {
      if (typeof Typed === "undefined") return;
      typeParagraphs();
    };

    const handleLoad = () => {
      initTyped();
    };

    if (document.readyState === "complete") {
      initTyped();
    } else {
      window.addEventListener("load", handleLoad);
    }

    return () => {
      window.removeEventListener("load", handleLoad);
    };
  }, []);
};

export default useInitApp;
