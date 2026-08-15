import React from 'react'
import Page2Card from './Page2Card'

const P2Left = () => {
  return (
    <div className='h-full w-1/2 flex flex-col justify-between'>
        <div className='text-6xl/18 font-bold mt-5'>
            <h1>E-com market is expected <br/> to exceed 
            <span className='bg-green-400 rounded-full '>$300B</span> in 2027</h1>
            <p className='text-2xl/10 text-gray-400 mt-8 tracking-wide flex '>In india MSME contribution to eTailing sales <br />
            is expected to grow between 80-70% <br />
            annually to reach USDSOBn by FY 2027</p>
        </div>
        <div>
            <Page2Card/>
        </div>

    </div> 
  )
}

export default P2Left