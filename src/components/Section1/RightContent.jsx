import React from 'react'
import RightCard from './RightCard'

const RightContent = () => {

  const user=[
    {imgUrl:'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'},
    {imgUrl:'https://images.unsplash.com/photo-1573496547376-81418527a728?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D'},
    {imgUrl:'https://images.unsplash.com/photo-1733348137613-90f1af8674fd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D'},
  ]
  return (
    <div className='h-full p-5 w-2/3 flex justify-between'>
        {user.map(function(elem){
          return <RightCard imgUrl={elem.imgUrl}/>
        })}
  
    </div>
  )
}

export default RightContent