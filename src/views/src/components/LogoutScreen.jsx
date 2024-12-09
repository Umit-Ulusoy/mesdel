import { Button } from '@partials'
import { logout } from '@handlers'

const LogoutScreen = ()=>{

    const logoutHandle = () => logout()
    
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