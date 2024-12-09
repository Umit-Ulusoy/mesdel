import { useEffect, useState } from "react"

import { DmList } from "@components"
import { SearchInput, Progress } from "@partials"
import { getUserDms } from "@handlers"

function Dashboard({token, progressValue, isComplete}){

    const [dms, setDms] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [filteredDms, setFilteredDms] = useState(null)
    useEffect(() => {
        if (token) {
            async function fetchDms() {
                try {
                    const tokenParser = token.replace(/"/g, '');
                    console.log('DM dosyasındaki token: ', tokenParser);
                    
                    let dmsData = await getUserDms(tokenParser);
                    dmsData = JSON.parse(dmsData);
                    setDms(dmsData);
                    
                } catch (err) {
                    setError(err.message);
                } finally {
                    setLoading(false);
                }
            }

            fetchDms();
        }
    }, [token])
    
    const filterDms = () => {
        const searchInput = document.getElementById('search-input');
        const inputValue = searchInput.value;
        console.log(inputValue);
        
        const regex = new RegExp(inputValue, 'i');
        const filteredDms = dms.filter(dm => dm.user.globalName && dm.user.globalName.search(regex) !== -1);
        console.log(filteredDms);
        
        setFilteredDms(filteredDms.length ? filteredDms : null);
    };

    return (
        <section id="dashboard" className="w-full flex flex-col justify-center items-center p-2">
            <h1 className="text-2xl font-bold tracking-tight text-gray-900 text-center p-2">DASHBOARD</h1>
            <SearchInput handleChange={filterDms} />
			<br />
            {progressValue && <Progress id="progress" value={progressValue} isComplete={isComplete} />}
            
            {error && <> {error?.message} </>}
            {loading ? "Yükleniyor.." : <DmList dms={dms} filteredDms={filteredDms} progressValue={progressValue} isComplete={isComplete} />}
            
        </section>
    )
}

export default Dashboard