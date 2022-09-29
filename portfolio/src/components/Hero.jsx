import React from "react";
import Pablo from "../assets/Pablo.png";

export const Hero = () => {
  return (
    <section
      id="home"
      className="lg:h-[85vh] flex items-center bg-primary lg:bg-cover lg:bg-center lg:bg-no-repeat py-32 lg:py-0 overflow-hidden"
    >
      <div className="container mx-auto h-full">
        <div className="flex items-center h-full pt-8">
          <div className="flex-1 flex flex-col items-center lg:items-start lg:text-left">
            <p className="text-lg text-red-700 text-md mb-[22px]">
              Buenas, soy Pablo 👋
            </p>
            <h1 className="text-4xl leading-[44px] md:text-5xl md:leading-tight lg:text-7xl lg:leading-[1.2] font-bold md:tracking-[-2px]">
              Desarrollador <br /> Full Stack Jr.
            </h1>
            <p className="pt-4 pb-8 md:pt-6 md:pb-12 max-w-[480px] text-lg text-center lg:text-left">
              Lorem ipsum dolor sit amet consectetur adipisicing illo ad labore
              dolor elit.
            </p>
            <button className="btn btn-md bg-red-600 hover:bg-secondary-hover md:btn-lg transition-all">
              Contactame
            </button>
          </div>
          <div className="hidden lg:flex flex-1 justify-end items-end h-full">
            <img src={Pablo} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};
