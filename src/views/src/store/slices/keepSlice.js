import { createSlice } from '@reduxjs/toolkit'
export const keepSlice = createSlice({
    name: 'keep',
    initialState: {
        openBefore: false,
        tokenFound: false,
        token: ""
    },
    reducers: {
        setToken: (state, action) => {
            console.log('SET TOKEN 2', action.payload)
            console.log('SET TOKEN', state.token )
            state.token = action.payload
        },
        setOpenBefore: (state, action)=>{
            state.openBefore = action.payload
            chrome?.storage.local.set({openBefore: action.payload}, (result) => {
                
                console.log("set open before")
            })
        },
        setTokenFound: (state, action)=> {
            state.tokenFound = action.payload
            chrome?.storage.local.set({tokenFound: action.payload}, (result) => {
                console.log("set token found")
            })
        },
        
    }
})

export const { setOpenBefore, setToken, setTokenFound } = keepSlice.actions
export default keepSlice.reducer