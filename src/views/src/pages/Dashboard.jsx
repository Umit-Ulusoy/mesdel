import { useEffect, useState } from "react"

import { DmList, LogoutScreen } from "@components"
import { SearchInput, Progress, ModalUI } from "@partials"
import { getUserDms } from "@handlers"



function Dashboard({token, progressValue, isComplete}){

    const [dms, setDms] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [filteredDms, setFilteredDms] = useState(null)
    const [showModal, setShowModal] = useState(false)
    

    useEffect(() => {
        if (token) {
            async function fetchDms() {
                try {
                    const tokenParser = token.replace(/"/g, '');
                    
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

    const handleOpenModal = () => setShowModal(true)
    const handleCloseModal = () => setShowModal(false)
    
   
    
    const filterDms = () => {
        const searchInput = document.getElementById('search-input');
        const inputValue = searchInput.value;
        
        const regex = new RegExp(inputValue, 'i');
        const filteredDms = dms.filter(dm => dm.user.globalName && dm.user.globalName.search(regex) !== -1);
        
        setFilteredDms(filteredDms.length ? filteredDms : null);
    };

    return (
        <section id="dashboard" className="w-full flex flex-col justify-center items-center p-2">
            <ModalUI 
                show={showModal} 
                onClose={handleCloseModal}
                children={<LogoutScreen />}
                title="Çıkış Ekranı"
                styles="p-2 text-gray-600 flex flex-col justify-center items-center gap-[15px]" 
            />
            <h1 className="text-2xl font-bold tracking-tight text-gray-900 text-center p-2">DASHBOARD</h1>
            <div className="flex flex-row gap-4">
                <SearchInput handleChange={filterDms} />
                <button 
                className="btn btn-error text-white"
                onClick={handleOpenModal}
                >Logout</button>
            </div>
			<br />
            {progressValue ? <Progress id="progress" value={progressValue} isComplete={isComplete} /> : null}
            <br />
            {error && <> {error?.message} </>}
            {loading ? "Yükleniyor.." : <DmList dms={dms} filteredDms={filteredDms} progressValue={progressValue} isComplete={isComplete} />}
            
        </section>
    )
}

export default Dashboard