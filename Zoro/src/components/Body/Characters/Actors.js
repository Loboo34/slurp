import React from 'react'

const Actors = () => {
  return (
    <div className='flex  ml-4 bg-red-400 w-[300px] h-[80px] rounded-md'>
        <div className=' flex space-x-4 pt-4 pl-4'>
            <img src='/img/rimuru.jpg' alt='prof'  className=' w-12 h-12 rounded-full' />
           <div>
           <h6 className=' text-[13px] text-white'>Itadori,</h6>
           <h6 className=' text-[13px] text-white'>Yuuji</h6>
           <h6 className=' text-[11px] text-white'>Main</h6>
           </div>
        </div>
        <div className=' flex space-x-4 pt-4 pl-14'>
          <div>
          <h1 className=' text-[13px] text-white'>Enoki,</h1>
            <h1 className=' text-[13px] text-white'>Junya</h1>
            <h1 className=' text-[11px] text-white'>Japanese</h1>
          </div>
          <img src='/img/rimuru.jpg' alt='prof'  className=' w-12 h-12 rounded-full' />
        </div>
    </div>
  )
}

export default Actors