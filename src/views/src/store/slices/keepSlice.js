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
            console.log(1)
            state.openBefore = action.payload
            chrome?.storage.local.set({openBefore: action.payload}, (result) => {
                if(result){
                    console.log('başarılı')
                } else {
                    console.log('başarılı değil')
                }
            })
        },
        setTokenFound: (state, action)=> {
            console.log(2)
            state.tokenFound = action.payload
            chrome?.storage.local.set({tokenFound: action.payload}, (result) => {
                if(result){
                    console.log('başarılı')
                } else {
                    console.log('başarılı değil')
                }
            })
        },
        setToken: (state, action) => {
            state.token = action.payload
        }
    }
})

export const { setOpenBefore, setToken, setTokenFound } = keepSlice.actions
export default keepSlice.reducer