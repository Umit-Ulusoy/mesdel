import DmList from "../components/DmList"
function Dashboard({token}){
    return (
        <>
            TOKEN: {token}
            <h1>DASHBOARD</h1>
            <DmList token={token} />
        </>
    )
}

export default Dashboard