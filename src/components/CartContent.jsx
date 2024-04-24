import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { CartColumns, CartItem, CartTotals } from '../components'
import { clearCart } from '../store/reducers/cartSlice'

const CartContent = ({ cartItems }) => {
  const dispatch = useDispatch()
  return (
    <Wrapper className='section-center'>
      <CartColumns />
      {cartItems.map((item) => {
        return <CartItem key={item.id} {...item} />
      })}
      <hr />
      <div className='link-container'>
        <Link to='/products' className='btn link-btn'>
          continue shopping
        </Link>
        <button
          type='button'
          className='btn clear-btn'
          onClick={() => dispatch(clearCart())}
        >
          clear shipping cart
        </button>
      </div>
      <CartTotals />
    </Wrapper>
  )
}

const Wrapper = styled.section`
  .link-container {
    display: flex;
    justify-content: space-between;
    margin-top: 2rem;
    @media screen and (max-width: 520px) {
      flex-direction: column;
      gap: 1rem;
    }
  }
  .link-btn {
    background: transparent;
    border-color: transparent;
    text-transform: capitalize;
    text-align: center;
    padding: 0.25rem 0.5rem;
    background: var(--dark-Violet);
    color: var(--white);
    border-radius: var(--border-radius);
    letter-spacing: var(--letter-spacing);
    font-weight: 400;
    cursor: pointer;
  }
  .clear-btn {
    background: var(--light-red);
    border: none;
    &:hover {
      background: var(--dark-red);
    }
  }
`

export default CartContent
