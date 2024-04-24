import styled from 'styled-components'
import { Link } from 'react-router-dom'
import homeImg1 from '../assets/Images/hero-bcg.jpeg'
import homeImg2 from '../assets/Images/hero-bcg-2.jpeg'
const Hero = () => {
  return (
    <Wrapper className='section-center'>
      <article className='content'>
        <h1>
          design your <br />
          comfort zone
        </h1>
        <p>
          with <span>Comfortable</span> you can design your comfort zone as you
          like and wish, custom furniture built only for you , dolor sit amet
          consectetur adipisicing elit. Iusto, at sed omnis corporis doloremque
          possimus velit! Repudiandae nisi odit, aperiam odio ducimus, obcaecati
          libero et quia tempora excepturi quis alias?
        </p>
        <Link to='/products' className='btn'>
          shop now
        </Link>
      </article>
      <article className='img-container'>
        <img src={homeImg1} alt='nice table' className='img main-img' />
        <img src={homeImg2} alt='person working' className='img accent-img' />
      </article>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  min-height: 60vh;
  display: grid;
  place-items: center;
  .img-container {
    display: none;
  }
  h1 {
    color: var(--dark-Violet);
    line-height: 1.2;
  }
  p {
    max-width: 45em;
    margin: 1.5rem 0;
    span {
      background-color: var(--light-blue);
      color: var(--white);
      border-radius: var(--border-radius);
      padding: 2px 5px;
      margin: 0 3px;
    }
  }
  @media (min-width: 992px) {
    height: calc(100vh - 5rem);
    grid-template-columns: 1fr 1fr;
    gap: 8rem;

    .img-container {
      display: block;
      position: relative;
    }
    .main-img {
      height: 450px;
      position: relative;
      border-radius: var(--border-radius);
      box-shadow: var(--dark-shadow);
    }
    .accent-img {
      position: absolute;
      bottom: -10px;
      left: 0;
      width: 250px;
      transform: translateX(-50%);
      border-radius: var(--border-radius);
      box-shadow: var(--dark-shadow);
    }
    .img-container::before {
      content: '';
      position: absolute;
      width: 10%;
      height: 80%;
      background: var(--light-blue);
      bottom: 0%;
      left: -8%;
      border-radius: var(--border-radius);
      box-shadow: var(--dark-shadow);
    }
  }
`

export default Hero
