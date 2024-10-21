import { Dashboard, Welcome } from '../pages/index'
import { useSelector } from "react-redux"
function IsLogin({token}){
    const { openBefore, tokenFound } = useSelector((state)=> state.keep)
    
    return (
        <>
            {openBefore & tokenFound ? <Dashboard token={token} /> : <Welcome token={token} />}
        </>
    )
}

export default IsLogin