import React from 'react'
import Navbar from '../Section1/Navbar'
import Page2Content from './Page2Content'

const Section2 = () => {

  const navBarname =[
    {navText1:"market trends" ,navText2:"Digital Banking Platform"},
    
  ]

  return (
    <div className=' h-screen w-full'>
       {navBarname.map(function(elem){
        return <Navbar navText1={elem.navText1} navText2={elem.navText2}/>
       })}
       <Page2Content/>
    </div>
  )
}

export default Section2