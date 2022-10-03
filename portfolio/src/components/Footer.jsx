import React from 'react'
import Logo from "../assets/Logo.png";
import { Socials } from './Socials';

export const Footer = () => {
  return (
    <footer className='bg-tertiary py-12'>
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row space-y-6 lg:space-y-0 items-center justify-between">
          <Socials />
          <div>
            <img className="w-6" src={Logo} alt="" />
          </div>
          <p>&copy; 2022 Pablo Méndez. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
