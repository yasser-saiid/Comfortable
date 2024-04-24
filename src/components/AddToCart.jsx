import { useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { FaCheck } from 'react-icons/fa'
import { useSelector, useDispatch } from 'react-redux'
import { AmountButtons } from '../components'
import { addToCart } from '../store/reducers/cartSlice'

const AddToCart = ({ product }) => {
  const { id, stock, colors } = product
  const [mainColor, setMainColor] = useState(colors[0])
  const [amount, setAmount] = useState(1)

  const dispatch = useDispatch()

  const increaseAmount = () => {
    setAmount((prevAmount) => {
      let newAmount = prevAmount + 1
      if (newAmount > stock) {
        return (newAmount = stock)
      }
      return newAmount
    })
  }
  const decreaseAmount = () => {
    setAmount((prevAmount) => {
      let newAmount = prevAmount - 1
      if (newAmount < 1) {
        return (newAmount = 1)
      }
      return newAmount
    })
  }

  return (
    <Wrapper>
      <div className='colors'>
        <span>colors : </span>
        <div>
          {colors.map((color, index) => {
            return (
              <button
                type='button'
                className={`${
                  mainColor === colors[index] ? 'color-btn active' : 'color-btn'
                }`}
                key={index}
                style={{ backgroundColor: color }}
                onClick={() => setMainColor(colors[index])}
              >
                {mainColor === colors[index] ? <FaCheck /> : null}
              </button>
            )
          })}
        </div>
      </div>
      <div className='btn-container'>
        <AmountButtons
          amount={amount}
          increaseAmount={increaseAmount}
          decreaseAmount={decreaseAmount}
        />
        <Link
          to={`/cart`}
          onClick={() =>
            dispatch(addToCart({ id, mainColor, amount, product }))
          }
        >
          <button type='button' className='btn'>
            add to cart
          </button>
        </Link>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  margin-top: 2rem;
  .colors {
    display: grid;
    grid-template-columns: 80px 1fr;
    align-items: center;
    margin-bottom: 1rem;
    span {
      text-transform: capitalize;
      font-weight: 700;
    }
    div {
      display: flex;
    }
  }
  .color-btn {
    display: inline-block;
    width: 1.2rem;
    height: 1.2rem;
    border-radius: 50%;
    background: #222;
    margin-right: 0.5rem;
    border: none;
    cursor: pointer;
    opacity: 0.5;
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      font-size: 0.75rem;
      color: var(--white);
    }
  }
  .active {
    opacity: 1;
  }
  .btn-container {
    margin-top: 2rem;
  }

  .btn {
    margin-top: 1rem;
    width: 140px;
  }
`

export default AddToCart
