import styled from 'styled-components'
import { formatPrice } from '../utilities/helpers'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { useAuth0 } from '@auth0/auth0-react'

const CartTotals = () => {
  const { totalItems, totalPrice, shippingFee } = useSelector(
    (state) => state.cart
  )
  const { isUser } = useSelector((state) => state.auth)

  const { loginWithRedirect } = useAuth0()

  return (
    <Wrapper>
      <div>
        <article>
          <h5>
            subtotal :<span>{formatPrice(totalPrice)}</span>
          </h5>
          <p>
            shipping fee :<span>{formatPrice(shippingFee)}</span>
          </p>
          <hr />
          <h4>
            order total :
            <span>
              {totalPrice > 0
                ? formatPrice(totalPrice + shippingFee)
                : formatPrice(0)}
            </span>
          </h4>
        </article>
        {isUser ? (
          <Link to='/checkout' className='btn'>
            proceed to checkout
          </Link>
        ) : (
          <button type='button' className='btn' onClick={loginWithRedirect}>
            login
          </button>
        )}
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  margin: 3rem 0;
  display: flex;
  justify-content: center;
  article {
    border: 1px solid var(--light-gray);
    border-radius: var(--border-radius);
    padding: 1.5rem 3rem;
  }
  h4,
  h5,
  p {
    display: grid;
    grid-template-columns: 200px 1fr;
    margin-bottom: 0.375rem;
  }
  p {
    text-transform: capitalize;
  }
  h4 {
    margin-top: 2rem;
  }
  @media (min-width: 776px) {
    justify-content: flex-end;
  }
  .btn {
    width: 100%;
    margin-top: 1rem;
    text-align: center;
    font-weight: 700;
  }
`

export default CartTotals
