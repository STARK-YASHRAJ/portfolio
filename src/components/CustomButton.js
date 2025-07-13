import React from 'react'

export default function CustomButton({ title = "", type = "button", onClick = () => null, className = "", id = "" }) {
    return (
        <button type={type} onClick={onClick} className={`bg-yellow100 py-2 text-white px-8 transition delay-150 duration-300 ease-in-out hover:bg-slate-600 hover:text-gray-200 ${className}`}>{title}</button>
    )
}
