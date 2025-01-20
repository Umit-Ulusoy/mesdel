import { useEffect, useState } from "react"

import { DmList, LogoutScreen } from "@components"
import { SearchInput, Progress, ModalUI, Drawer } from "@partials"
import { getUserDms, _t } from "@handlers"



function Dashboard({token, progressValue, isComplete}){

    const [dms, setDms] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [filteredDms, setFilteredDms] = useState([])
    const [isFilteringDms, setIsFilteringDms] = useState(false)
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
        
        setFilteredDms(filteredDms.length ? filteredDms : []);
        setIsFilteringDms(inputValue.length ? true : false);
    };
	function DrawerButtons(){
		return (
			<>
				<li><a role="button" >{_t("dashboard_suggestion_button")}</a></li>
				<li><a
                href="https://github.com/Umit-Ulusoy/discord-msdel/blob/development/CONTRIBUTING.md#translations"
                target="_blank"
                role="button" >{_t("dashboard_translate_button")}</a></li>
				<li><a
                target="_blank"
                role="button" >{_t("dashboard_donate_button")}</a></li>
				<li className="bg-error text-white rounded-[.5rem]" onClick={handleOpenModal}><a role="button" >{ _t('logout_button_text') }</a></li>
			</>
		)
	}
    return (
        <section id="dashboard" className="w-full flex flex-col justify-center items-center p-2">
            
			<ModalUI 
                show={showModal} 
                onClose={handleCloseModal}
                children={<LogoutScreen />}
                title={ _t('logout_modal_title')}
                styles="p-2 text-gray-600 flex flex-col justify-center items-center gap-[15px]" 
            />

            <h1 className="text-2xl font-bold tracking-tight text-gray-900 text-center p-2">
                { _t('dashboard_title') }
                </h1>
                <div className="flex flex-row gap-4 py-2">

                <SearchInput
                handleChange={filterDms}
                placeholder={ _t('dashboard_search_box_placeholder') }
                />
                <Drawer
                    children={<DrawerButtons />}
                    buttonText="⚙️"
                    arialLabel={_t("dashboard_options_button")}
			    />
            </div>
            {progressValue ? <Progress id="progress" value={progressValue} isComplete={isComplete} /> : null}
            {error && <> {error?.message} </>}
            {loading
            ? <div className="text-center text-base italic text-neutral-500 mb-4 pt-8">
				{_t('channels_loading_text')}
			</div>
            : <DmList dms={dms} isFilteringDms={isFilteringDms} filteredDms={filteredDms} progressValue={progressValue} isComplete={isComplete} />}
            
        </section>
    )
}

export default Dashboard