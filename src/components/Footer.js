import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faEvernote,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <>
      <div
        id="contact"
        className="text-gray-400 bg-gray-900 body-font flex justify-center items-center p-4"
      ></div>
      <footer className="text-center text-lg-start bg-light text-muted">
        <section className="d-flex justify-content-center justify-content-lg-between p-4">
          <div className="text-center p-4">
            <ul className="flex justify-between">
              <li className="w-[100px] h-[60px] flex justify-between items-center hover:ml-[-10px] duration-300 bg-blue-600">
                <a
                  href="https://www.linkedin.com/in/peterjolleydevops/"
                  className="flex justify-between items-center w-full text-gray-300"
                >
                  Linkedin
                  <FontAwesomeIcon icon={faLinkedin} size="2x" />
                </a>
              </li>
              <li className="w-[100px] h-[60px] flex justify-between items-center hover:ml-[-10px] duration-300 bg-[#333333]">
                <a
                  href="https://github.com/Pjoll"
                  className="flex justify-between items-center w-full text-gray-300"
                >
                  Github
                  <FontAwesomeIcon icon={faGithub} size="2x" />
                </a>
              </li>
              <li className="w-[100px] h-[60px] flex justify-between items-center hover:ml-[-10px] duration-300 bg-[#6fc2b0]">
                <a
                  href="mailto:peterjolley456@gmail.com"
                  className="flex justify-between items-center w-full text-gray-300"
                >
                  Email
                  <FontAwesomeIcon icon={faEvernote} size="2x" />
                </a>
              </li>
            </ul>
          </div>
        </section>
      </footer>
    </>
  );
};

export default Footer;
