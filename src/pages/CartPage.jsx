import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { PageHero } from '../components'
import { useSelector, useDispatch } from 'react-redux'
import { CartContent } from '../components'
import { useEffect } from 'react'
import { getCartTotals } from '../store/reducers/cartSlice'

const CartPage = () => {
  const { cart } = useSelector((state) => state.cart)
  const dispatch = useDispatch()

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart])

  useEffect(() => {
    dispatch(getCartTotals())
  }, [cart])

  return (
    <main className='page'>
      <PageHero title='cart' product />
      <Wrapper>
        {cart.length < 1 ? (
          <div className='empty'>
            <h3>Your cart is empty</h3>
            <Link to='/products' className='btn'>
              fill it
            </Link>
          </div>
        ) : (
          <CartContent cartItems={cart} />
        )}
      </Wrapper>
    </main>
  )
}

const Wrapper = styled.main`
  .empty {
    text-align: center;
    h3 {
      margin-bottom: 2rem;
      text-transform: none;
    }
  }
`
export default CartPage
