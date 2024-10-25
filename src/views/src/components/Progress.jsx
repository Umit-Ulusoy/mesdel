import React from 'react'

function Progress({value, styles, props}) {
    return (
        <div className='flex flex-row gap-2 justify-center items-center w-[17rem]'>
            <progress 
            className={`progress w-56 ${styles ? styles : ''}`}
            value={value ?? 0} 
            max="100"
            id="progress"
            {...props}
            ></progress>
            <span id='progressText'></span>
        </div>  
    )
}

export default Progress