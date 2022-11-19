import React from 'react'

const Choose = ({text}) => {
  return (
<div className="flex justify-center "> <div className="w-[700px] h-[100px] bg-white flex justify-between self-center pt-7 mb-3 rounded-lg">
    <div className="text-2xl"> {text}</div>
        <div className="bg-[red] w-[100px] h-[50px] rounded-lg text-center pt-3 mr-3">Add   </div>
    </div></div>
   
  )
}

export default Choose