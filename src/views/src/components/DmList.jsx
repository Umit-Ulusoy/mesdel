import React, { useState, useEffect } from 'react'
import { getUserDms } from '../helpers/apiHandler'
import { DeletionScreen } from '../pages/index'
import ModalUI from './ModalUI'
import UserCard from './UserCard'

import SearchInput from './SearchInput'

function DmList({token}) {
    const [dms, setDms] = useState([])
    const [filteredDms, setFilteredDms] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    const [showModal, setShowModal] = useState(false)
    const [modalData, setModalData] = useState(null)

    useEffect(() => {
        if (token) {
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

    const filterDms = () => {
        const searchInput = document.getElementById('search-input');
        const inputValue = searchInput.value;
        console.log(inputValue);
        
        const regex = new RegExp(inputValue, 'i');
        const filteredDms = dms.filter(dm => dm.user.globalName && dm.user.globalName.search(regex) !== -1);
        console.log(filteredDms);
        
        setFilteredDms(filteredDms.length ? filteredDms : null);
    };

    return (
        <section id="dmlist" className="w-full flex flex-col gap-4">
			<SearchInput handleChange={filterDms} />
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
