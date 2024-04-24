import { configureStore } from '@reduxjs/toolkit'
import sidebarSlice from './reducers/sidebarSlice'
import productsSlice from './reducers/productsSlice'
import cartSlice from './reducers/cartSlice'
import singleProductSlice from './reducers/singleProductSlice'
import authSlice from './reducers/authSlice'

const store = configureStore({
  reducer: {
    sidebar: sidebarSlice,
    products: productsSlice,
    singleProduct: singleProductSlice,
    cart: cartSlice,
    auth: authSlice,
  },
})

export default store
