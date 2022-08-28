import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                <div className='sm:text-right pb-8 pl-4'>
                    <p className='text-4xl font-bold inline border-b-4 border-Green-600'>
                        About Me
                    </p>
                </div>
                <div></div>
                </div>
                <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8'>
                    <div>
                          <p className='sm:text-right text-4xl font-bold'>Hi my name is Peter and this is my portfolio!!  </p>
                    </div>
                    <div>
                        <p>Starting a working career very young, ever serching for ways to keep busy and innovate. My professional career has lead from School into the Automotive Industry, becoming a qualified technician. A job that requires a high standad of investigation and superior problem solving skills. After eventually finding this industry quite limiting, it was time to move on. Then began, travel and exploration. A brief, yet extensive trip across, United States, UK, Europe and Asia, generated an interest in hospitality. Following this interest once returning to Australia helped to hone skills that are crucial for any work environment. High stress environments, results-driven, working in a team, leadership opportunities and most importantly problem solving. Fast forwarding 10 years, after building one restaurant, one cafe and a production canteen from the ground up, it is time to move on to set the sites higher, test the abilities, chase new goals and achieve new milestones. Now begins the Tech era.</p>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default About