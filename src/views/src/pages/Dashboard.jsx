import DmList from "../components/DmList"
function Dashboard({token}){
    return (
        <>
            TOKEN: {token}
            DASHBOARD
            <DmList token={token} />
        </>
    )
}

export default Dashboard