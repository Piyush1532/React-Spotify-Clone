import React from 'react'
import Navbar from './Navbar'
import { albumsData } from '../assets/assets'
import Albumitem from './Albumitem'
import { songsData } from '../assets/assets'
import Songitem from './Songitem'
const Displayhome = () => {
  return (
    <>
      <Navbar/>
     <div className="mb-4">
      <h1 className='my-5 font-bold text-2xl'>Featured Charts</h1>
      <div className="flex overflow-auto">
      {albumsData.map((item,index)=>(<Albumitem key={index} name={item.name} desc={item.desc} id={item.id} image={item.image}/> ))}
      </div>
     </div>

     <div className="mb-4">
      <h1 className='my-5 font-bold text-2xl'>Today's Biggest Hit's</h1>
      <div className="flex overflow-auto">
      {  songsData.map((item,index)=>(<Songitem key={index} name={item.name} desc={item.desc} image={item.image} id={item.id}/>))}
      </div>
     </div>
    </>
  )
}

export default Displayhome

{/* <div className="my-5 font-bold text-2xl">
      {albumsData.map((item,index)=>(<Albumitem key={index} name={item.name} desc={item.desc} id={item.id} image={item.image}/> ))}
     </div> */}