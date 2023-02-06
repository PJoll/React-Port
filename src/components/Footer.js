import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faEnvelope,
  faGithub
} from "@fortawesome/free-brands-svg-icons";

export default function Footer()  {
  return (
    <><div id='contact' className='text-gray-400 bg-gray-900 body-font flex justify-center items-center p-4'>
      
    </div>
    <footer className="text-center text-lg-start bg-light text-muted">
            <section className="d-flex justify-content-center justify-content-lg-between p-4">
               

                <div className="text-center p-4">
                <ul>
          <li className='w-[150px] h-[60px] flex justify-between items-center ml-[-90px] hover:ml-[-10px] duration-300 bg-blue-600'>
            <a className='flex justify-between items-center w-full text-gray-300' href="https://tinyurl.com/5n6jwvzs">Linkedin<faLinkedin size={30}/></a>
          </li>
          <li className='w-[150px] h-[60px] flex justify-between items-center ml-[-90px] hover:ml-[-10px] duration-300 bg-[#333333]'>
            <a className='flex justify-between items-center w-full text-gray-300' href="https://github.com/FryGit87">Github<faGithub size={30}/></a>
          </li>
          <li className='w-[150px] h-[60px] flex justify-between items-center ml-[-90px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]'>
            <a className='flex justify-between items-center w-full text-gray-300' href="mailto: kymreilly.87@gmail.com">Email<faEnvelope size={30}/></a>
          </li>
          </ul>
              
            </div>


            </section>

            </footer>

    </>
        


  )
}

