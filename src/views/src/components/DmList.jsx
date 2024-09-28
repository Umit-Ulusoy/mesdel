import React, { useState, useEffect } from 'react';
import { getUserDms } from '../helpers/apiHandler'

function DmList({token}) {
    const [dms, setDms] = useState([])
	const [userToken, setUserToken]  = useState(null)
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null)

    useEffect(()=>{
        if(token){
            setUserToken(token)
        }
        if(userToken){
            async function fetchDms() {
                try {
                    const tokenParser = userToken.replace('"', '')
                    const dmsData = await getUserDms(tokenParser)
                    console.log('dms ', dmsData)
                    setDms(dmsData)
                    
                    
                    
                    
                } catch (err) {
                    setError(err.message)
                } finally {
                    setLoading(false)
                }
            }
    
            fetchDms()
        }
        
    })

    if (loading) return <div>Yükleniyor...</div>
    if (error) return <div>Error: {error}</div>

    return (
        <>
		X: {userToken}
        {dms?.map(dm => (
            <div key={dm.id}>
            <p>Username: {dm.user.username}</p>
            <p>Global Name: {dm.user.globalName}</p>
            </div>
        ))}
        </>
    )
}

export default DmList
