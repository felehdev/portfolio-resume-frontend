import React, { useState, useEffect } from "react";
import Typed from "typed.js";

const TypedGreetings = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const greetings = [
    "I'm Mourad Elfeleh.",
    "A <strong class='text-primary'>Fullstack Web developer</strong>.",
    "Nice to meet you <i class='bi bi-emoji-smile'></i>",
  ];

  useEffect(() => {
    if (currentIndex < greetings.length - 1) {
      const timer = setTimeout(() => setCurrentIndex(currentIndex + 1), 3000); // Adjust delay as needed
      return () => clearTimeout(timer); // Cleanup
    }
  }, [currentIndex]);

  return (
    <div className="info w-100">
      <div className="typed-greeting mt-3" style={{ height: "50px" }}>
        <ReactTyped
          strings={[greetings[currentIndex]]}
          typeSpeed={100}
          showCursor
          cursorChar="|"
        />
      </div>
    </div>
  );
};

export default TypedGreetings;
