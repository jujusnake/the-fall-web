import { useEffect } from "react";

const useBackground = (color: string) => {
  useEffect(() => {
    document.documentElement.style.setProperty("background-color", color);

    return () => {
      document.documentElement.style.removeProperty("background-color");
    };
  }, []);
};

export default useBackground;
