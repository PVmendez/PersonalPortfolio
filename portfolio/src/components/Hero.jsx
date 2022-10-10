import React from "react";
import Pablo from "../assets/Pablo.png";
import "./Hero.css";

export const Hero = () => {
  return (
    <section
      id="home"
      className="lg:h-[90vh] flex items-center bg-primary lg:bg-cover lg:bg-center lg:bg-no-repeat py-32 lg:py-0 overflow-hidden"
    >
      <div className="container mx-auto h-full">
        <div className="flex items-center h-full pt-8">
          {/*lg:items-start lg:text-left*/}
          <div className="flex-1 flex flex-col items-center">
            <p className="text-lg text-red-700 text-md mb-[22px]">
              Buenas, soy Pablo 👋
            </p>
            <h1 className="text-4xl leading-[44px] md:text-5xl md:leading-tight lg:text-8xl lg:leading-[1.2] font-bold md:tracking-[-2px]">
              <div className="img-hero inline-flex">
                <img
                  className="rounded-r-full border-white border-4 h-[60px] lg:h-[120px]"
                  src={Pablo}
                  alt=""
                />
              </div>
              esarrollador <br /> Full Stack Jr.
            </h1>
            {/* lg:text-left */}
            <p className="pt-4 pb-8 md:pt-6 md:pb-12 max-w-[480px] text-lg text-center">
              "Luego de mi primera experiencia laboral, decidí por cuál camino
              quería seguir, el desarrollo full stack, algo que me permitiría
              conocer un gran número de tecnologías y crear sin límites con
              ellas"
            </p>
            <button className="btn btn-md bg-red-600 hover:bg-secondary-hover md:btn-lg transition-all">
              Contactame
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
