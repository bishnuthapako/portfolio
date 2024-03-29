import React from "react";
// Correct import paths for images
import infinitescroll from "../../assets/images/infinitescroll.png";
import project_person from "../../assets/images/project_person1.png";
import gameofthrone from "../../assets/images/gameofthrone-1.png";
import pokedex from "../../assets/images/pokedex.png";
import space from "../../assets/images/space.png";
import giphy from "../../assets/images/giphy.png";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import picture from "../../assets/images/picture.png";


const Project = (props) => {
  
  return (
    <section id="projects" className="py-10 text-white">
      <div className="text-center">
        <h3 className="text-4xl font-semibold">
          My <span className="text-cyan-600">Projects</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">My awesome works</p>
      </div>
      <br />
      <div className="flex max-w-6xl gap-6 px-5 mx-auto items-center relative">
        <div data-aos="fade-right" data-aos-duration="2000" className="lg:w-2/3 w-full">
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            slidesPerview={1.2}
            spaceBetween={20}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
            }}
            loop={true}
            autoplay={{
              delay: 3000,
            }}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
          >
            {props.projects.map((project_info, i) => (
              <SwiperSlide key={i}>
                <div className="h-fit w-full p-4 bg-slate-700 rounded-xl">
                  <img src={project_info.img} alt="" className="rounded-lg lg:h-[280px] w-max" />
                  <h3 className="text-xl my-4">{project_info.name}</h3>
                  <div className="flex gap-3">
                    <a
                      href={project_info.github_link}
                      target="_blank"
                      className="text-cyan-600 bg-gray-800 px-2 py-1 inline-block"
                    >
                      Github
                    </a>
                    <a
                      href={project_info.live_link}
                      target="_blank"
                      className="text-cyan-600 bg-gray-800 px-2 py-1 inline-block"
                    >
                      Live Demo
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        {/* <div data-aos="fade-left" data-aos-duration="2000" className="lg:block hidden">
          <img src={picture} alt="Pictures" className="w-full h-[400px] rounded-lg" />
        </div> */}
        <div className="flex-1 md:mt-0 mt-6 flex justify-center items-center w-[300px]">
            <div data-aos="fade-left" data-aos-duration="2000" className="lg:w-96 h-full relative sm:w-10/12 w-11/12 max-w-sm aboutImg ">
              <img
                src={picture}
                alt="Fishing"
                className="w-full h-full object-cover bg-cyan-600 rounded-xl"
              />
            </div>
          </div>
      </div>
    </section>
  );
};
Project.defaultProps = {
  projects: [
    {
      img: gameofthrone,
      name: "Game of throne",
      github_link: "https://github.com/bishnuthapako/gameofthrone-capstone-project",
      live_link: "https://gameofthroneproject.netlify.app/",
    },
    {
      img: pokedex,
      name: "ReactJs Pokedex",
      github_link: "https://github.com/bishnuthapako/pokemon-app-project-springboard",
      live_link: "https://pokedex-reactjs-project.netlify.app/",
    },
    {
      img: space,
      name: "ReactJs Space Travel Project",
      github_link: "https://github.com/bishnuthapako/space-travel-project/tree/main",
      live_link: "https://bishnuthapako.github.io/space-travel-project",
    },
    {
      img: infinitescroll,
      name: "React Js infinite Scroll Project",
      github_link:
        "https://github.com/bishnuthapako/springboard-project-3-infinite-scroll",
      live_link: "https://infinitescroll-project.netlify.app/",
    },
    {
      img: giphy,
      name: "JS Giphy Party Project",
      github_link: "https://github.com/bishnuthapako/giphy-party-project",
      live_link: "https://bishnuthapako.github.io/giphy-party-project",
    },
 
  ]
}

export default Project;