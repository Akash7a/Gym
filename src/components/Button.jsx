import React from 'react'

const Button = ({ type="button", innerText="Join", className="p-2 rounded-sm", ...props }) => {
  return (
    <button type={type} className={className} {...props}>
      {innerText}
    </button>
  )
}

export default Button