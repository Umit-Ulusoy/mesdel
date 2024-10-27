import React, { useState } from 'react'

import { DeletionScreen } from '@pages'
import { ModalUI, UserCard } from '@partials'


function DmList({dms, filteredDms}) {

    const [showModal, setShowModal] = useState(false)
    const [modalData, setModalData] = useState(null)


    const handleOpenModal = (data) => {
        setModalData(data)
        setShowModal(true)
    }
    const handleCloseModal = () => {
        setShowModal(false)
    }

   
    return (
        <section id="dmlist" className="w-full flex flex-col gap-4">
			
            <div className='flex flex-col gap-3'>
                {(filteredDms || dms)?.map((dm, i)=> <UserCard data={dm} key={i} handleClick={()=> handleOpenModal(dm)} /> )}
            </div>

            <ModalUI
                show={showModal} 
                onClose={handleCloseModal} 
                children={<DeletionScreen data={modalData} />}
                title="Message Deletion Screen"
				styles="mt-4 text-gray-600 flex flex-col justify-center items-center gap-[15px]"
            />
        </section>
    )    
}

export default DmList;
