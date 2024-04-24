import styled from 'styled-components'

const Contact = () => {
  return (
    <Wrapper>
      <div className='section-center'>
        <h3>Join our newsletter and get 20% off</h3>
        <div className='content'>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
            sint unde quaerat ratione soluta veniam provident adipisci cumque
            eveniet tempore?
          </p>
          <form className='form'>
            <div className='form-row'>
              <input
                type='email'
                className='form-input'
                placeholder='enter email'
              />
              <textarea
                className='form-textarea'
                placeholder='leave your message'
              ></textarea>
            </div>
            <button type='submit' className='btn submit-btn'>
              send
            </button>
          </form>
        </div>
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.section`
  padding: 5rem 0;
  h3 {
    text-transform: none;
    color: var(--dark-Violet);
  }
  p {
    max-width: 45em;
    margin: 1rem 0;
  }

  .form {
    margin-top: 2rem;
  }
  .form-input {
    margin-bottom: 00.7rem;
  }

  .form-input:focus,
  .form-textarea:focus {
    outline: none;
    border: 2px solid var(--dark-Violet);
  }

  @media (min-width: 992px) {
    .content {
      display: grid;
      grid-template-columns: 1fr 1fr;
      align-items: center;
      gap: 8rem;
      margin-top: 2rem;
    }

    .form {
      margin-top: 0;
      width: 40vw;
    }
  }
  @media (min-width: 1280px) {
    padding: 15rem 0 5rem;
  }
`
export default Contact
