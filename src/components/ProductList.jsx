import { useSelector } from 'react-redux'
import styled from 'styled-components'
import ProductCard from './ProductCard'

const ProductList = () => {
  const { filteredProducts } = useSelector((state) => state.products)

  if (filteredProducts.length < 1) {
    return <p>sorry, no products matched your search... </p>
  }
  return (
    <Wrapper>
      {filteredProducts.map((product) => {
        return <ProductCard key={product.id} {...product} />
      })}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: grid;
  gap: 2rem 1.5rem;

  img {
    height: 175px;
  }

  @media (min-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 1170px) {
    grid-template-columns: repeat(3, 1fr);
  }
`

export default ProductList
