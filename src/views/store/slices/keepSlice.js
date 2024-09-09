import { createSlice } from '@reduxjs/toolkit'
export const keepSlice = createSlice({
    name: 'keep',
    initialState: {
        openBefore: false,
        tokenFound: false,
        token: ''
    },
    reducers: {
        setOpenBefore: (state, action)=>{
            state.openBefore = true
        },
        setTokenFound: (state, action)=> {
            state.tokenFound = true
        },
        setToken: (state, action) => {
            state.token = action.payload
        }
    }
})

export const { setOpenBefore, setToken, setTokenFound } = keepSlice.actions
export default keepSlice.reducer