import React from 'react'
import { assets, WalkData } from '../assets/assets'

const Walk = () => {
  return (
    <div className='mt-60 ml-120  ' >

      <h1 className='text-3xl sm:text-4xl font-semibold mb-2   '>
        How it Works
      </h1>

     
      <div className='space-y-4 w-max mt-20' >
        {WalkData.map((item, index) => (
          <div key={index}
          className='bg-white/20 px-8 p-5 border cursor-pointer shadow-md flex items-center hover:scale-70 transition-all duration-100 rounded-full '>
            <img className='w-10' src={assets.staricon} alt="" />
            <div>
              <h2 className='text-xl font-medium' >{item.title}</h2>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>

    </div>
  )
}

export default Walk