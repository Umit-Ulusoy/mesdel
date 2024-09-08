function Welcome({openBefore, tokenFound}){
    
    if(!openBefore && !tokenFound){
        return(
            <>
                <img src="" alt="discord avatar" />
                <p>Global Name</p>
                <p>User Name</p>
                <button>Devam</button>
            </>
        )
    } else if(!openBefore && tokenFound){
        return(
            <>
                <p>Devam etmek için aşağıdaki düğmeye basmanız yeterli.</p>
                <p>Ve lütfen eklentiyi kullanmadan önce, eklenti açıkken sayfayı yenileyiniz.</p>
                <button>Devam</button>
            </>
        )
    }
}

export default Welcome