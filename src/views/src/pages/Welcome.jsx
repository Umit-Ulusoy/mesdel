import { Dashboard } from "./index"
import { getUserData } from "../helpers/apiHandler"
import { useDispatch, useSelector } from "react-redux"
import { setHasToken, setOpenBefore } from '../store/slices/keepSlice'

function Welcome({token}){
    const dispatch = useDispatch()
    const { tokenFound, openBefore, hasToken } = useSelector(state=> state.keep)
    
    if (!tokenFound && !openBefore) {
        return <h1>Lütfen discord sayfasına giriş yaptıktan ya da yeniledikten sonra tekrar deneyiniz.</h1>
    } else if (tokenFound && !openBefore) {
        function handleClick(){
            dispatch(setOpenBefore(true))
            dispatch(setHasToken(true))
            
        }
        async function getUser(){
            return await getUserData(token)
        }
        const user = getUser()
        return (
            <>
                <img src={user.avatar} alt="discord avatar" />
                <p>Global Name: {user?.globalName}</p>
                <p>User Name: {user?.username}</p>
                <button onClick={handleClick}>Devam</button>
            </>
        )
    } else if (hasToken && openBefore) {
        return <Dashboard token={token} />
    } 
}


export default Welcome