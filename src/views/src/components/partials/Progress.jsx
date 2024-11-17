import React from 'react'

function Progress({value, styles, props, id, isComplete}) {
    return (
        <div className='flex flex-row gap-2 justify-center items-center w-[17rem]'>
            <progress 
            className={`progress w-56 ${styles ? styles : ''}`}
            value={value} 
            max="100"
            id={id}
            {...props}
            ></progress>
            <span id={`${id}Text`}> {isComplete ? 'Tamamlandı!' : `${value}%`} </span>
        </div>  
    )
}

export default Progress