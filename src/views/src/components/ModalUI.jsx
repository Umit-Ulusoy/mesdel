import React from 'react'
import CloseIcon from './icons/CloseIcon'

const ModalUI = ({ show, onClose, children, title }) => {
    if (!show) return null

    return (
        <>
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                <div className="bg-white rounded-lg shadow-lg p-6 max-w-md mx-auto">
                    <div className='flex flex-row mx-auto justify-between'>
                        <h2 className="text-xl font-semibold text-gray-800">{title} </h2>
                        <div className="flex justify-end">
                            <button
                                onClick={onClose}
                                className="btn btn-square btn-outline"
                            >
                                <CloseIcon />
                            </button>
                        </div>
                    </div>
                        
                    <p className="mt-4 text-gray-600">
                        {children}
                    </p>
                        
                    
                </div>
            </div>
        </>
    )
}

export default ModalUI
