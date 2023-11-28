import { useEffect, useState } from "react";
import "../styles/ButtonToTop.css";
import { FaArrowUp } from "react-icons/fa";

export const ButtonToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      if (!isVisible && window.scrollY > 500) {
        setIsVisible(true);
      } else if (isVisible && window.scrollY <= 500) {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", checkScroll);

    return () => {
      window.removeEventListener("scroll", checkScroll);
    };
  }, [isVisible]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {isVisible && (
        <button className={`button_to_top ${isVisible ? 'visible' : 'hidden'}`} onClick={scrollToTop}>
          <FaArrowUp />
        </button>
      )}
    </>
  );
};
