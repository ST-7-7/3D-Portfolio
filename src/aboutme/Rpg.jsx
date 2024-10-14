import React from 'react'

const Rpg = () => {
  return (
    <div className="group relative w-64 h-64 overflow-hidden my-1 flex justify-center items-end perspective-[2500px] border-2 border-gray-500 rounded-lg">
      {/* Title Image with opacity change on hover */}
      <img
        src="/element/p-rpg.png"
        alt="Dark Rider Title"
        className="absolute w-full top-1/2 transform -translate-y-1/2 transition-opacity duration-500 ease-in-out opacity-100 group-hover:opacity-15"
      />

      {/* Character Image */}
      <img
        src="/element/hero4.gif"
        alt="Zelda Character"
        className="absolute bottom-0 w-full scale-[0.9] opacity-0 transform translate-y-0 transition-all duration-500 ease-in-out group-hover:opacity-100 group-hover:translate-y-[-23%] group-hover:translate-z-[100px] clip-path"
        style={{ clipPath: 'inset(30% 0 0 0)' }}
      />


      {/* Hover Text */}
      <p className="text-[#afb0b6] text-base kanit-regular !leading-none absolute bottom-5 left-4 opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100">
        Of course, there are still some clichés of the hero fighting!
      </p>
    </div>
  )
}

export default Rpg