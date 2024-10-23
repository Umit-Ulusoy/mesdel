import { createSlice } from '@reduxjs/toolkit'
export const keepSlice = createSlice({
    name: 'keep',
    initialState: {
        openBefore: false,
        tokenFound: false,
        hasToken: false,
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
        },
        setHasToken: (state, action)=>{
            state.hasToken = action.payload
            
        },
        setTokenFound: (state, action)=> {
            state.tokenFound = action.payload
            
        },
        
    }
})

export const { setOpenBefore, setToken, setTokenFound, setHasToken } = keepSlice.actions
export default keepSlice.reducer