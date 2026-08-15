import React from 'react'
import { ArrowRight } from 'lucide-react'

const RightCard = (props) => {
    return (
        <div className='h-full overflow-hidden relative w-80 rounded-4xl'>
            <img className='h-full w-full object-cover brightness-70  '
                src={props.imgUrl} alt="" />
            <div className='absolute top-0 left-0 h-full w-full p-10 flex flex-col justify-between '>
                <h1 className='bg-white flex justify-center items-center h-12 w-12 rounded-full text-2xl'>1</h1>
                <div>
                    <p className='text-3xl mb-8 text-white'>Prime customers,<br />that have access <br/>
                    to bank credit <br /> and are satisfied <br /> with the current <br /> product
                    </p>
                    <div className='flex justify-between'>
                        <button className='text-xl bg-blue-600 rounded-full px-4'>Satisfied</button>
                        <button className='bg-blue-600 rounded-full p-4'><ArrowRight size={24}/></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RightCard