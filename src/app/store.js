import { configureStore } from '@reduxjs/toolkit'

import templateReducer from '../reducers/templates/templateSlice';

export const store = configureStore({
  reducer: {
     template : templateReducer
  },
})

