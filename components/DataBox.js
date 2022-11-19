import React from 'react'
import Twitter from "./twitter.png";
import Discord from './discord.png';
import Link from 'next/link';
const DataBox = ({platform,funcType,desc,isgiveaway,}) => {
    const login =()=> {
        if(platform=='Discord'){
            alert('We will be Soon on Discord')
        }
        console.log();
    }
  return (
    <div className="w-[260px] h-[300px] bg-[#1F2937] text-white rounded-lg text-center flex flex-col justify-center cursor-pointer">
<h1 className="text-xl text-center">{platform}</h1>
<h1 className="text-xl text-center">{funcType}</h1>

{/* <img src={platform=="Twitter"?Twitter:Discord} alt="" width="30px" height="30px" className=""/> */}
<div className="bg-[#D8FF69] w-[100px] h-[30px] p-1 rounded-lg text-black absolute top-[215px] left-[85px]" >{isgiveaway?"Create" : 'Login'}</div>
<p className="text-lg text-white">You can create a giveaway for your base and distribute the prize on $SOL</p>
    </div>
  )
}

export default DataBox;