import { Button } from '@partials'
import { logout, _t } from '@handlers'
import { useNavigate } from "react-router-dom"
import { useDispatchs } from '@hooks'



const LogoutScreen = ()=>{
    
    const navigate = useNavigate()
	const { handleTokenFound } = useDispatchs()
	
    const logoutHandle = () => {
        logout()
		handleTokenFound(false)
        navigate('/')
    }
    
    return (
        <>
            <h1 className="text-base">
                { _t('logout_modal_text') }
            </h1>
            <div className='flex flex-row gap-4'>
                <Button 
                styles="btn-error text-white" 
                text={ _t('logout_button_text') } 
                handleClick={logoutHandle}
                />
            </div>
        </>
    )
}

export default LogoutScreen