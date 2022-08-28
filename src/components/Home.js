import React from 'react'


const Home = () => {
  return (
    <div name ='home'   className='w-full h-screen flex bg-gray-900'>
        <div className=' mx-auto px-8 flex flex-col justify-center h-full'>
            <p className='text-orange-600' >Hi, my name is</p>
            <h1 className='text-4xl sm:text-7xl font-bold text-black'>Peter Jolley</h1>
            <h2 className='text-4xl sm:text-7x1 font-bold text-orange-600'>I'm a FullStack Web Developer</h2>
          
        </div>
    </div>
  )
}

export default Home