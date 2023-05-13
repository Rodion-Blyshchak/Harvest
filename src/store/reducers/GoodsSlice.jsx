import { createSlice } from '@reduxjs/toolkit'

const GoodsSlice = createSlice({
  name: 'goods',
  initialState: {
    itemsInGoodsCart: [],
    itemsInGoods: [],
  },
  reducers: {
    addItemInGoods: (state, action) => {
      state[action.payload.fieldName].push(action.payload.product)
    },
    removeItemInGoods: (state, action) => {
      state[action.payload.fieldName] = state[action.payload.fieldName].filter(
        (product) => product.id !== action.payload.product.id
      )
    },
  },
})

export const { addItemInGoods, removeItemInGoods } = GoodsSlice.actions
export default GoodsSlice.reducer
