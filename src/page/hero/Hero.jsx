import React from "react";

const Hero = (props) => {
  const social_media = [
    "logo-instagram",
    "logo-facebook",
    "logo-linkedin",
    "logo-twitter",
  ];
  return (
    <section
      id="home"
      className="h-auto w-full flex flex-col items-center container mx-auto"
    >
      <div className="flex-1">
        <img
          src="https://cdn.pixabay.com/photo/2017/09/05/10/19/business-2717063_1280.jpg"
          alt=""
          className="shadow-lg w-[200px] h-[200px] object-cover rounded-full"
        />
      </div>
      <div className="flex-1">
        <div className="text-center">
          <h1 className="md:text-5xl text-2xl md:leading-normal leading-10 text-white font-bold">
            <span className="text-cyan-600 md:text-2xl text-xl">
              Hey! there 👋 I am{" "}
              <span className=" text-white">Bishnu Thapa</span>
            </span>
          </h1>
          <div className="w-full flex items-center justify-center flex-col">
            <div className="w-max text-center">
              <h4 className="animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-white pr-5 md:text-2xl text-lg md:leading-normal leading-5 mt-4 font-bold text-gray-600">
                Frontend Developer
              </h4>
            </div>
            <div className="text-justify px-4">
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Reprehenderit accusantium suscipit quo architecto eveniet harum
                quos ipsa illum vel, nisi amet esse dolorum vero adipisci,
                aperiam quam soluta dolore laudantium consequatur? Quisquam,
                esse incidunt eos placeat quod tempore praesentium porro earum.
                Molestiae cumque tenetur qui atque impedit, vero odio adipisci
                aspernatur eius magni accusamus, iste praesentium placeat
                consequatur in vitae minus labore sapiente suscipit neque,
                eveniet quo odit repellendus perferendis.
              </p>
           <div className="flex justify-center">
           <button className="btn-primary mt-8 w-[185px] flex justify-center items-center">
              Connect With Me
            </button>
           </div>
            </div>
          </div>
          <div className="mt-8 text-3xl flex items-center md:justify-center justify-center gap-5 ">
            {props.social_media.map((icon) => (
              <div
                key={icon.name}
                className="text-gray-600 hover:text-white cursor-pointer"
              >
                <a href={icon.link} target={icon.target}>
                  <ion-icon name={icon.name}></ion-icon>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
Hero.defaultProps = {
  social_media: [
    {
      name: "logo-instagram",
      link: "https://www.instagram.com/sunishnu",
      target: "_blank",
    },
    {
      name: "logo-facebook",
      link: "https://www.facebook.com/bishnutm",
      target: "_blank",
    },
    {
      name: "logo-linkedin",
      link: "https://www.linkedin.com/in/mebishnu",
      target: "_blank",
    },
    {
      name: "logo-twitter",
      link: "https://twitter.com/bishnuthapako",
      target: "_blank",
    },
  ],
};

export default Hero;
