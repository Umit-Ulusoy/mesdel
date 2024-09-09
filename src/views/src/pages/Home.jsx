import { useEffect } from 'react'
import { IsLogin } from '../components/index'
import { setTokenFound, setToken } from '../store/slices/keepSlice'
import { useDispatch } from 'react-redux'

function Home(){
    const dispatch = useDispatch()
    useEffect(()=>{
        chrome.storage.local.get('token', (result) => {
            if (result.token) {
                setToken(result.token)
                dispatch(setToken(result.token))
                dispatch(setTokenFound(true))
            } else {
                dispatch(setTokenFound(false))
                console.log("Token bulunamadı")
            }
        })
    })
    return(
        <>
            <IsLogin />
        </>
    )
}

export default Home