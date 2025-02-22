import React, { useState, useEffect } from "react";

const ThemeToggle: React.FC = () => {
  const [isOlive, setIsOlive] = useState(false);

  useEffect(() => {
    // Check for saved theme preference on component mount.
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "olive") {
      setIsOlive(true);
      document.documentElement.classList.add("olive");
    }
  }, []);

  const toggleTheme = () => {
    if (isOlive) {
      document.documentElement.classList.remove("olive");
      localStorage.setItem("theme", "white");
      setIsOlive(false);
    } else {
      document.documentElement.classList.add("olive");
      localStorage.setItem("theme", "olive");
      setIsOlive(true);
    }
  };

  return (
    <button onClick={toggleTheme} className="p-2 rounded bg-gray-200 hover:bg-gray-300">
      Switch to {isOlive ? "White" : "Olive"} Theme
    </button>
  );
};

export default ThemeToggle;
