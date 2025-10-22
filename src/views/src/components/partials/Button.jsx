import React from 'react'

function Button({text, styles, handleClick, props}) {
    return (
        <button 
        className={`btn ${styles ? styles : ''}`}
        onClick={handleClick}
        {...props}
        > {text} </button>
    )
}

export default Button