import React from 'react'

const Albumitem = ({image,name,desc,id}) => {
  return (
    <div className='min-w-[100px] p-2px3 rounded cursor-pointer hover:bg-[ffffff26]'>
      <img src={image} alt="" />
    </div>
  )
}

export default Albumitem
