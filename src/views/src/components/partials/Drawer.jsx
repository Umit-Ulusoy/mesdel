import React from 'react'
import { CloseIcon } from '@icons'
import { _t } from '@handlers';

const Drawer = ({children, buttonText, styles}) => {

    return (
        <>
			<div className="drawer drawer-end z-10">
			  <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
			  <div className="drawer-content">
<label htmlFor="my-drawer-4" className={`drawer-button btn ${styles ? styles : 'btn-primary'}`}>{buttonText}</label>
			  </div>
			  <div className="drawer-side">
				<label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
				<ul className="menu bg-base-200 text-base-content min-h-full w-60 p-4">
					{children}
				</ul>
			  </div>
			</div>
        </>
    )
}

export default Drawer
