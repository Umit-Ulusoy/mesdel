import React from 'react'
import { _t } from '@handlers';

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
            <span id={`${id}Text`}> {isComplete ?
            _t('deletion_progression_completed_text')
            :
            _t('deletion_progression_text', [value])} </span>
        </div>  
    )
}

export default Progress