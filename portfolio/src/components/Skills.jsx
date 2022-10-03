import React from "react";
import { skills } from "../data";
import "./skill.css"

export const Skills = () => {
  return (
    <section className="bg-tertiary py-12">
      <div className="container mx-auto">
        <div className="grid grid-cols-6 md:grid-flow-row sm:grid-cols-12 ">
          {/* mt-5 sm:mt-0  w-10 h-10 fill-red-600 */}
          {skills.map((item, index) => {
            return (
              <div className="flex items-center justify-center  skills" key={index}>
                {item.icon}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
