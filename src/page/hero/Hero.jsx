import React from "react";
import bishnu from "../../assets/images/bishnu.png";

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
          src={bishnu}
          alt="Bishnu Thapa"
          className="shadow-lg w-[150px] h-[150px] md:w-[200px] md:h-[200px] object-cover border-2 rounded-full"
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
          <div className="w-full flex items-center justify-center pb-3 flex-col">
            <div className="w-max text-center">
              <h4 className="animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-white pr-5 md:text-3xl text-lg md:leading-normal leading-5 mt-4 font-bold text-slate-200">
                Frontend Developer
              </h4>
            </div>
            <div
              data-aos="fade-right"
              data-aos-duration="2000"
              className="text-justify px-4 py-3"
            >
              <p>
                I am a skilled Software Developer with a strong background in
                ReactJs, Ruby-on-Rails, SQL, JavaScript, and Bootstrap and
                Tailwind css. I am passionate about creating innovative web
                applications and software solutions that not only meet clients'
                needs but also push the boundaries of what is possible in the
                tech world. When I'm not immersed in coding, I have a deep
                appreciation for the great outdoors and enjoy spending my time
                fishing and hiking.
              </p>
              <div className="flex justify-center">
                <button className="btn-primary mt-8 w-[150px] md:w-auto flex justify-start md:justify-center items-center">
                  <span className="hidden lg:inline">
                    {" "}
                    Join the Conversation Below!
                  </span>
                  <span className="inline lg:hidden">Join Below!</span>
                </button>
              </div>
            </div>
          </div>
          <div className="mt-4 md:mt-8 text-3xl flex items-center md:justify-center justify-center gap-5 ">
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
      animation: "fade-right",
      duration: 2000,
    },
    {
      name: "logo-facebook",
      link: "https://www.facebook.com/bishnutm",
      target: "_blank",
      animation: "fade-left",
      duration: 2000,
    },
    {
      name: "logo-twitter",
      link: "https://twitter.com/bishnuthapako",
      target: "_blank",
      animation: "fade-right",
      duration: 2000,
    },
    {
      name: "logo-linkedin",
      link: "https://www.linkedin.com/in/mebishnu",
      target: "_blank",
      animation: "fade-left",
      duration: 2000,
    },
    {
      name: "logo-medium",
      link: "https://medium.com/@bishnuthapako",
      target: "_blank",
      animation: "fade-right",
      duration: 2000,
    },
    {
      name: "logo-github",
      link: "https://github.com/bishnuthapako",
      target: "_blank",
      animation: "fade-left",
      duration: 2000,
    },
  ],
};

export default Hero;
