import { useEffect, useState } from "react"
import { Dashboard, Welcome } from '../pages/index'
function IsLogin(){
    const [openBefore, setOpenBefore] = useState(false)
    useEffect(()=> {
        chrome.storage.local.get('openBefore', (result) => {
            if (result.openBefore) {
                setOpenBefore(result.openBefore)
                console.log("openbefore", result.openBefore)

            } else {
                console.log("openBefore bulunamadı")
            }
        })
    })
    return (
        <>
            {openBefore ? <Dashboard /> : <Welcome openBefore={openBefore} tokenFound={true} />}
        </>
    )
}

export default IsLogin