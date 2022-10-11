import React from "react";
import aboutImage from "../assets/About.jpg";

export const About = () => (
  <section className="section bg-secondary" id="about">
    <div className="container mx-auto">
      <div className="flex flex-col xl:flex-row gap-24">
        <img
          className="object-cover h-full w-[566px] md:mx-auto lg:mx-0 rounded"
          src={aboutImage}
          alt=""
        />
        <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
          <div className="flex flex-col">
            <h1 className="text-3xl lg:text-4xl font-medium lg:font-extrabold mb-3 before:content-about relative before:absolute before:opacity-40 before:-top-[2rem] before:hidden before:lg:block">
              Pablo Méndez
            </h1>
            <p className="mb-4 text-red-600">Desarrollador Full Stack</p>
            <hr className="mb-8 opacity-5" />
            <p className="mb-8">
              Me integre en este mundo en el 2018 como estudiante de ÁNIMA
              Bachillerato Tecnológico dónde me formé en diversas áreas buscando
              cual era la que más disfrutaba. En la actualidad soy estudiante en
              la Universidad Católica del Uruguay en la cuál sigo
              desarrollándome cómo ingeniero en distintas materias que me siguen
              enseñando lo diverso que es este rubro de la tecnología.
            </p>
          </div>
          <button className="btn btn-md bg-red-600 hover:bg-red-500">
            Contactame
          </button>
        </div>
      </div>
    </div>
  </section>
);
