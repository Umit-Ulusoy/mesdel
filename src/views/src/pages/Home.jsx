import { useEffect, useState } from 'react'
import { IsLogin } from '../components/index'
import { setTokenFound } from '../store/slices/keepSlice'
import { useDispatch } from 'react-redux'

function Home(){
    const dispatch = useDispatch()
    const [t, setT] = useState(null)
	
	
    useEffect(()=>{
		chrome.storage.local.get('token', (result) => {
			if (result.token) {
				const token = result.token
				const tokenParser = token.replace(/"/g, '')

				setT(tokenParser)
				dispatch(setTokenFound(true))
				localStorage.setItem('hasToken', true)
				console.log("token alındı", result.token)
			
			} else {
				console.log("Token bulunamadı")
				dispatch(setTokenFound(false))
				localStorage.setItem('hasToken', false)

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