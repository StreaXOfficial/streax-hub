import React from 'react'
import Twitter from "./twitter.png";
import Discord from './discord.png';
const DataBox = ({platform,pic}) => {
    const login =()=> {
        if(platform=='Discord'){
            alert('We will be Soon on Discord')
        }
        console.log('signin');
    }
  return (
    <div className="w-[260px] h-[300px] bg-[#1F2937] text-white rounded-lg text-center flex flex-col justify-center cursor-pointer">
<h1 className="text-xl text-center">{platform}</h1>
{/* <img src={platform=="Twitter"?Twitter:Discord} alt="" width="30px" height="30px" className=""/> */}
<div className="bg-[#D8FF69] w-[100px] h-[30px] p-1 rounded-lg text-black absolute top-[185px] left-[85px]" onClick={login}>Login </div>
    </div>
  )
}

export default DataBox;