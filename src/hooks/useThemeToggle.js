import { useState } from 'react';
import lightbackground from '../assets/images/lightbackground.jpg';
import darkbackground from '../assets/images/darkmode.jpg';

const useThemeToggle = () => {
  const [isToggled, setIsToggled] = useState(false);

  const toggleBackground = () => {
    setIsToggled((prevState) => !prevState);

    // Apply background color changes
    if (!isToggled) {
      document.body.style.backgroundColor = "#fff"; // Light mode
    } else {
      document.body.style.backgroundColor = "#111"; // Dark mode
    }
  };

  return { isToggled, toggleBackground };
};

export default useThemeToggle;
