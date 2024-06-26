import React from "react";
import fishing from "../../assets/images/fishing.png";

const About = () => {
  const info = [
    { text: "Years experience", count: "02" },
    { text: "Completed Projects", count: "10" },
    { text: "Companies Work", count: "03" },
  ];
  return (
    <section id="about" className="py-10 text-white">
      <div className="text-center mt-8">
        <h3 className="text-4xl font-semibold">
          About <span className="text-cyan-600">Me</span>
        </h3>
        <p className="text-gray-400 my-3 text-lg">My introduction</p>
        <div className="flex md:flex-row flex-col-reverse items-center md:gap-6 gap-12 px-10 max-w-6xl mx-auto">
          <div className="p-2">
            <div
              data-aos="fade-right"
              data-aos-duration="2000"
              className="text-gray-300 my-3"
            >
              <p className="text-justify leading-7 w-11/12 mx-auto">
                I'm a 38-year-old software developer from New Jersey, United
                States Of America. I stand as a passionate software developer
                hailing from the vibrant state of New Jersey, USA. My
                educational journey has been rich and diverse, marked by
                successful graduations in Fullstack software development and
                Frontend developer from two prestigious schools. I have honed my
                skills in a wide array of technologies, including JavaScript,
                ReactJs, TypeScript, Ruby on Rails, Bootstrap, and TailWind CSS.
                I love making innovative web apps and software that impress. My
                studies and projects have prepared me well for this career. I
                also enjoy nature, often going fishing and hiking, which helps
                me relax and stay refreshed for my coding work. Music is
                important to me too, inspiring and calming me. I'm proud of my
                professional skills and hobbies, always aiming to improve in all
                areas of my life.
              </p>
              <div className="flex mt-10 items-center gap-7">
                {info.map((content) => (
                  <div key={content.text}>
                    <h3 className="md:text-4xl text-2xl font-semibold text-white">
                      {content.count}
                      <span className="text-cyan-600">+</span>{" "}
                    </h3>
                    <span className="md:text-base text-xs">{content.text}</span>
                  </div>
                ))}
              </div>
              <br />
              <br />
              <a
                href="https://docs.google.com/document/d/1aJv9yBJVKYASUhYNJYUQjfCg_ZtZ1e6qHpTqjGLYKTc/edit?usp=sharing"
                target="_blank"
                download
              >
                <button className=" hidden btn-primary">Download CV</button>
              </a>
            </div>
          </div>
          <div className="flex-1 md:mt-0 mt-6 flex justify-center items-center">
            <div
              data-aos="fade-left"
              data-aos-duration="2000"
              className="lg:w-96 h-full relative sm:w-10/12 w-11/12 max-w-sm aboutImg "
            >
              <img
                src={fishing}
                alt="Fishing"
                className="w-full object-cover bg-cyan-600 rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
