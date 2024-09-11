import { useDispatch } from "react-redux"
import { setOpenBefore, setTokenFound } from '../store/slices/keepSlice'


function Welcome({openBefore, tokenFound}){
    
    const dispatch = useDispatch()
    if(!openBefore && !tokenFound){
        function handleClick(){
            dispatch(setOpenBefore(true))
        }
        return(
            <>
                <img src="" alt="discord avatar" />
                <p>Global Name</p>
                <p>User Name</p>
                <button onClick={handleClick}>Devam</button>
            </>
        )
    } else if(!openBefore && tokenFound){
        function handleClick(){
            dispatch(setOpenBefore(true))
            dispatch(setTokenFound(true))
        }
        return(
            <>
                <p>Devam etmek için aşağıdaki düğmeye basmanız yeterli.</p>
                <p>Ve lütfen eklentiyi kullanmadan önce, eklenti açıkken sayfayı yenileyiniz.</p>
                <button onClick={handleClick}>Devam</button>
            </>
        )
    }
}

export default Welcome