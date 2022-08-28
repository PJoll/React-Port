import React from "react";
import { Link } from "react-router-dom";

// import "../css/header.css";



const Navbar = () => {
 
  ;
  return (
    <nav className="bg-stone-800 border-gray-200 px-2 sm:px-4 lg:py-6">
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        <Link to="/" className="flex main-link">
          <svg
            className="mr-3 h-10"
            viewBox="0 0 52 72"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.87695 53H28.7791C41.5357 53 51.877 42.7025 51.877 30H24.9748C12.2182 30 1.87695 40.2975 1.87695 53Z"
              fill="#76A9FA"
            />
            <path
              d="M0.000409561 32.1646L0.000409561 66.4111C12.8618 66.4111 23.2881 55.9849 23.2881 43.1235L23.2881 8.87689C10.9966 8.98066 1.39567 19.5573 0.000409561 32.1646Z"
              fill="#A4CAFE"
            />
            <path
              d="M50.877 5H23.9748C11.2182 5 0.876953 15.2975 0.876953 28H27.7791C40.5357 28 50.877 17.7025 50.877 5Z"
              fill="#1C64F2"
            />
          </svg>
          <span className="self-center lg:text-3xl md:text-2xl sm:text-base font-semibold whitespace-nowrap text-white main-title">
            Peter's Portfolio
          </span>
        </Link>
        
        <div className="hidden w-full md:block md:w-auto" id="mobile-menu">
          <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
            <li>
              <Link
                to="/"
                className="block py-2 pr-4 pl-3  md:p-0 text-gray-400 md:hover:text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700"
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                to="/about"
                className="block py-2 pr-4 pl-3  md:p-0 text-gray-400 md:hover:text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700"
              >

               About
              </Link>
            </li>

           
              <>
                <li>
                  <Link
                    to="/project"
                    className="block py-2 pr-4 pl-3  md:p-0 text-gray-400 md:hover:text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700"
                  >
                    Project
                  </Link>
                
             
         
              
                  
                  <Link
                    to="/footer"
                    className="block py-2 pr-4 pl-3  md:p-0 text-gray-400 md:hover:text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700"
                  >
                    Footer
                  </Link>
                </li>
                
              </>
          
            <li>
              <Link
                to="/"
                className="block py-2 pr-4 pl-3  md:p-0 text-gray-400 md:hover:text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>

  
  );
};

export default Navbar;
