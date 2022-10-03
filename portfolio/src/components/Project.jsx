import React from "react";
import { FiGithub, FiChrome } from "react-icons/fi";

export const Project = ({ item }) => {
  return (
    <div key={item.id} className="flex flex-col items-center text-center">
      <div className="mb-8">
        <img
          className="w-[350px] h-[200px] rounded-2xl border-white border-2"
          src={item.image}
          alt=""
        />
      </div>
      <div className="flex flex-col capitalize text-red-600 text-sm mb-3">
        <p className="mb-3">{item.category}</p>
        <div className="flex space-x-3 justify-center">
          {item.href ? (
            <a href={item.href}>
              <FiChrome />
            </a>
          ) : null}
          {
            <a href={item.repo}>
              <FiGithub />
            </a>
          }
        </div>
      </div>

      <h3 className="text-2xl font-semibold capitalize mb-3">{item.name}</h3>
      <p className="text-base max-w-md">{item.description}</p>
    </div>
  );
};
