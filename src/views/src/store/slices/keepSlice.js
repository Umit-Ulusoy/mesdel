import { createSlice } from '@reduxjs/toolkit'
export const keepSlice = createSlice({
    name: 'keep',
    initialState: {
        tokenFound: false,
        hasToken: false,
        token: ""
    },
    reducers: {
        setToken: (state, action) => {
            state.token = action.payload
        },
        setHasToken: (state, action)=>{
            state.hasToken = action.payload
            
        },
        setTokenFound: (state, action)=> {
            state.tokenFound = action.payload
			console.log(state.tokenFound)
            
        },
        
    }
})

export const { setToken, setTokenFound, setHasToken } = keepSlice.actions
export default keepSlice.reducer