import React from 'react'
import {social} from "../data"

export const Socials = () => {
  return (
    <ul className="flex space-x-6">
      {social.map((item, index) => {
        return (
          <li className="flex justify-center items-center text-red-600" key={index}>
            <a href={item.href} className="text-base">
              {item.icon}
            </a>
          </li>
        )
      })}
    </ul>
  )
}
