import { useEffect, useState } from 'react'

import { IsLogin } from '@components'
import { isHasToken } from '../../../helpers/tokenHandler'
import { useDispatchs } from '@hooks'

function Home({progressValue, isComplete}){
	const { handleTokenFound } = useDispatchs()
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
				handleTokenFound(true)
			
			} else {
				handleTokenFound(false)

			}
		})
    })
    
    return(
        <>
            <IsLogin token={t} hasToken={hasToken} progressValue={progressValue} isComplete={isComplete} />
        </>
    )
}

export default Home