import React from 'react'

const Button = ({label}: any) => {
  return (
    <button className="flex justify-center items-center gap-2 px-7 py-2 border font-montserrat text-lg leading-none bg-[#2B5675] rounded-full text-white border-coral-red">
       {label}


    </button>
  )
}

export default Button