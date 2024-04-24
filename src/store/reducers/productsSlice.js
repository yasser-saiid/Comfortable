import axios from 'axios'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { products_url } from '../../utilities/constant.jsx'

const initialState = {
  isError: false,
  isLoading: true,
  products: [],
  featureProducts: [],
  filteredProducts: [],
  sort: 'price-lowest',
  filters: {
    text: '',
    category: 'all',
    company: 'all',
    price: 0,
    minPrice: 0,
    maxPrice: 0,
  },
}

// action to get all products from api
export const getProducts = createAsyncThunk(
  'products/getProducts',
  async (_, thunkApi) => {
    const { rejectWithValue } = thunkApi
    try {
      const response = await axios.get(products_url)
      const products = response.data
      return products
    } catch (error) {
      console.log(error.message)
      return rejectWithValue(error.message)
    }
  }
)

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    updateSorting: (state, action) => {
      state.sort = action.payload.value
    },
    // filter products by sorting
    sortProducts: (state) => {
      const { sort, filteredProducts } = state
      let newProducts = [...filteredProducts]
      if (sort === 'price-lowest') {
        newProducts = newProducts.sort(
          (currentItem, nextItem) => currentItem.price - nextItem.price
        )
      }
      if (sort === 'price-highest') {
        newProducts = newProducts.sort(
          (currentItem, nextItem) => nextItem.price - currentItem.price
        )
      }
      if (sort === 'name-a') {
        newProducts = newProducts.sort((currentItem, nextItem) => {
          return currentItem.name.localeCompare(nextItem.name)
        })
      }
      if (sort === 'name-z') {
        newProducts = newProducts.sort((currentItem, nextItem) => {
          return nextItem.name.localeCompare(currentItem.name)
        })
      }
      state.filteredProducts = newProducts
    },
    // filter products
    updateFilter: (state, action) => {
      const { name, value } = action.payload
      state.filters[name] = value
    },
    filterProducts: (state) => {
      const { products } = state
      const { text, category, company, price } = state.filters
      let newProducts = [...products]

      if (text) {
        newProducts = newProducts.filter((product) => {
          return product.name.toLowerCase().startsWith(text.toLowerCase())
        })
      }
      if (category !== 'all') {
        newProducts = newProducts.filter(
          (product) => product.category === category
        )
      }
      if (company !== 'all') {
        newProducts = newProducts.filter(
          (product) => product.company === company
        )
      }

      newProducts = newProducts.filter((product) => product.price <= price)

      state.filteredProducts = newProducts
    },
    clearFilter: (state) => {
      state.filters.text = ''
      state.filters.category = 'all'
      state.filters.company = 'all'
      state.filters.price = state.filters.maxPrice
    },
  },
  extraReducers: (builder) => {
    // Get All Products
    builder.addCase(getProducts.pending, (state) => {
      state.isLoading = true
      state.isError = false
    })
    builder.addCase(getProducts.fulfilled, (state, action) => {
      state.isLoading = false
      // feature products
      state.featureProducts = action.payload.filter(
        (product) => product.featured === true
      )
      // all products
      state.products = [...action.payload]
      // filtered products
      state.filteredProducts = [...action.payload]
      // prices filter
      let maxPrice = action.payload.map((product) => product.price)
      maxPrice = Math.max(...maxPrice)
      state.filters.maxPrice = maxPrice
      state.filters.price = maxPrice
    })
    builder.addCase(getProducts.rejected, (state) => {
      state.isLoading = false
      state.isError = true
    })
  },
})

export const {
  updateSorting,
  sortProducts,
  updateFilter,
  filterProducts,
  clearFilter,
} = productsSlice.actions

export default productsSlice.reducer
