import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

import { IsLogin } from '@components'

import { setTokenFound } from '../store/slices/keepSlice'
import { isHasToken } from '../../../helpers/tokenHandler'

function Home(){
    const dispatch = useDispatch()
    const [t, setT] = useState(null)
    const [hasToken, setHasToken] = useState(false)
	
    useEffect(()=>{
		async function init(){
			const result = await isHasToken()
			setHasToken(result)
		}
		init()
		chrome.storage.local.get('token', (result) => {
			if (result.token) {
				const token = result.token
				const tokenParser = token.replace(/"/g, '')
				setT(tokenParser)
				dispatch(setTokenFound(true))
				console.log("token alındı", result.token)
			
			} else {
				console.log("Token bulunamadı")
				dispatch(setTokenFound(false))

			}
		})
    })
    
    return(
        <>
            <IsLogin token={t} hasToken={hasToken} />
        </>
    )
}

export default Home