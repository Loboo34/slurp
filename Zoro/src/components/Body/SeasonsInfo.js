import React from 'react'

const SeasonsInfo = () => {
  const myStyle = {
    backgroundImage:  'url(/img/jjk.jpg)',
    // backgroundPositionX: 'right',
    backgroundRepeat: 'no-repeat',
    backgroundBlendMode: 'overlay',
    backgroundSize: 'cover',
    width: '100%',
 
      }
  return (
    <div className=' pl-4 pb-14'>
<span  className=" text-white pl-8 pr-8 pt-5 pb-5 border border-[#cae962] rounded-xl hover:text-[#cae962] bg-[#0000009f] cursor-pointer " style={myStyle}> Season 1</span>
    </div>
  )
}

export default SeasonsInfo