import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import Loading from './Loading'
import Error from './Error'
import ProductCard from './ProductCard'

const FeatureProducts = () => {
  const { featureProducts, isLoading, isError } = useSelector(
    (state) => state.products
  )

  return (
    <Wrapper>
      {isLoading ? (
        <Loading />
      ) : isError ? (
        <Error message={'featured products is not available now'} />
      ) : (
        <>
          <div className='section-center'>
            <div className='title-wrapper'>
              <h2 className='title'>featured products</h2>
              <div className='underline'></div>
            </div>
          </div>
          <div className='section-center featured'>
            {featureProducts.slice(0, 3).map((product) => {
              return <ProductCard key={product.id} {...product} />
            })}
          </div>
          <Link to='/products' className='btn'>
            all products
          </Link>
        </>
      )}
    </Wrapper>
  )
}

const Wrapper = styled.section`
  background: var(--off-white);
  padding: 5rem 0;

  .title {
    margin: 0 auto 1rem;
  }

  .featured {
    margin: 4rem auto;
    display: grid;
    gap: 2.5rem;
    img {
      height: 225px;
    }
  }
  .btn {
    display: block;
    width: 148px;
    margin: 0 auto;
    text-align: center;
  }
  @media (min-width: 576px) {
    .featured {
      grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    }
  }
`

export default FeatureProducts
