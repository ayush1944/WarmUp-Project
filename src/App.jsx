import React from 'react'
import Home from './Components/Home'
import { Link, Route, Routes } from 'react-router-dom'
import Details from './Components/Details'


function App() {
  return (
    <div className='h-screen w-full flex font-[gilroy]'>
      <div className='absolute left-[1.55%] top-[2%] flex flex-col gap-1'>
      <Link to="/"  className=' border rounded border-black-700 px-2 text-black-100 '>Home
      </Link>
      <Link to="/"  className='border rounded border-black-700 px-2 text-black-100  '>Back
      </Link>
      </div>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/details/:id" element={<Details/>} />
      </Routes>
    </div>
  )
}

export default App
