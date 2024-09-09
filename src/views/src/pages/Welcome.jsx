function Welcome({openBefore, tokenFound}){
    
    
    if(!openBefore && !tokenFound){
        function handleClick(){
            
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