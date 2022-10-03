import React, { useState } from "react";
import { animateScroll as scroll } from "react-scroll";
import { ChevronUpIcon } from "@heroicons/react/outline";
import { useEffect } from "react";

export const BackToTop = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      return window.scrollY > 600 ? setShow(true) : setShow(false);
    });
  });

  return (
    show && (
      <button
        onClick={() => scroll.scrollToTop()}
        className="bg-red-600 w-12 h-12 hover:bg-red-600-hover text-white rounded-full fixed right-24 bottom-24 cursor-pointer flex justify-center items-center transition-all"
      >
        <ChevronUpIcon className="w-6 h-6" />
      </button>
    )
  );
};
