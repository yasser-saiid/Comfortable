import styled from 'styled-components'
import { FaPlus, FaMinus } from 'react-icons/fa'

const AmountButtons = ({ amount, increaseAmount, decreaseAmount }) => {
  return (
    <Wrapper className='amount-btns'>
      <button type='button' className='amount-btn' onClick={decreaseAmount}>
        <FaMinus />
      </button>
      <h2 className='amount'>{amount}</h2>
      <button type='button' className='amount-btn' onClick={increaseAmount}>
        <FaPlus />
      </button>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: grid;
  width: 140px;
  justify-items: center;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  h2 {
    margin-bottom: 0;
    font-weight: 700;
  }
  button {
    background: transparent;
    border-color: transparent;
    cursor: pointer;
    padding: 0.5rem 0;
    width: 2rem;
    height: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: var(--border-radius);
    &:hover {
      color: var(--dark-Violet);
      outline: 2px solid var(--dark-Violet);
    }
  }
`

export default AmountButtons
