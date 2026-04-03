import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className=' flex items-center justify-between gap-4 py-3 mt-20  '>
        <img className='mix-blend-color-burn' src={assets.instalogo} alt=""  width={75}/>

        <p className='flex-1 border-5 border-gray-400 text-shadow-lime-200'> Copyright priyanshumitra042004@gmail.com || ALL RIGHT ARE RESERVERD </p>

      
    </div>
  )
}

export default Footer
