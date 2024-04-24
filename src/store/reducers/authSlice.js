import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isUser: null,
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    isLogin: (state, action) => {
      state.isUser = action.payload
    },
    isLogout: (state) => {
      state.isUser = null
    },
  },
})

export const { isLogin, isLogout } = authSlice.actions

export default authSlice.reducer
