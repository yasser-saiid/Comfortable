import { useEffect } from 'react'
import { FaShoppingCart, FaUserMinus, FaUserPlus } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { useAuth0 } from '@auth0/auth0-react'
import { closeSidebar } from '../store/reducers/sidebarSlice'
import { isLogin, isLogout } from '../store/reducers/authSlice'

const CartButtons = () => {
  const { totalItems } = useSelector((state) => state.cart)
  const { isUser } = useSelector((state) => state.auth)
  const dispatch = useDispatch()

  const { loginWithRedirect, logout, user, isAuthenticated } = useAuth0()

  useEffect(() => {
    if (isAuthenticated) {
      dispatch(isLogin(user))
    } else {
      dispatch(isLogout())
    }
  }, [user])

  return (
    <Wrapper className='cart-btn-wrapper'>
      <Link
        to='/cart'
        className='cart-btn'
        onClick={() => dispatch(closeSidebar())}
      >
        Cart
        <span className='cart-container'>
          <FaShoppingCart />
          <span className='cart-value'>{totalItems}</span>
        </span>
      </Link>
      {isUser ? (
        <button
          type='button'
          className='auth-btn'
          onClick={() =>
            logout({
              returnTo: window.location.origin,
            })
          }
        >
          Logout <FaUserMinus />
        </button>
      ) : (
        <button type='button' className='auth-btn' onClick={loginWithRedirect}>
          Login <FaUserPlus />
        </button>
      )}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  width: 225px;

  .cart-btn {
    color: var(--dark-Violet);
    font-size: 1.5rem;
    letter-spacing: var(--letter-spacing);
    color: var(--dark-Violet);
    display: flex;
    align-items: center;
  }
  .cart-container {
    display: flex;
    align-items: center;
    position: relative;
    svg {
      height: 1.6rem;
      margin-left: 5px;
    }
  }
  .cart-value {
    position: absolute;
    top: -10px;
    right: -16px;
    background: var(--dark-Violet);
    width: 16px;
    height: 16px;
    display: grid;
    place-content: center;
    border-radius: 50%;
    font-size: 0.95rem;
    color: var(--white);
    padding: 12px;
  }
  .auth-btn {
    display: flex;
    align-items: center;
    background: transparent;
    border-color: transparent;
    font-size: 1.5rem;
    cursor: pointer;
    color: var(--dark-Violet);
    letter-spacing: var(--letter-spacing);
    svg {
      margin-left: 5px;
    }
  }
`

export default CartButtons
