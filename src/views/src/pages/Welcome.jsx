import { Dashboard } from "./index"
import { getUserData } from "../helpers/apiHandler"
import { useDispatch, useSelector } from "react-redux"
import { setOpenBefore } from '../store/slices/keepSlice'
import { useEffect, useState } from "react"

function Welcome({token}){
    const [user, setUser] = useState({})
    const dispatch = useDispatch()
    const hasToken = localStorage.getItem('hasToken')
    const { tokenFound, openBefore } = useSelector(state=> state.keep)
    useEffect(()=> {
        if(token){
            const init = async ()=> {
                const userData = await getUserData(token)
                setUser(userData)
            }
            init()
        }
    }, [token])
    if (!tokenFound && !openBefore) {
        return <h1>Lütfen discord sayfasına giriş yaptıktan ya da yeniledikten sonra tekrar deneyiniz.</h1>
    } else if (tokenFound && !openBefore) {
        function handleClick(){
            dispatch(setOpenBefore(true))
            localStorage.setItem("hasToken", true)
        }
        
        return (
            <div className="h-full flex flex-col justify-center items-center gap-4">
                <img src={user?.avatar} alt="discord avatar" className="w-32 rounded-lg" />
                <p className="flex flex-row gap-1">
                    <span className='bg-zinc-200 rounded p-[0.40rem] font-medium'>Global Name: </span> 
                    <span className='bg-red-100 rounded p-[0.40rem]'>{user?.globalName}</span>
                </p>
                <p className="flex flex-row gap-1">
                    <span className='bg-zinc-200 rounded p-[0.40rem] font-medium'>User Name: </span> 
                    <span className='bg-red-100 rounded p-[0.40rem]'>{user?.username}</span>
                </p>
                <button onClick={handleClick} className="btn btn-outline w-[9rem] h-[2rem]">Devam</button>
            </div>
        )
    } else if (hasToken && openBefore) {
        return <Dashboard token={token} />
    } 
}


export default Welcome