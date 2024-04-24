import styled from 'styled-components'
import { formatPrice } from '../utilities/helpers'
import { FaSearch } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const ProductCard = ({ image, name, price, id }) => {
  return (
    <Wrapper>
      <div className='container'>
        <img src={image} alt={name} className='img' />
        <Link to={`/products/${id}`} className='link'>
          <FaSearch />
        </Link>
      </div>
      <footer>
        <h5>{name}</h5>
        <p>{formatPrice(price)}</p>
      </footer>
    </Wrapper>
  )
}
const Wrapper = styled.article`
  .container {
    position: relative;
    background: var(--light-black);
    border-radius: var(--border-radius);
  }
  img {
    border-radius: var(--border-radius);
    transition: var(--transition);
    height: 175px;
  }
  .link {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: var(--light-black);
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    transition: var(--transition);
    opacity: 0;
    cursor: pointer;
    svg {
      font-size: 1.25rem;
      color: var(--white);
    }
  }
  .container:hover img {
    opacity: 0.5;
  }
  .container:hover .link {
    opacity: 1;
  }
  footer {
    margin-top: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  footer h5,
  footer p {
    margin-bottom: 0;
    font-weight: 400;
  }

  footer h5 {
    color: var(--dark-Violet);
    font-size: 1.2rem;
  }

  footer p {
    letter-spacing: var(--letter-spacing);
    color: var(--light-orange);
  }
`

export default ProductCard
