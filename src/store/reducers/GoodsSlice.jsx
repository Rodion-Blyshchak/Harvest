import { createSlice } from '@reduxjs/toolkit'

const GoodsSlice = createSlice({
  name: 'goods',
  initialState: {
    itemsInGoodsCart: [],
    itemsInGoods: [],
  },
  reducers: {
    addItemInGoods: (state, action) => {
      state[action.payload.fieldName].push(action.payload.id)
    },
    removeItemInGoods: (state, action) => {
      state[action.payload.fieldName] = state[action.payload.fieldName].filter(
        (data) => data.id !== action.payload.id
      )
    },
  },
})

export const { addItemInGoods, removeItemInGoods } = GoodsSlice.actions
export default GoodsSlice.reducer
