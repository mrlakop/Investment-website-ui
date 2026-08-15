import React from 'react'
import P2Left from './p2LeftContent'
import P2Right from './p2RightContent'

const Page2Content = () => {
  return (
    <div className='py-10 px-18 flex gap-10 items-center h-[90vh]'>
        <P2Left/>
        <P2Right/>

    </div>
  )
}

export default Page2Content