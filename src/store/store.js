import { configureStore } from '@reduxjs/toolkit'
import { starWarsSlice } from './slices/starWars'

export const store = configureStore({
  reducer: {
      peopleStarWars: starWarsSlice.reducer
  },
})