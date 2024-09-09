import { configureStore } from '@reduxjs/toolkit'

import { keepSlice } from './slices/keepSlice'

export const store = configureStore({
    reducer: {
        keep: keepSlice
    }
})