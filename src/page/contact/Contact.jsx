import React, { useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = (props) => {
  useEffect(() => {
    // Ensure this runs only after the component mounts
    if (window.L && document.getElementById("map")) {
      // Initialize the map
      const map = window.L.map("map").setView([40.2702618, -74.524768], 13);
      window.L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 19,
      }).addTo(map);
    }
  }, []);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_w7wh0jh",
        "template_desmqoo",
        form.current,
        "600HdM_Du0cxRl4P9"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <section id="contact" className="py-5 px-3 text-white">
      <div className="text-center">
        <h3 className="text-4xl font-semibold">
          Contact <span className="text-cyan-600">Me</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">Get in touch</p>

        <div
          className="mt-16 flex md:flex-row flex-col
         gap-6 max-w-5xl bg-gray-800 md:p-6 p-2 rounded-lg mx-auto"
        >
          <form ref={form} onSubmit={sendEmail} className="flex flex-col flex-1 gap-5">
            <input type="text" name="from_name" placeholder="Your Name" />
            <input
              type="Email"
              name="from_email"
              placeholder="Your Email Address"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows={10}
            ></textarea>
            <button className="btn-primary w-fit">Send Message</button>
          </form>
          <div className="flex flex-col  gap-7 ">
            {props.contact_info.map((contact, i) => (
              <div
                key={i}
                className="flex flex-row  
                  text-left gap-4 flex-wrap items-center"
              >
                <div className="min-w-[3.5rem]  text-3xl min-h-[3.5rem] flex items-center justify-center text-white bg-cyan-600 rounded-full">
                  <ion-icon name={contact.logo}></ion-icon>
                </div>
                <p className="md:text-base text-sm  break-words">
                  {contact.text}
                </p>
              </div>
            ))}
            <div id="map" className="h-[200px] w-full rounded-lg lg:p-2"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

Contact.defaultProps = {
  contact_info: [
    { logo: "mail", text: "bishnuthapako@gmail.com" },
    // { logo: "logo-whatsapp", text: "123 456 780" },
    {
      logo: "location",
      text: "My Address",
    },
  ],
};

export default Contact;