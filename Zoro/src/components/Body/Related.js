import React from 'react'

const Related = (props) => {

  return (
       <div>
        {props.AnimeData.map((anime) => {
            return (
              <div className=" bg-[#444850] w-[280px] h-[125px] flex">
                <div>
                  <img
                    src={anime.img}
                    alt="jjk"
                    className=" w-[50px] pt-5 ml-5"
                  />
                </div>
                <div className=" ml-3 pt-5 relative ">
                  <h1 className=" text-white hover:text-[#cae962] cursor-pointer">
                    Jujutsu_kaisen 0<br /> Movie
                  </h1>
                  <div>
                    <span className=" bg-[#b0e3af] rounded-l-md text-[12px] pl-1 pr-1  ">
                      cc 10
                    </span>
                    <span className=" bg-[#e3b5cd] ml-1 text-[12px] pl-1 pr-1">
                      mic 10
                    </span>
                    <span className=" bg-[#555f69] ml-1 text-white text-[12px] pl-1 pr-1">
                      10
                    </span>
                    <span className=" text-[#72808d] text-[12px] pl-1 pr-1">
                      .
                    </span>
                    <span className=" text-[#ddd] text-[12px] pl-1 pr-1">
                      TV
                    </span>
                  </div>
                </div>
                <div className=" absolute right-8 pt-8">
                  <h1 className=" text-[30px] text-[#6c7785]  hover:text-[#cae962] cursor-pointer">
                    +
                  </h1>
                </div>
              </div>
            );
        })}
       </div> 
  )
}

export default Related