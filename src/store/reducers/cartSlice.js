import { createSlice } from '@reduxjs/toolkit'

const getLocalStorage = () => {
  let cart = localStorage.getItem('cart')
  if (cart) {
    return JSON.parse(localStorage.getItem('cart'))
  } else {
    return []
  }
}

const initialState = {
  cart: getLocalStorage(),
  totalItems: 0,
  totalPrice: 0,
  shippingFee: 750,
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { id, mainColor, amount, product } = action.payload

      // this will return item if is it already in the cart
      const existingItem = state.cart.find((item) => item.id === id + mainColor)

      // if this item already in the cart please do it
      if (existingItem) {
        const cartItem = state.cart.map((item) => {
          if (item.id === id + mainColor) {
            let newAmount = item.amount + amount
            if (newAmount > item.maxAmount) {
              newAmount = item.maxAmount
            }
            return { ...item, amount: newAmount }
          } else {
            return item
          }
        })
        state.cart = [...cartItem]
      }
      // else create new one and added it to cart
      else {
        const newItem = {
          id: id + mainColor,
          name: product.name,
          color: mainColor,
          amount,
          maxAmount: product.stock,
          price: product.price,
          image: product.images[0].url,
        }
        state.cart = [...state.cart, newItem]
      }
    },
    // clear cart
    clearCart: (state) => {
      state.cart = []
    },
    // remove from cart
    removeItem: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload)
    },
    // increase & decrease item amount
    toggleAmount: (state, action) => {
      // there are more ways to increase and decrease
      const { id, type } = action.payload
      const existingItem = state.cart.find((item) => item.id === id)
      if (type === 'increase') {
        let newAmount = existingItem.amount + 1
        if (newAmount > existingItem.maxAmount) {
          newAmount = existingItem.maxAmount
        }
        existingItem.amount = newAmount
      }
      if (type === 'decrease') {
        let newAmount = existingItem.amount - 1
        if (newAmount < 1) {
          newAmount = 1
        }
        existingItem.amount = newAmount
      }

      // if (existingItem) {
      //   const cartItem = state.cart.map((item) => {
      //     if (item.id === id) {
      //       if (type === 'increase') {
      //         let newAmount = item.amount + 1
      //         if (newAmount > item.maxAmount) {
      //           newAmount = item.maxAmount
      //         }
      //         return { ...item, amount: newAmount }
      //       }
      //       if (type === 'decrease') {
      //         let newAmount = item.amount - 1
      //         if (newAmount < 1) {
      //           newAmount = 1
      //         }
      //         return { ...item, amount: newAmount }
      //       }
      //     }
      //   })
      //   state.cart = [...cartItem]
      // }
    },
    // get totals
    getCartTotals: (state) => {
      // let amount = 0
      // let price = 0
      // state.cart.forEach((item) => {
      //   amount = amount + item.amount
      //   price = price + item.price * item.amount
      // })

      // state.totalItems = amount
      // state.totalPrice = price

      const { totalItems, totalPrice } = state.cart.reduce(
        (acc, curr) => {
          const { amount, price } = curr
          acc.totalItems = acc.totalItems + amount
          acc.totalPrice = acc.totalPrice + amount * price

          return acc
        },
        {
          totalItems: 0,
          totalPrice: 0,
        }
      )

      state.totalItems = totalItems
      state.totalPrice = totalPrice
    },
  },
})

export const { addToCart, clearCart, removeItem, toggleAmount, getCartTotals } =
  cartSlice.actions

export default cartSlice.reducer
