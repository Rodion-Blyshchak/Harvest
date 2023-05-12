import { configureStore } from '@reduxjs/toolkit'
import GoodsSlice from './reducers/GoodsSlice'

export default configureStore({
  reducer: {
    goods: GoodsSlice,
  },
})
