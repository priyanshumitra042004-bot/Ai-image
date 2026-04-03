import React, { useState, useContext } from 'react'
import { assets } from '../assets/assets'
import { AppContext } from '../context/appcontext'

const Result = () => {

  const [image,setimage] = useState(assets.newai)
  const [isimageloaded,setisimageloaded] = useState(false)
  const [loading,setloading]= useState(false)
  const [input,setinput] = useState("")

  const { generateImage } = useContext(AppContext)

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    setloading(true);

    if (input) {
      const generatedImage = await generateImage(input);

      if (generatedImage) {
        setisimageloaded(true);
        setimage(generatedImage);
      }
    }

    setloading(false);
  };

  return (
    <form onSubmit={onSubmitHandler} className='flex flex-col min-h-[90vh] items-center'>

      <div>
        <div className='relative'>
          <img src={image} className='max-w-s rounded w-2xl' alt="" />
          <span className='absolute bottom-0 left-0 h-1 bg-blue-600 w-full transition-all duration-[10s]'></span>
        </div>

        <p className={!loading ? 'hidden' : ''}>LOADING...</p>
      </div>

      {!isimageloaded &&
        <div className='flex w-full bg-neutral-500 text-white text-sm p-0.5 mt-10 rounded-full'>
          <input
            onChange={e => setinput(e.target.value)}
            value={input}
            type="text"
            placeholder='Describe What Do You Want To Generate'
            className='flex-1 bg-transparent outline-none ml-8 max-sm:w-20 w-full'
          />
          <button type='submit' className='bg-zinc-900 rounded-full px-10 py-3 text-white'>
            Generate
          </button>
        </div>
      }

      {isimageloaded &&
        <div className='flex gap-2 flex-wrap justify-center text-white mt-10 p-0.5'>
          <p
            onClick={() => { setisimageloaded(false) }}
            className='bg-transparent border border-zinc-900 text-black px-8 py-3 rounded-full cursor-pointer'
          >
            Generate Another
          </p>

          <a
            className='bg-zinc-900 px-8 py-3 rounded-full cursor-pointer text-white'
            href={image}
            download
          >
            Download
          </a>
        </div>
      }

    </form>
  )
}

export default Result
