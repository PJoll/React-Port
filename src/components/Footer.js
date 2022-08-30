import React from 'react'

export default function Footer()  {
  return (
    <div id='contact' className='text-gray-400 bg-gray-900 body-font flex justify-center items-center p-4'>
        <form method='POST' action="https://getform.io/f/ec03594b-259b-462f-a371-4a5355f8de21" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300'>Contact</p>
                <p className='text-gray-300 py-4'>Submit the form below or email me at - pjoll415@gmail.com </p>
            </div>
            <input className='bg-[#ccd6f6] p-2' type="text" placeholder='Name' name='name' />
            <input className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='Email' name='email' />
            <textarea className='bg-[#ccd6f6] p-2' name="message" rows="10" placeholder='Message'></textarea>
            <button className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center'>Contact me!</button>
        </form>
    </div>
  )
}

