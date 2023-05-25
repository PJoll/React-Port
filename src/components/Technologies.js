import React from "react";
// import { projects } from "../Projects";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3Alt,
  faJsSquare,
  faNode,
  faReact,
  faDatabase,
} from "@fortawesome/free-brands-svg-icons";

const  Technologies = () => {
  return (
    <section id="tech" className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
          <div className="mx-auto inline-block w-10 mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            My Technologies
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Below are a few of the Technologies i have used and been exposed
            too.
            <a href="https://github.com/PJoll" alt="Link to my GitHub repository">Visit my GitHub repository</a>
          </p>
        </div>
        <div class="flex justify-center">
          <ul class="bg-white rounded-lg border border-red-400 w-96 text-gray-900">
            <li class="px-6 py-2 border-b border-gray-200 w-full rounded-t-lg">
              React <FontAwesomeIcon icon={faReact} />
            </li>
            <li class="px-6 py-2 border-b border-gray-200 w-full">HTML <FontAwesomeIcon icon={faHtml5}/></li>
            <li class="px-6 py-2 border-b border-gray-200 w-full">CSS <FontAwesomeIcon icon={faCss3Alt}/></li>
            <li class="px-6 py-2 border-b border-gray-200 w-full">
              JavaScript <FontAwesomeIcon icon={faJsSquare}/>
            </li>
            <li class="px-6 py-2 border-b border-gray-200 w-full">Nodejs <FontAwesomeIcon icon={faNode}/></li>
            <li class="px-6 py-2 border-b border-gray-200 w-full">Tailwind <FontAwesomeIcon icon={faHtml5}/></li>
            <li class="px-6 py-2 border-b border-gray-200 w-full">MongoDB <FontAwesomeIcon icon={faDatabase}/></li>
            <li class="px-6 py-2 border-b border-gray-200 w-full">SQL <FontAwesomeIcon icon={faHtml5} /></li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Technologies;