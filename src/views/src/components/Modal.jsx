import React from 'react'

const Modal = ({ show, onClose, children }) => {
    if (!show) return null

    return (
        <div className="modal-overlay">
            <div className="modal">
                <button className="close-button" onClick={onClose}>
                </button>
                <div className="modal-content">{children}</div>
            </div>
        </div>
    )
}

export default Modal