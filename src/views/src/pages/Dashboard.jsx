import DmList from "../components/DmList"
function Dashboard({token}){
    return (
        <section id="dashboard">
            <h1 className="text-2xl font-bold tracking-tight text-gray-900 text-center p-2">DASHBOARD</h1>
            <br />
            <DmList token={token} />
        </section>
    )
}

export default Dashboard