import React from 'react'

const Navbar = (props) => {
  return (
    <div className='flex items-center justify-between py-8 px-18 sticky top-0 z-10'>
        <h4 className='bg-black text-white px-6 py-2 rounded-full uppercase '>{props.navText1}</h4>
        <button className='bg-gray-200 px-6 py-2 uppercase rounded-full tracking-widest text-sm '>{props.navText2}</button>
    </div>
  )
}

export default Navbar