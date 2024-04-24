import { useEffect } from 'react'
import styled from 'styled-components'
import { getProducts } from '../store/reducers/productsSlice'
import { useSelector, useDispatch } from 'react-redux'
import {
  Filters,
  Sort,
  ProductList,
  PageHero,
  Loading,
  Error,
} from '../components'

const ProductsPage = () => {
  const { isLoading, isError } = useSelector((state) => state.products)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getProducts())
  }, [])

  return (
    <main className='page'>
      <PageHero title='products' />
      {isLoading ? (
        <Loading />
      ) : isError ? (
        <Error />
      ) : (
        <Wrapper>
          <div className='section-center products-center'>
            <Filters />
            <div>
              <Sort />
              <ProductList />
            </div>
          </div>
        </Wrapper>
      )}
    </main>
  )
}

const Wrapper = styled.section`
  .products-center {
    display: grid;
    gap: 3rem 3.5rem;
    margin: 4rem auto;
  }
  @media (min-width: 768px) {
    .products-center {
      grid-template-columns: 200px 1fr;
    }
  }
`

export default ProductsPage
