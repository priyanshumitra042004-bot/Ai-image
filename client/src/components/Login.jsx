import React, { useContext, useEffect, useState } from 'react'
import { assets } from '../assets/assets'
import { AppContext } from '../context/appcontext'
import axios from 'axios' 
import { toast } from 'react-toastify'

const Login = () => {
    const [state, setstate] = useState('login')
    const { setshowlogin, backendUrl, settoken, setuser } = useContext(AppContext)
    

    const [name, setname] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    useEffect(() => {
        if (typeof document !== 'undefined') {
            document.body.style.overflow = 'hidden'
        }
        return () => {
            if (typeof document !== 'undefined') {
                document.body.style.overflow = 'unset'
            }
        }
    }, [])

    const handleLogin = async (e) => {
        e.preventDefault()  

        try {
            
            if(state === 'login'){
                const { data } = await axios.post(backendUrl + '/api/user/login', { email, password })

                if(data.success){
                    settoken(data.token)
                    setuser(data.user)
                    localStorage.setItem('token', data.token)
                    setshowlogin(false)
                } else {
                    toast.error(data.message)
                }
            } else {
                const { data } = await axios.post(backendUrl + '/api/user/register', { name, email, password })

                if(data.success){
                    settoken(data.token)
                    setuser(data.user)
                    localStorage.setItem('token', data.token)
                    setshowlogin(false)
                } else {
                    toast.error(data.message)
                }
            }
        } 
        catch (error) {
            console.log("FULL ERROR:", error);
            toast.error(error.response?.data?.message || "An error occurred");
        }
    }

    return (
        <div className='fixed top-0 left-0 right-0 bottom-0 z-10 backdrop-blur-sm bg-black/30 flex justify-center items-center'>
            <form 
              className='relative bg-white p-10 rounded-3xl text-slate-500 h-100 mt-20'
              onSubmit={handleLogin} 
            >
                <h1 className='text-center text-2xl text-neutral-700 font-medium'>
                    {state === 'login' ? 'Login' : 'Sign Up'}
                </h1>
                <p>Welcome back! please sign in to continue </p>

                {state !== 'login' && 
                    <div className='border px-6 py-2 flex items-center gap-2 rounded-full mt-4'>
                        <img width={20} src={assets.profile} alt="" />
                        <input
                            onChange={e => setname(e.target.value)} 
                            value={name}
                            className='outline-none text-sm'
                            type="text"
                            placeholder='Name' 
                        />
                    </div>
                }

                <div className='border px-6 py-2 flex items-center gap-2 rounded-full mt-4'>
                    <img width={20} src={assets.profile} alt="" />
                    <input
                        className='outline-none text-sm'
                        type="email"
                        placeholder='Email Id'
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                <div className='border px-6 py-2 flex items-center gap-2 rounded-full mt-4'>
                    <img width={20} src={assets.profile} alt="" />
                    <input
                        className='outline-none text-sm'
                        type="password"
                        placeholder='Password'
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>

                <button 
                    type='submit'
                    className='bg-blue-600 w-full text-white py-2 rounded-full mt-4 hover:bg-blue-700 transition-all'
                >
                    {state === 'login' ? 'Login' : 'Create Account'}
                </button>

            
                {state === 'login' ? (
                    <p onClick={() => setstate('signup')} className='mt-5 text-center cursor-pointer'>
                        Don't have an account? <span className='text-red-600'>Sign up</span>
                    </p>
                ) : (
                    <p onClick={() => setstate('login')} className='mt-5 text-center cursor-pointer'>
                        Already have an account? <span className='text-red-600'>Login</span>
                    </p>
                )}

                <img
                    onClick={() => setshowlogin(false)}
                    className='absolute top-5 right-5 w-6 mix-blend-multiply cursor-pointer'
                    src={assets.crossicon}
                    alt=""
                />
            </form>
        </div>
    )
}

export default Login