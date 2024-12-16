import React from 'react'
import { CloseIcon } from '@icons'
import { _t } from '@handlers';

const ModalUI = ({ show, onClose, children, title, styles, boxStyles }) => {
    if (!show) return null

    return (
        <>
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                <div className={`bg-white rounded-lg shadow-lg p-6 max-w-md mx-auto ${boxStyles ? boxStyles : ''}`}>
                    <div className='flex flex-row mx-auto justify-between items-center gap-[15px]'>
                        <h2 className="text-xl font-semibold text-gray-800">{title} </h2>
                        <div className="flex justify-end">
                            <button
                                onClick={onClose}
                                className="btn btn-square"
                                aria-label={ _t('close_modal_button') }
                            >
                                <CloseIcon />
                            </button>
                        </div>
                    </div>
                        
                    <div className={`${styles}`}>
                        {children}
                    </div>
                        
                    
                </div>
            </div>
        </>
    )
}

export default ModalUI
