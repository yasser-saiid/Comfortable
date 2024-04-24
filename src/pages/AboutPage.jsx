import styled from 'styled-components'
import { PageHero } from '../components'
import aboutImg from '../assets/Images/hero-bcg.jpeg'
const AboutPage = () => {
  return (
    <main className='section-container'>
      <PageHero title='about' />
      <Wrapper className='section-center'>
        <img src={aboutImg} alt='nice desk' className='img' />
        <article>
          <div className='title-wrapper'>
            <h2 className='title'>our story</h2>
            <div className='underline'></div>
          </div>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat
            accusantium sapiente tempora sed dolore esse deserunt eaque
            excepturi, delectus error accusamus vel eligendi, omnis beatae.
            Quisquam, dicta. Eos quod quisquam esse recusandae vitae neque
            dolore, obcaecati incidunt sequi blanditiis est exercitationem
            molestiae delectus saepe odio eligendi modi porro eaque in libero
            minus unde sapiente consectetur architecto. Ullam rerum, nemo iste
            ex, eaque perspiciatis nisi, eum totam velit saepe sed quos
            similique amet. Ex, voluptate accusamus nesciunt totam vitae esse
            iste.
          </p>
        </article>
      </Wrapper>
    </main>
  )
}
const Wrapper = styled.section`
  display: grid;
  gap: 4rem;
  img {
    border-radius: var(--border-radius);
    height: 500px;
  }
  p {
    max-width: 45em;
    margin: 0 auto;
    margin-top: 2rem;
  }
  .title-wrapper {
    text-align: left;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`

export default AboutPage
