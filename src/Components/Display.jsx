import React from 'react'
import Displayhome from './Displayhome'
import { Route, Routes } from 'react-router-dom'
import Displayalbum from './Displayalbum'

const Display = () => {
  return (
    <div className='w-[100%] m-2 pt-4 rounded bg-[#121212] text-white  overflow-auto lg:w-[75%] lg:ml-0'>
      <Routes>
        <Route path='/' element={<Displayhome/>}/>
        <Route path='/album/:id' element={<Displayalbum/>}/>
      </Routes>
    </div>
  )
}

export default Display
