import { useState, useEffect } from 'react'
import styled from 'styled-components'

const ProductImages = ({ images }) => {
  const [mainImgIndex, setMainImgIndex] = useState(0)

  return (
    <Wrapper>
      <img
        src={images[mainImgIndex].url}
        alt='product main image'
        className='main img'
      />
      <div className='gallery'>
        {images.map((image, index) => {
          return (
            <img
              src={image.url}
              alt={image.filename}
              key={index}
              className={`${
                image.url === images[mainImgIndex].url ? 'active' : null
              }`}
              onClick={() => setMainImgIndex(index)}
            />
          )
        })}
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  .main {
    height: 600px;
    border-radius: var(--border-radius);
  }
  img {
    width: 100%;
    display: block;
    border-radius: var(--border-radius);
    object-fit: cover;
  }
  .gallery {
    margin-top: 1rem;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    column-gap: 1rem;
    img {
      height: 100px;
      cursor: pointer;
    }
  }
  .active {
    border: 2px solid var(--dark-Violet);
    box-shadow: var(--light-shadow);
  }
  @media (max-width: 576px) {
    .main {
      height: 300px;
    }
    .gallery {
      img {
        height: 50px;
      }
    }
  }
  @media (min-width: 992px) {
    .main {
      height: 500px;
    }
    .gallery {
      img {
        height: 75px;
      }
    }
  }
`

export default ProductImages
