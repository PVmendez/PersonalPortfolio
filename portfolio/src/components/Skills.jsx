import React from "react";

import {
  SiMongodb,
  SiPostgresql,
  SiExpress,
  SiRedux,
  SiGit,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiReact,
  SiNodedotjs,
  SiTailwindcss,
  SiBootstrap,
} from "react-icons/si";

export const Skills = () => {
  return (
    <section className="bg-tertiary py-12">
      <div className="container mx-auto">
        <div className="grid grid-cols-5 md:grid-flow-row sm:grid-cols-12">
          <div className="flex items-center justify-center">
            <SiHtml5 className="w-10 h-10 fill-red-600" />
          </div>
          <div className="flex items-center justify-center">
            <SiCss3 className="w-10 h-10 fill-red-600" />
          </div>
          <div className="flex items-center justify-center">
            <SiJavascript className="w-10 h-10 fill-red-600" />
          </div>
          <div className="flex items-center justify-center">
            <SiNodedotjs className="w-10 h-10 fill-red-600" />
          </div>
          <div className="flex items-center justify-center">
            <SiExpress className="w-10 h-10 fill-red-600" />
          </div>
          <div className="flex items-center justify-center mt-5 sm:mt-0">
            <SiReact className="w-10 h-10 fill-red-600" />
          </div>
          <div className="flex items-center justify-center mt-5 sm:mt-0">
            <SiRedux className="w-10 h-10 fill-red-600" />
          </div>
          <div className="flex items-center justify-center mt-5 sm:mt-0">
            <SiPostgresql className="w-10 h-10 fill-red-600" />
          </div>
          <div className="flex items-center justify-center mt-5 sm:mt-0">
            <SiMongodb className="w-10 h-10 fill-red-600" />
          </div>
          <div className="flex items-center justify-center mt-5 sm:mt-0">
            <SiGit className="w-10 h-10 fill-red-600" />
          </div>
          <div className="flex items-center justify-center">
            <SiBootstrap className="w-10 h-10 fill-red-600" />
          </div>
          <div className="flex items-center justify-center">
            <SiTailwindcss className="w-10 h-10 fill-red-600" />
          </div>
        </div>
      </div>
    </section>
  );
};
