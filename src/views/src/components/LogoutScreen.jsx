import { Button } from '@partials'
import { logout } from '@handlers'
import { useNavigate } from "react-router-dom"
import { useDispatchs } from '@hooks'


const LogoutScreen = ()=>{
    
    const navigate = useNavigate()
	const { handleTokenFound } = useDispatchs()
	
    const logoutHandle = async () => {
		
		await handleTokenFound(false)
		await logout()
		
		navigate('/')
		
    }
    
    return (
        <>
            <h1 className="text-base">Eklentiden tamamen çıkış yapmak istediğinize emin misiniz? Tüm bilgileriniz silenecektir.</h1>
            <div className='flex flex-row gap-4'>
                <Button 
                styles="btn-error text-white" 
                text="Çıkış yap" 
                handleClick={logoutHandle}
                />
            </div>
        </>
    )
}

export default LogoutScreen