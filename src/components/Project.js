import React from 'react'
import Password from '../images/Password.png'
import Esspresso from '../images/Espresso-express.png'
import Movie from '../images/Moviedex.png'
import Rpg from '../images/Rpg-game.png'



const Project = () => {
  return (
    <div name='work' className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>Work</p>
          <p className='py-6'>My Projects</p>
        </div>

        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
          <div style={{ backgroundImage: `url(${Password})`}}className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
 
            {/* {Hover effects} */}
             <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
SIT LO VIETNAMESE
              </span>
              <div className='pt-8 text-center'>
                <a href="http://sitlo.com.au/">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Live</button>
                </a>
                {/* <a href="/">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                </a> */}
              </div>
            </div>
          </div>
          <div style={{ backgroundImage: `url(${Password})`}}className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
 
            {/* {Hover effects} */}
             <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
CHU CHU JAPANESE
              </span>
              <div className='pt-8 text-center'>
                <a href="https://www.chuchuadl.com.au/">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Live</button>
                </a>
                {/* <a href="/">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-boldt text-lg'>Code</button>
                </a> */}
              </div>
            </div>
          </div>
          <div style={{ backgroundImage: `url(${Esspresso})`}}className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
 
            {/* {Hover effects} */}
             <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
Rock - Paper - Scissors
              </span>
              <div className='pt-8 text-center'>
                <a href="https://frygit87.github.io/RockPaperScissors/">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Live</button>
                </a>
                <a href="https://github.com/FryGit87/RockPaperScissors">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                </a>
              </div>
            </div>
          </div>
          <div style={{ backgroundImage: `url(${Movie})`}}className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
 
            {/* {Hover effects} */}
             <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
Password Generator
              </span>
              <div className='pt-8 text-center'>
                <a href="https://frygit87.github.io/Vault-Company_Password-Generator/">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Live</button>
                </a>
                
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                </a>
              </div>
            </div>
          </div>
          <div style={{ backgroundImage: `url(${Rpg})`}}className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
 
           
          </div>
        </div>

      </div>
    </div>
  )
}

export default Project