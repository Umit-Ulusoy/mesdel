import { useEffect, useState } from 'react'
import { IsLogin } from '../components/index'
import { setTokenFound, setToken, setHasToken } from '../store/slices/keepSlice'
import { useDispatch } from 'react-redux'

function Home(){
    const dispatch = useDispatch()
    const [t, setT] = useState('')
    useEffect(()=>{
        chrome.storage.local.get('token', (result) => {
            if (result.token) {
                setT(result.token)
                dispatch(setToken(result.token))
                dispatch(setTokenFound(true))
                dispatch(setHasToken(true))
				localStorage.setItem("token", result.token)
                console.log("result", result.token)
            } else {
                dispatch(setTokenFound(false))
                dispatch(setHasToken(false))
                console.log("Token bulunamadı")
            }
        })
    })
    
    return(
        <>
            <IsLogin token={t} />
            
        </>
    )
}

export default Home