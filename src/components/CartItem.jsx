import styled from 'styled-components'
import { formatPrice } from '../utilities/helpers'
import { FaTrash } from 'react-icons/fa'
import { AmountButtons } from '../components'
import { removeItem, toggleAmount } from '../store/reducers/cartSlice'
import { useDispatch } from 'react-redux'

const CartItem = ({ id, amount, color, image, name, price }) => {
  const dispatch = useDispatch()

  const increaseAmount = () => {
    dispatch(toggleAmount({ id, type: 'increase' }))
  }
  const decreaseAmount = () => {
    dispatch(toggleAmount({ id, type: 'decrease' }))
  }

  return (
    <Wrapper>
      <div className='content-title'>
        <img src={image} alt={name} className='img' />
        <div>
          <h5 className='name'>{name}</h5>
          <p className='color'>
            color :
            <span style={{ background: color }} />
          </p>
          <h5 className='price-small'>{formatPrice(price)}</h5>
        </div>
      </div>
      <h5 className='price'>{formatPrice(price)}</h5>
      <AmountButtons
        amount={amount}
        increaseAmount={increaseAmount}
        decreaseAmount={decreaseAmount}
      />
      <h5 className='subtotal'>{formatPrice(price * amount)}</h5>
      <button className='remove-btn' onClick={() => dispatch(removeItem(id))}>
        <FaTrash />
      </button>
    </Wrapper>
  )
}

const Wrapper = styled.article`
  .subtotal {
    display: none;
  }
  .price {
    display: none;
  }
  display: grid;
  grid-template-columns: 200px auto auto;
  grid-template-rows: 75px;
  gap: 3rem 1rem;
  justify-items: center;
  margin-bottom: 3rem;
  align-items: center;
  .content-title {
    grid-template-rows: 75px;
    display: grid;
    grid-template-columns: 75px 125px;
    align-items: center;
    text-align: left;
    gap: 1rem;
  }
  img {
    border-radius: var(--border-radius);
  }
  h5 {
    font-size: 1.15rem;
    margin-bottom: 0;
  }

  .color {
    color: var(--dark-gray);
    font-size: 1.15rem;
    letter-spacing: var(--letter-spacing);
    text-transform: capitalize;
    margin-bottom: 0;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    span {
      display: inline-block;
      width: 0.5rem;
      height: 0.5rem;
      background: red;
      margin-left: 0.5rem;
      border-radius: var(--border-radius);
    }
  }
  .price-small {
    color: var(--light-orange);
  }
  .amount-btns {
    width: 75px;
    button {
      width: 1rem;
      height: 0.5rem;
      font-size: 0.75rem;
    }
    h2 {
      font-size: 1rem;
    }
  }
  .remove-btn {
    color: var(--white);
    background: transparent;
    border: transparent;
    letter-spacing: var(--letter-spacing);
    background: var(--dark-red);
    width: 1.5rem;
    height: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: var(--border-radius);
    font-size: 0.75rem;
    cursor: pointer;
  }
  @media (min-width: 776px) {
    .subtotal {
      display: block;
      margin-bottom: 0;
      color: var(--light-orange);
      font-weight: 400;
      font-size: 1.15rem;
    }
    .price-small {
      display: none;
    }
    .price {
      display: block;
      font-size: 1.15rem;
      color: var(--light-orange);
      font-weight: 400;
    }
    .name {
      font-size: 1.15rem;
    }
    .color {
      font-size: 1.15rem;
      span {
        width: 0.75rem;
        height: 0.75rem;
      }
    }
    grid-template-columns: 1fr 1fr 1fr 1fr auto;
    align-items: center;
    grid-template-rows: 75px;
    img {
      height: 100%;
    }
    .title {
      height: 100%;
      display: grid;
      grid-template-columns: 100px 200px;
      align-items: center;
      gap: 1rem;
      text-align: left;
    }
    .amount-btns {
      width: 100px;
      button {
        width: 1.5rem;
        height: 1rem;
        font-size: 1.15rem;
      }
      h2 {
        font-size: 1.15rem;
      }
    }
  }
`

export default CartItem
