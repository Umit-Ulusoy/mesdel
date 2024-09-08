import { useEffect, useState } from 'react'


function Home(){
    const [token, setToken] = useState('')
    useEffect(()=>{
    chrome.storage.local.get('token', (result) => {
        if (result.token) {
            console.log("res tok",result?.token)
            setToken(result.token)
        } else {
            console.log("Token bulunamadı")
        }
        })
    })
    return(
        <>
        HOME
<button onClick={()=>console.log("ONCLİCK, ", token)}>GET TOKEN</button>
TOKEN: {token}

        </>
    )
}

export default Home