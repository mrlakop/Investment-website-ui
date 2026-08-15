import React from 'react'

const Page2Card = () => {
  return (
    
    <div className='flex gap-10 mb-5'>
        <div class="relative w-84 h-76 bg-[#2563eb] text-white p-6 rounded-3xl rounded-tr-[4rem] flex flex-col justify-end font-sans">
      
      
      <div class="absolute top-2 right-2 w-14 h-14 bg-white rounded-full flex items-center justify-center border-4 border-slate-50 text-black">
        <svg xmlns="http://w3.org" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
        </svg>
      </div>
    
      
      <div>
        <div class="text-4xl font-bold tracking-tight mb-2">26,7%</div>
        <p class="text-2xl text-blue-100 font-medium leading-snug max-w-45">
          Expected annual growth of eCom market size
        </p>
      </div>
    </div>



    <div class="relative w-84 h-76 bg-[#3ceb0b] text-white p-6 rounded-3xl rounded-tr-[4rem] flex flex-col justify-end font-sans">
      <div class="absolute top-2 right-2 w-14 h-14 bg-white rounded-full flex items-center justify-center border-4 border-slate-50 text-black">
        <svg xmlns="http://w3.org" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
        </svg>
      </div>
    
      
      <div>
        <div class="text-4xl font-bold tracking-tight mb-2">25%</div>
        <p class="text-2xl text-blue-100 font-medium leading-snug max-w-45">
          Expected annual growth of eCom market size
        </p>
      </div>
    </div>

    </div>
    
  )
}

export default Page2Card