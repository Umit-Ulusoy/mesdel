import React, { useState, useEffect } from 'react';
import { getUserDms } from '../helpers/apiHandler'
import { Modal } from './index'
function DmList({token}) {
    const [dms, setDms] = useState([]);
    const [userToken, setUserToken] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const [showModal, setShowModal] = useState(false)

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
    }, [token]);

    if (loading) return <div>Yükleniyor...</div>;
    if (error) return <div>Error: {error}</div>;
    const handleOpenModal = () => {
        setShowModal(true)
    }
    const handleCloseModal = () => {
        setShowModal(false)
    }

        return (
            <>
                {dms?.map(dm => (
                    <div key={dm.id}>
                        <img src={dm.user.avatarUrl} alt={`${dm.user.username}'s avatar`} title={`${dm.user.username}'s avatar`} />
                        <p>Username: {dm.user.username}</p>
                        <p>Global Name: {dm.user.globalName}</p>
                    </div>
                ))}
                <button onClick={handleOpenModal}>XD</button>
                <Modal 
                    show={showModal} 
                    onClose={handleCloseModal} 
                    children={<>
                        HEW
                    </>}
                />
            </>
        );
        
}

export default DmList;
