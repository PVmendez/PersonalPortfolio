import React from "react";
import { Projects } from "./Projects";

export const Portfolio = () => {
  return (
    <section id="portfolio" className="section bg-primary min-h-[800px]">
      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center">
          <h2 className="section-title before:content-portfolio relative before:absolute before:opacity-40 before:-top-[2rem] before:-left-3/4 before:hidden before:lg:block">
            Mis proyectos
          </h2>
          <p className="subtitle">
          Aquí están algunos de los proyectos que he realizado últimamente y los que iré agregando al paso de que vaya realizando próximamente.
          </p>
        </div>
        <Projects/>
      </div>
    </section>
  );
};
