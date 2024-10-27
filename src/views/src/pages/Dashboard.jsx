import { useEffect } from "react"
import DmList from "../components/DmList"
import { deletionProcessListener } from '../helpers/businessHandler'
import Progress from "../components/Progress"


function Dashboard({token}){
    useEffect(()=> {
        deletionProcessListener()
        chrome.runtime.connect({ name: 'MAIN_POPUP' })
    }, [])
    return (
        <section id="dashboard" className="w-full flex flex-col justify-center items-center p-2">
            <h1 className="text-2xl font-bold tracking-tight text-gray-900 text-center p-2">DASHBOARD</h1>
            <Progress />
            <DmList token={token} />
            
        </section>
    )
}

export default Dashboard