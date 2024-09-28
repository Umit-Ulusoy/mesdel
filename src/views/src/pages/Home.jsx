import { useEffect, useState } from 'react'
import { IsLogin } from '../components/index'
import { setTokenFound, setToken } from '../store/slices/keepSlice'
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
                console.log("result", result.token)
            } else {
                dispatch(setTokenFound(false))
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