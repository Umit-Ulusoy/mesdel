import { Dashboard, Welcome } from '@pages'
import { useSelector } from "react-redux"
function IsLogin({token, hasToken, progressValue, isComplete}){
    const { openBefore, tokenFound } = useSelector((state)=> state.keep)
    
    return (
        <>
            {openBefore & tokenFound ? <Dashboard token={token} 
            progressValue={progressValue} 
            isComplete={isComplete}
            /> : 
            <Welcome token={token} hasToken={hasToken} progressValue={progressValue} 
            isComplete={isComplete} />}
        </>
    )
}

export default IsLogin