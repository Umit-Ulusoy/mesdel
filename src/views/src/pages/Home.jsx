import { useEffect, useState } from 'react'
import { IsLogin } from '../components/index'

function Home(){
    const [token, setToken] = useState('')
    useEffect(()=>{
        chrome.storage.local.get('token', (result) => {
            if (result.token) {
                setToken(result.token)
            } else {
                console.log("Token bulunamadı")
            }
        })
    })
    return(
        <>
            <IsLogin  />
        </>
    )
}

export default Home