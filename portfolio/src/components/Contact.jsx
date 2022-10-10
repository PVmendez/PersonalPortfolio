import React from "react";
import { contact } from "../data";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import Swal from "sweetalert2";

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_g190vmg",
        "template_nsbgr6m",
        form.current,
        "627uMcL7uoEdH9E2F"
      )
      .then(
        () => {
          Swal.fire(
            'El email ha sido enviado con éxito!',
            "",
            'success'
          )
        },
        (err) => {
          alert("FAILED...", err);
        }
      );
  };

  return (
    <section className="section bg-primary" id="contact">
      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center">
          <h2 className="section-title before:content-contact relative before:absolute before:opacity-40 before:-top-7 before:-left-40 before:hidden before:lg:block">
            Contactame
          </h2>
          <p className="subtitle">
          Por aquí puedes mandarme un mensaje si te surge alguna duda sobre los proyectos o sobre mí.
          </p>
        </div>
        <div className="flex flex-col lg:gap-x-8 lg:flex-row maxlg:items-center">
          <div className="flex-flex-1 flex-col lg:items-start space-y-8 mb-12 lg:mb-0 lg-pt-2">
            {contact.map((item, index) => {
              const { icon, title, subtitle, description } = item;
              return (
                <div
                  className="flex flex-col lg:flex-row gap-x-4 maxlg:items-center"
                  key={index}
                >
                  <div className="text-red-600 rounded-sm w-14 h-14 flex lg:items-start justify-center mt-2 mb-4 lg:mb-0 text-2xl">
                    {icon}
                  </div>
                  <div className="flex flex-col lg:items-start">
                    <h4 className="font-body text-xl mb-1">{title}</h4>
                    <p className="mb-1">{subtitle}</p>
                    <p className="text-red-600 font-normal">{description}</p>
                  </div>
                </div>
              );
            })}
          </div>
          <form
            ref={form}
            onSubmit={sendEmail}
            className="space-y-8 w-full max-w-[780px]"
          >
            <div className="flex gap-8">
              <input
                className="input"
                type="text"
                placeholder="Nombre"
                name="from_name"
              />
              <input
                className="input"
                type="text"
                placeholder="Email"
                name="from_email"
              />
            </div>
            <input
              className="input"
              type="text"
              placeholder="Asunto"
              name="mail_subject"
            />
            <textarea
              className="textarea"
              placeholder="Mensaje"
              name="message"
            ></textarea>
            <button
              type="submit"
              className="btn btn-lg bg-red-600 hover:bg-red-600-hover"
            >
              Enviar
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
