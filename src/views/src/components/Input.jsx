import React from 'react'

function Input({value, handleChange, placeholder, type, styles, props}) {
    return (
        <>
            <input type={type}
            placeholder={placeholder} 
            className={`input input-sm input-bordered w-full max-w-xs ${styles ? styles : ""}`}
            onChange={handleChange}
            value={value}
            {...props}
            />
        </>
    )
}

export default Input