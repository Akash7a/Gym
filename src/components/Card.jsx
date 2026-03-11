import React from 'react'

const Card = ({ image, icon, title, desc,...props }) => {
  return (
    <div {...props} className="bg-black rounded-xl overflow-hidden border border-gray-800 hover:scale-105 transition duration-300">

      <img
        src={image}
        alt={title}
        className="h-48 w-full object-cover"
      />

      <div className="p-6">

        <div className="text-yellow-500 mb-4">
          {icon}
        </div>

        <h3 className="text-xl font-semibold mb-2 text-white">
          {title}
        </h3>

        <p className="text-gray-400 text-sm">
          {desc}
        </p>

      </div>

    </div>
  )
}

export default Card