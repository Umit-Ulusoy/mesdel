import React, { useState, useEffect } from 'react';
import { getUserDms } from '../helpers/apiHandler'

function DmList() {
    const [dms, setDms] = useState([])
	const [userToken, setUserToken] = useState(localStorage.getItem("token"))
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
	
	async function fetchDms() {
		  const tx = userToken.toString()
          const dmsData = await getUserDms(tx)
		  
			 
			  console.log("DMS DATA AMK", dmsData)
		  
    }
	
	useEffect(()=>{
		console.log("effect", userToken)
		const x = fetchDms()
		setDms(x)
		console.log("xXXXX", x)
	}, [])
	
    return (
        <>
			
			USER TOKEN: {userToken}
			DMS: {JSON.stringify(dms)}
			
        </>
    )
}

export default DmList
/*
{dms?.map(dm => (
            <div key={dm.id}>
            <p>Username: {dm.user.username}</p>
            <p>Global Name: {dm.user.globalName}</p>
            </div>
        ))}
*/