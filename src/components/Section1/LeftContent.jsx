import React from 'react'
import { ArrowUpRight } from 'lucide-react';

const LeftContent = () => {
  return (
    <div className='h-full w-1/3 flex flex-col justify-between '>
      
      <div className='p-5'>
        <h3 className='text-6xl font-bold mb-5 leading-[1.3]'>Prospective <br/>
         <span className='bg-gray-200 rounded-full '>Customer</span> <br /> Segmentation</h3>
        <p className='text-3xl'>Depending on customer <br /> satisfaction and access <br /> to banking products, potential <br /> target audience can be divided <br /> into three groups</p>
      </div>

    <div>
     <ArrowUpRight size={100} />
    </div>
    </div>

  )
}

export default LeftContent