
import React from "react";
import MyPicture from "../images/Github.jpg"



export default function About() {
  return (
    <section id="about">
      <div className="container mx-centre flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font lg:text-4xl text-3xl mb-4 font-large text-white">
            Hi, my name is Peter 
            <br className="hidden lg:inline-block" />My passion is making incredible apps both for work and in my spare time.
          </h1>
          <p className="mb-8 leading-relaxed">
            

I am a full stack junior web-developer looking for work prioritised in the front end. I have completed  studying for a bootcamp certificate in full stack development at the University of Adelaide. In this course I have gained skill in HTML, JavaScript, CSS, nodejs bootstrap and Reactjs. I'm very passionate about learning more languages and skills and really enjoy the problem solving part of coding. My first project was to create a website where a user could enter any movie name and be provided (using api fetch) with a description of the movie, the main actors and the current streaming services that have that movie. I'm looking forward to the many challenges of working in this industry and I know my problem solving skills will come in handy.

          </p>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
              Work With Me
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
              See My Past Work
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="MyPicture"
            src={MyPicture}
          />
        </div>
      </div>
    </section>
  );
}