import styled from 'styled-components'
import { Link } from 'react-router-dom'

const ErrorPage = () => {
  return (
    <Wrapper className='page'>
      <section>
        <h1>404</h1>
        <h3>Sorry, the page you tried cannot be found</h3>
        <Link to='/' className='btn'>
          back home
        </Link>
      </section>
    </Wrapper>
  )
}

const Wrapper = styled.main`
  background: var(--white);
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  h1 {
    font-size: 5rem;
    color: var(--dark-Violet);
  }
  h3 {
    color: var(--dark-Violet);
    text-transform: none;
    margin: 2rem auto;
  }
`
export default ErrorPage
