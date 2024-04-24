import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Loading = () => {
  return (
    <Wrapper className='section-container'>
      <div className='section-center'>
        <div className='loading'></div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section``

export default Loading
