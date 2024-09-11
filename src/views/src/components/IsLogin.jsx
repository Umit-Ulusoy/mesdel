import { useEffect } from "react"
import { Dashboard, Welcome } from '../pages/index'
import { setOpenBefore, setTokenFound } from '../store/slices/keepSlice'
import { useDispatch, useSelector } from "react-redux"
function IsLogin(){
    const dispatch = useDispatch()
    const x = useSelector(state=> state)
    console.log("keep", x)
    const { openBefore, tokenFound } = useSelector((state)=> state.keep)
    console.log(openBefore, tokenFound)
    useEffect(()=> {
        chrome?.storage.local.get('openBefore', (result) => {
            if (result.openBefore) {
                dispatch(setOpenBefore(true))
                console.log("openbefore", result.openBefore)
            } else {
                dispatch(setOpenBefore(false))
                console.log("openBefore bulunamadı")
            }
        })

        chrome?.storage.local.get('tokenFound', (result) => {
            if (result.tokenFound) {
                dispatch(setTokenFound(true))
                console.log("tokenFound", result.tokenFound)
            } else {
                dispatch(setTokenFound(false))
                console.log("tokenFound bulunamadı")
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