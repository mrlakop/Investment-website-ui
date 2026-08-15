import React from 'react'
import Navbar from './Navbar'
import Page1Content from './Page1Content'

const Section1 = () => {

  const navBarname =[
    {navText1:"Target Audience" ,navText2:"Digital Banking Platform"},
    
  ]
  return (
    <div className='h-screen w-full '>
        {navBarname.map(function(elem){
          return <Navbar  navText1={elem.navText1} navText2={elem.navText2}/>
        })}
        <Page1Content/>
    </div>
  )
}

export default Section1