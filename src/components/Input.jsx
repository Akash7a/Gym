import React from 'react'

const Input = ({ type = "text", value="", placeholder = "Enter your number", className = "p-2", ...props }) => {
  return (
    <input type={type} value={value} placeholder={placeholder} className={className} {...props} />
  )
}

export default Input