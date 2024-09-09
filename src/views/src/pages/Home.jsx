import { useEffect, useState } from 'react'
import { IsLogin } from '../components/index'

function Home(){
    const [token, setToken] = useState('')
    const [tokenFound, setTokenFound] = useState(false)
    useEffect(()=>{
        chrome.storage.local.get('token', (result) => {
            if (result.token) {
                setToken(result.token)
                setTokenFound(true)
            } else {
                setTokenFound(false)
                console.log("Token bulunamadı")
            }
        })
    })
    return(
        <>
            <IsLogin tokenFound={tokenFound} />
        </>
    )
}

export default Home