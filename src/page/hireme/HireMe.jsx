import React from "react";
// import hireMe from "../assets/images/hireMe.png";
import bgmasthead from "../../assets/images/bg-masthead.jpg"


const Hireme = (props) => {
  return (
    <section id="hireme" className="py-10 px-3 text-white">
      <div data-aos="zoom-out-left" data-aos-duration="2000" className="text-center">
        <h3 className="text-4xl font-semibold">
          Hire <span className="text-cyan-600">Me</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">Do you have any work?</p>
      </div>
      <div data-aos="zoom-out-right" data-aos-duration="2000" className="bg-gray-700 relative px-8 rounded-2xl py-5 lg:max-w-4xl mx-auto min-h-[24rem] mt-24 flex gap-6 lg:flex-row flex-col-reverse items-center">
        {props.posts?.map((post, i) => {
          return (
            <div key={i}>
              <h2 className="text-2xl font-semibold">{post?.title}</h2>
              <p className="lg:text-justify max-w-lg text-sm mt-4 text-gray-200 leading-7">
                {post?.descriptions}
              </p>
              <button className="btn-primary mt-10">
                <a href="https://www.linkedin.com/in/mebishnu" target="_blank">
                <ion-icon name="logo-linkedin"></ion-icon> Say Hello
                </a>
              </button>
            </div>
          );
        })}
        {/* <img
          // src={bgmasthead}
          alt=""
          className="lg:h-[30rem] h-80 lg:absolute bottom-0 right-0 object-cover"
        /> */}
      </div>
    </section>
  );
};
Hireme.defaultProps = {
  posts: [
    {
      title: "Do you want any work from me?",
      descriptions:
        "Certainly! If you're seeking a passionate software developer. With a solid educational background in JavaScript, ReactJs, TypeScript, Ruby on Rails, and TailWind CSS, combined with a unique blend of enthusiasm and creativity, I am ready to tackle challenging web development projects. My journey, though yet to include a formal role in software development, is marked by significant hands-on experience and a deep commitment to innovation and excellence. Beyond my technical expertise, my love for nature and music brings a fresh, creative perspective to problem-solving and team dynamics. Hiring me means investing in someone who is not only technically proficient but also deeply passionate about every aspect of development, from coding to creative thinking. Let's discuss how my skills and passions can contribute to the success of your projects!",
    },
  ],
};

export default Hireme;