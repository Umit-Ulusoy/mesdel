import { useEffect } from "react"
import { Dashboard, Welcome } from '../pages/index'
import { setOpenBefore } from '../store/slices/keepSlice'
import { useDispatch, useSelector } from "react-redux"
function IsLogin(){
    const dispatch = useDispatch()
    const { openBefore, tokenFound } = useSelector(state=>state.keep)
    useEffect(()=> {
        chrome.storage.local.get('openBefore', (result) => {
            if (result.openBefore) {
                dispatch(setOpenBefore(true))
                console.log("openbefore", result.openBefore)
            } else {
                dispatch(setOpenBefore(false))
                console.log("openBefore bulunamadı")
            }
        })
    })
    return (
        <>
            {openBefore ? <Dashboard /> : <Welcome openBefore={openBefore} tokenFound={tokenFound} />}
        </>
    )
}

export default IsLogin