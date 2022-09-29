import React from "react";
import aboutImage from "../assets/About.jpg";

export const About = () => (
  <section className="section bg-secondary">
    <div className="container mx-auto">
      <div className="flex flex-col xl:flex-row gap-24">
        <img
          className="object-cover h-full w-[566px] md:mx-auto lg:mx-0 rounded"
          src={aboutImage}
          alt=""
        />
        <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
          <div className="flex flex-col">
          <h1 className='text-3xl lg:text-4xl font-medium lg:font-extrabold mb-3 before:content-about relative before:absolute before:opacity-40 before:-top-[2rem] before:hidden before:lg:block'>
              Pablo Méndez
            </h1>
            <p className="mb-4 text-red-600">Desarrollador Full Stack</p>
            <hr className="mb-8 opacity-5" />
            <p className="mb-8">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente
              similique veritatis repudiandae recusandae voluptates vitae nulla.
              Distinctio autem eveniet mollitia ullam quasi, necessitatibus
              deleniti delectus pariatur nisi. Corporis mollitia laudantium
              vitae, quidem accusantium in velit nostrum, excepturi esse rerum,
              dolor facere dolore sit odio. Quod dolorum rerum vel ipsam quas.
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
