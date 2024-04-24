import styled from 'styled-components'
import { PageHero } from '../components'
import { useSelector, useDispatch } from 'react-redux'
import { formatPrice } from '../utilities/helpers'
import { Link, useNavigate } from 'react-router-dom'
import { FaCreditCard } from 'react-icons/fa'
import { clearCart, getCartTotals } from '../store/reducers/cartSlice'
import { useEffect } from 'react'

const CheckoutPage = () => {
  const { isUser } = useSelector((state) => state.auth)
  const { totalPrice, cart, shippingFee } = useSelector((state) => state.cart)

  const dispatch = useDispatch()

  const navigate = useNavigate()

  useEffect(() => {
    dispatch(getCartTotals())
  }, [])

  return (
    <main className='page'>
      <PageHero title='checkout' />
      <Wrapper className='section-center'>
        {cart.length < 1 ? (
          <div className='empty'>
            <h2>Your cart is empty</h2>
            <Link to='/products' className='btn'>
              fill it
            </Link>
          </div>
        ) : (
          <div className='payment'>
            <h2>hello, {isUser && isUser.nickname}</h2>
            <p>
              your total is -
              <span className='price'>
                {formatPrice(totalPrice + shippingFee)}
              </span>
            </p>
            <hr />
            <FaCreditCard />
            <button
              type='button'
              className='btn btn-block'
              onClick={() => {
                setTimeout(() => {
                  navigate('/')
                  dispatch(clearCart())
                }, 1500)
              }}
            >
              pay
            </button>
          </div>
        )}
      </Wrapper>
    </main>
  )
}
const Wrapper = styled.section`
  display: grid;
  place-content: center;
  text-align: center;

  .empty {
    display: grid;
    gap: 2rem;
    justify-content: center;
    align-items: center;
    justify-items: center;
  }
  .payment {
    display: grid;
    justify-items: center;
    gap: 0.8rem;
    .price {
      margin-left: 10px;
      color: var(--light-orange);
    }
    hr {
      height: 4px;
      width: 100%;
      background-color: var(--dark-gray);
      border-radius: var(--border-radius);
    }
    svg {
      font-size: 12rem;
      color: var(--dark-gray);
    }
  }
`

export default CheckoutPage
