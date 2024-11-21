import React from 'react'

function Contact() {
  return (
    <div>
       <form>
        <label className='text-2xl' for="name">Name:</label>
        <input className='text-xl h-10 w-[30%] flex flex-row border-4 ' type="text" id="name" name="name" required />
        <label className='text-2xl' for="name">Email:</label>
        <input className='text-xl h-10 w-[30%] flex flex-row border-4 ' type="email" id="email" name="email" required />
        <label className='text-2xl' for="name">Message:</label>
        <input className='text-xl h-30 w-[30%] flex flex-row border-4 ' type="textarea" id="msg" name="msg" required />
        <button className='text-xl m-5 justify-center pt-1 items-center h-10 w--full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg'>Submit</button>
      </form>
    </div>
  )
}

export default Contact