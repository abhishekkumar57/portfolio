
import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

const Footer = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.onscroll = () => {
      scrollFunction();
    };

    return () => {
      window.onscroll = null; // Clean up the event listener when the component unmounts
    };
  }, []);

  function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  }

  function scrollToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  return (
    <div className="bg-gray-900 text-sm p-4 text-center text-white">
      Copyright © 2023 VISUALS P. All Rights reserved.
      {showButton && (
        <button
          id="scrollToTop"
          title="Go to top"
          className="bg-cyan-600 text-black p-4 cursor-pointer right-3 bottom-3 rounded fixed"
          onClick={scrollToTop}
        >
          <FaArrowUp />
        </button>
      )}
    </div>
  );
};

export default Footer;
