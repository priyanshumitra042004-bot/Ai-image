import React, { useContext } from 'react'
import './index.css'
import { Routes,Route } from 'react-router-dom'
import Buycredits from './pages/Buycredits'
import Home from './pages/Home'
import Result from './pages/Result'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Login from './components/Login'
import { AppContext } from './context/appcontext'
import { ToastContainer, toast } from 'react-toastify'; 



const App = () => { 

  const {showlogin}= useContext(AppContext)
  return (
    <div className='px-4 sm:px-10 md:px-14 lg:px-28 min-h-screen bg-radial-[at_50%_75%] from-sky-200 via-blue-400 to-indigo-900 to-90%"'>
      <ToastContainer position='bottom-right'/>

      <Navbar/>
     {showlogin &&  <Login/>}
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/buy' element={<Buycredits/>}/>
        <Route path='/result' element={<Result/>}/>
      </Routes>
      <Footer/>

      
      
    </div>
  )
}

export default App
