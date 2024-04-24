import styled from 'styled-components'
import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs'

const ProductStars = ({ stars, reviews }) => {
  const starsTemplate = Array.from({ length: 5 }, (_, index) => {
    const number = index + 0.5
    return (
      <span key={index}>
        {stars > number ? (
          <BsStarFill />
        ) : stars > index ? (
          <BsStarHalf />
        ) : (
          <BsStar />
        )}
      </span>
    )
  })

  return (
    <Wrapper>
      <div className='stars'>{starsTemplate}</div>
      <small className='reviews'>( {reviews} customer reviews )</small>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  span {
    color: var(--light-orange);
    font-size: 0.9rem;
    margin-right: 0.25rem;
  }
  small {
    margin-left: 0.5rem;
  }
  margin-bottom: 0.5rem;
`

export default ProductStars
