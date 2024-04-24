import styled from 'styled-components'
const Footer = () => {
  return (
    <Container>
      <h5>
        <span>Comfortable</span>
        <span>&copy;</span>
        {new Date().getFullYear()}
      </h5>
      <h5>All rights reserved</h5>
    </Container>
  )
}

const Container = styled.footer`
  height: 5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: var(--dark-Violet);
  text-align: center;
  span {
    color: var(--white);
    margin-right: 0.3rem;
  }
  h5 {
    color: var(--white);
    margin: 0.1rem;

    font-weight: 400;
    text-transform: none;
    line-height: 1.25;
  }
  @media (min-width: 776px) {
    flex-direction: row;
  }
`
export default Footer
