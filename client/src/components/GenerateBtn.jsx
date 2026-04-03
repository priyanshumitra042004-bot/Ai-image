import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import { AppContext } from '../context/appcontext'
import { useNavigate } from 'react-router-dom'

const GenerateBtn = () => {
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
    <div className='pb-16 text-center'>
      <h1 className='text-3xl md:text-4xl lg:text-4xl mt-4 font-semibold text-neutral-800 py-6'> See the Magic . Try Now </h1>
      <button onClick={onClickHandler} className='flex justify-center border-4 m-auto items-center gap-2 px-12 py-3 rounded-full text-white hover:scale-75 transition-all duration-500'>
        Generates Images
        <img src={assets.staricon} className='h-6' alt="" />
      </button>
    </div>
  )
}

export default GenerateBtn
