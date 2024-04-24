import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getSingleProduct } from '../store/reducers/singleProductSlice'
import { useNavigate, useParams } from 'react-router-dom'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { formatPrice } from '../utilities/helpers'
import {
  Loading,
  Error,
  PageHero,
  AddToCart,
  ProductStars,
  ProductImages,
} from '../components'

const SingleProductPage = () => {
  const navigate = useNavigate()
  const { id } = useParams()
  const dispatch = useDispatch()
  const { singleProduct, singleProductLoading, singleProductError } =
    useSelector((state) => state.singleProduct)

  useEffect(() => {
    if (singleProductError) {
      setTimeout(() => {
        navigate('/')
      }, 3000)
    }
  }, [singleProductError])

  useEffect(() => {
    dispatch(getSingleProduct(id))
  }, [id])

  const { name, price, description, stock, stars, reviews, company, images } =
    singleProduct

  return (
    <Wrapper className='page'>
      <PageHero title={name} product />
      {singleProductLoading ? (
        <Loading />
      ) : singleProductError ? (
        <Error message={'you will navigate to home page automatically'} />
      ) : (
        <section className='section-center'>
          <Link to='/products' className='btn'>
            back to products
          </Link>
          <div className='product-center'>
            <ProductImages images={images} />
            <div className='content'>
              <h3 className='name'>{name}</h3>
              <ProductStars stars={stars} reviews={reviews} />
              <h5 className='price'>{formatPrice(price)}</h5>
              <p className='desc'>{description}</p>
              <p className='info'>
                <span>Available : </span>
                {stock > 0 ? 'In stock' : 'out of stock'}
              </p>

              <p className='info'>
                <span>Brand :</span>
                {company}
              </p>
              <hr />
              {stock > 0 && <AddToCart product={singleProduct} />}
            </div>
          </div>
        </section>
      )}
    </Wrapper>
  )
}

const Wrapper = styled.main`
  .product-center {
    display: grid;
    gap: 4rem;
    margin: 2rem 0 4rem;
  }

  .name {
    margin-bottom: 0.8rem;
  }
  .price {
    color: var(--light-orange);
    margin: 0.8rem 0;
  }
  .desc {
    max-width: 45em;
    margin-bottom: 0.8rem;
    font-size: 1.1rem;
  }
  .info {
    text-transform: capitalize;
    width: 300px;
    font-size: 1.1rem;
    display: grid;
    grid-template-columns: 115px 1fr;
    span {
      color: var(--dark-blue);
    }
  }

  hr {
    margin: 1rem 0;
  }

  @media (min-width: 992px) {
    .product-center {
      grid-template-columns: 1fr 1fr;
      align-items: center;
    }
    .price {
      font-size: 1.25rem;
    }
  }
`

export default SingleProductPage
