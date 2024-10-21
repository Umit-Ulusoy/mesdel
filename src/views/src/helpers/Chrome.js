class Chrome {
    async on(func){
        return await chrome.runtime.onMessage.addListener(async(...props)=> await func(...props))  
    }
    async send(children){
        return await chrome.runtime.sendMessage(children)
    }
    async localGet(value, callback){
        return await chrome.storage.local.get(value, async (...props)=> await callback(...props))
    }
    async localSet(value, callback){
        return await chrome.storage.local.set(value, async (...props)=> callback(...props))
    }
}

export default Chrome