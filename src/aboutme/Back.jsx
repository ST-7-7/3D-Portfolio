import React from 'react'

const Back = () => {
  return (
    <div className="group relative w-64 h-64 overflow-hidden my-1 flex justify-center items-end perspective-[2500px] border-2 border-gray-500 rounded-lg">
      {/* Title Image with opacity change on hover */}
      <img
        src="/element/p-back.png"
        alt="Dark Rider Title"
        className="absolute w-full top-1/2 transform -translate-y-1/2 transition-opacity duration-500 ease-in-out opacity-100 group-hover:opacity-15"
      />

      {/* Character Image */}
      <img
        src="/element/back.png"
        alt="Zelda Character"
        className="absolute bottom-0 w-full scale-[1.1] opacity-0 transform translate-y-0 transition-all duration-500 ease-in-out group-hover:opacity-100 group-hover:translate-y-[-28%] group-hover:translate-z-[100px]"
      />

      
    </div>
  )
}

export default Back