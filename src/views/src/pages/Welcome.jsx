import { useEffect, useState } from "react"
import { Dashboard } from "@pages"
import { getUserData, _t } from "@handlers"
import { useDispatchs } from '@hooks'

function Welcome({ token, hasToken, progressValue, isComplete }) {
    const [user, setUser] = useState({})
    const [isChecked, setIsChecked] = useState(false)
    const [isOpenBefore, setIsOpenBefore] = useState(
        localStorage.getItem('openBefore') || false
    )
    const { tokenFoundValue } = useDispatchs()
    const tokenFound = tokenFoundValue()
	
	

    useEffect(() => {
        if (token) {
            const init = async () => {
                const userData = await getUserData(token)
                setUser(userData)
            };
            init()
        }
    }, [token])



    const handleClick = () => {
        if (isChecked) {
            localStorage.setItem('openBefore', true);
            setIsOpenBefore(true)
            setIsChecked(true)
        }
    };

    const handleCheckbox = () => {
        setIsChecked((prev) => !prev)
    };
	const template = <h1>Lütfen discord sayfasına giriş yaptıktan ya da yeniledikten sonra tekrar deneyiniz.</h1>
    if (!tokenFound && !isOpenBefore) {
        return template
    } else if (tokenFound && !isOpenBefore) {
        return (
            <div className="h-full flex flex-col justify-center items-center gap-4">
                <img src={user?.avatar} alt="discord avatar" className="w-32 rounded-lg" />
                <p className="flex flex-row gap-1">

                    <span className='bg-zinc-200 rounded p-[0.40rem] font-medium'>{ _t('welcome_global_name') }: </span> 
                    <span className='bg-red-100 rounded p-[0.40rem]'>{user?.globalName}</span>
                </p>
                <p className="flex flex-row gap-1">
                    <span className='bg-zinc-200 rounded p-[0.40rem] font-medium'>{ _t('welcome_username') }: </span> 

                    <span className='bg-red-100 rounded p-[0.40rem]'>{user?.username}</span>
                </p>
                <label className="cursor-pointer label flex flex-row gap-4">
                    <input type="checkbox"
                        checked={isChecked}
                        onChange={handleCheckbox}
                        className="checkbox"
                    />

                    <span class="label-text text-sm">
                        { _t('welcome_policy_text')}
                    </span>
                </label>
                <button onClick={handleClick} className="btn btn-outline w-[9rem] h-[2rem]">
                    { _t('welcome_continue_button') }
                    </button>
            </div>
        );
    } else if (hasToken && isOpenBefore) {
        return <Dashboard token={token} progressValue={progressValue} isComplete={isComplete} />;
    } else {
        return template
    }
}

export default Welcome;
