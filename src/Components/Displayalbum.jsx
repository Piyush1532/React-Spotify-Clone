import React from 'react'
import Navbar from './Navbar'
import { useParams } from 'react-router-dom'
import { albumsData } from '../assets/assets'

const Displayalbum = () => {

    const {id}=useParams()
    const albumData=albumsData[id]
    console.log(albumData)
      return (
    <>
     <Navbar/> 
    </>
  )
}

export default Displayalbum
