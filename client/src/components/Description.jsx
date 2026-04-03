import React from 'react'
import { assets } from '../assets/assets'

const Description = () => {
  return (
    <div className='flex items-center justify-center my-24 p-6 md:px-28n flex-col'>
      <h1 className=' text-3xl sm:text-4xl font-semibold'> Create Ai Image</h1>
      <p className='text-gray-400 mb-8'> Turn your imaginaton into visuals </p>

      <div className='flex flex-col gap-5 md:gap-14 md:flex-row-items-center'>
        <img src={assets.staricon} className='w-80 rounded-lg x1:w-96' alt="" />

      </div>

      <h2 className='text-3xl font-medium '> Introducing the Ai powered Text to Image Generator </h2>

      <p className=''> "A mesmerizing abstract composition of swirling colors and dynamic shapes, 
        blending deep blues, vibrant purples, fiery oranges, and soft pastels. Fluid, organic forms
         intertwine with geometric patterns, creating a sense of movement and depth. Light glows subtly from within,
          casting ethereal reflections across the composition. Hints of metallic textures and translucent layers give a three-dimensional
           evoking curiosity and introspection. Soft gradients merge with sharp contrasts, and the visual rhythm pulses gently, inviting the viewer to explore an endless, abstract universe of color, form, and imagination.
        </p>

    </div>

  )
}

export default Description
