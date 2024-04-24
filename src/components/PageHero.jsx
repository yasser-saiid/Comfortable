import styled from 'styled-components'
import { Link } from 'react-router-dom'
const PageHero = ({ title, product }) => {
  return (
    <Wrapper>
      <div className='section-center'>
        <h3>
          <Link to='/'>home /</Link>
          {product && <Link to='/products'>Products /</Link>}
          <span>{title}</span>
        </h3>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  background: var(--dark-Violet);
  width: 100%;
  min-height: 20vh;
  display: flex;
  align-items: center;
  margin-bottom: 3rem;
  h3 {
    font-size: 1.15rem;
  }

  span {
    color: var(--light-gray);
  }
  a {
    color: var(--white);
    padding: 0.5rem;
    transition: var(--transition);
  }

  @media screen and (max-width: 480px) {
    h3 {
      font-size: 1.1rem;
      line-height: 1.6;
    }
  }
`

export default PageHero
