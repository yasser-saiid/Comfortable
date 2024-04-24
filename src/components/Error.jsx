import styled from 'styled-components'
const Error = ({ message }) => {
  return (
    <Wrapper className='section-container'>
      <div className='section-center'>
        <h2>something went wrong</h2>
        <p>{message}</p>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  h2 {
    text-align: center;
    color: var(--dark-red);
    font-size: 1.25rem;
  }

  p {
    text-align: center;
    margin-top: 0.7rem;
  }
`

export default Error
