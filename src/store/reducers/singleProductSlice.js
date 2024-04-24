import axios from 'axios'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { single_product_url } from '../../utilities/constant.jsx'

const initialState = {
  singleProduct: {},
  singleProductLoading: true,
  singleProductError: false,
}

export const getSingleProduct = createAsyncThunk(
  'products/getSingleProduct',
  async (id, thunkApi) => {
    const { rejectWithValue } = thunkApi
    try {
      const response = await axios.get(`${single_product_url}${id}`)
      const product = response.data
      return product
    } catch (error) {
      console.log(error.message)
      return rejectWithValue(error.message)
    }
  }
)

const singleProductSlice = createSlice({
  name: 'singleProduct',
  initialState,
  extraReducers: (builder) => {
    // Get Single Product
    builder.addCase(getSingleProduct.pending, (state) => {
      state.singleProductLoading = true
      state.singleProductError = false
    })
    builder.addCase(getSingleProduct.fulfilled, (state, action) => {
      state.singleProductLoading = false
      state.singleProduct = action.payload
    })
    builder.addCase(getSingleProduct.rejected, (state) => {
      state.singleProductLoading = false
      state.singleProductError = true
    })
  },
})

export default singleProductSlice.reducer
