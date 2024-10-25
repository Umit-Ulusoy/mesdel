import React, { useState, useEffect } from 'react'
import { getUserDms } from '../helpers/apiHandler'
import { Modal } from './index'
import { DeletionScreen } from '../pages/index'
import ModalUI from './ModalUI'
import UserCard from './UserCard'

function DmList({token}) {
    const [dms, setDms] = useState([])
    const [userToken, setUserToken] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    const [showModal, setShowModal] = useState(false)
    const [modalData, setModalData] = useState(null)

    useEffect(() => {
        if (token) {
            setUserToken(token);
            async function fetchDms() {
                try {
                    const tokenParser = token.replace(/"/g, '');
                    console.log('DM dosyasındaki token: ', tokenParser);
                    
                    let dmsData = await getUserDms(tokenParser);
                    dmsData = JSON.parse(dmsData);
                    setDms(dmsData);
                    
                } catch (err) {
                    setError(err.message);
                } finally {
                    setLoading(false);
                }
            }

            fetchDms();
        }
    }, [token])

    if (loading) return <div>Yükleniyor...</div>
    if (error) return <div>Error: {error}</div>
    const handleOpenModal = (data) => {
        setModalData(data)
        setShowModal(true)
    }
    const handleCloseModal = () => {
        setShowModal(false)
    }

    return (
        <>
            <div className='flex flex-col gap-3'>
                {dms?.map((dm, i)=> <UserCard data={dm} key={i} handleClick={()=> handleOpenModal(dm)} /> )}
            </div>

            <ModalUI
                show={showModal} 
                onClose={handleCloseModal} 
                children={<DeletionScreen data={modalData} />}
                title="Message Deletion Screen"
				styles="mt-4 text-gray-600 flex flex-col justify-center items-center gap-[15px]"
            />
        </>
    )    
}

export default DmList;
