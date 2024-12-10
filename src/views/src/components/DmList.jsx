import React, { useState } from 'react'

import { DeletionScreen } from '@pages'
import { ModalUI, UserCard } from '@partials'


function DmList({dms, isFilteringDms, filteredDms, progressValue, isComplete}) {

    const [showModal, setShowModal] = useState(false)
    const [modalData, setModalData] = useState(null)


    const handleOpenModal = (data) => {
        setModalData(data)
        setShowModal(true)
    }
    const handleCloseModal = () => {
        setShowModal(false)
    }

    const dmsToDisplay =
        isFilteringDms
            ? filteredDms
            : dms;

    const noResults = dmsToDisplay.length === 0;
   
    return (
        <section id="dmlist" className="w-full flex flex-col gap-4">
			
            <div className='flex flex-col gap-3'>
                {noResults ?
                <div className="text-center text-base italic text-neutral-500 mb-4 pt-8">Herhangi bir DM kanalı bulunamadı!</div>
            :
            dmsToDisplay?.map((dm, i)=> <UserCard data={dm} key={i} handleClick={()=> handleOpenModal(dm)} /> )}
            </div>

            <ModalUI
                show={showModal} 
                onClose={handleCloseModal}
                children={<DeletionScreen data={modalData} progressValue={progressValue} isComplete={isComplete} />}
                title="Message Deletion Screen"
				styles="mt-4 text-gray-600 flex flex-col justify-center items-center gap-[15px]"
            />
        </section>
    )    
}

export default DmList;
