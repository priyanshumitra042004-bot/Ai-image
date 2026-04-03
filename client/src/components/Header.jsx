import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import { motion } from "motion/react"
import { AppContext } from '../context/appcontext'
import { useNavigate } from 'react-router-dom'

const Header = () => {
  const {user,setshowlogin}=useContext(AppContext)
  const navigate =useNavigate()
  const onClickHandler =()=>{
    if(user){
      navigate('/result')
    } else{
      setshowlogin(true)
    }
  }
  
  return (
    <motion.div className='flex flex-col justify-center items-center text-center my-20' 
    initial={{opacity:0.2, y:100}}
    transition={{duration:3}}
  whileInView={{opacity:1, y:0}}>
      
      <div className='text-stone-500 items-center gap-2 bg-white px-6 py-1 rounded-full inline-flex'>
        <p>Best Image To Generate</p>
        <img className='w-5' src={assets.staricon} alt="star icon" />
      </div>

      <h1 className='text-4xl max-w-200 sm:text-7xl sm:max-w-200 text-center mx-auto mt-8'>
        Turn Text To <span className='text-red-600'>Image</span> In Seconds
      </h1>

      <button onClick={onClickHandler} className='text-white bg-black sm:text-lg w-auto mt-7 px-10 py-4 flex items-center gap-2 rounded-full hover:bg-gray-800 transition-all duration-300'>
        Generate Images
      </button>

    </motion.div>
  )
}

export default Header