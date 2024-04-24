import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components'
import { formatPrice, getUniqueValues } from '../utilities/helpers'
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'
import {
  updateFilter,
  filterProducts,
  clearFilter,
} from '../store/reducers/productsSlice'
const Filters = () => {
  const {
    products,
    filters: { text, company, category, price, minPrice, maxPrice },
  } = useSelector((state) => state.products)

  const dispatch = useDispatch()

  const updatingFilter = (e) => {
    let name = e.target.name
    let value = e.target.value
    if (name === 'category' || name === 'company') {
      value = e.target.textContent
    }
    if (name === 'price') {
      value = Number(e.target.value)
    }

    dispatch(updateFilter({ name, value }))
  }

  useEffect(() => {
    dispatch(filterProducts())
  }, [products, text, company, category, price])

  const categories = getUniqueValues(products, 'category')
  const companies = getUniqueValues(products, 'company')

  return (
    <Wrapper>
      <div className='content'>
        <form onSubmit={(e) => e.preventDefault()} className='form-filters'>
          {/* search input */}
          <div className='form-row'>
            <input
              type='text'
              name='text'
              placeholder='search'
              className='search-input'
              value={text}
              onChange={updatingFilter}
            />
          </div>
          {/* end of search input */}
          {/* category */}
          <div className='form-row'>
            <h5>category</h5>
            <div>
              {categories.map((item, index) => {
                return (
                  <button
                    type='button'
                    key={index}
                    name='category'
                    onClick={updatingFilter}
                    className={`${category === item ? 'active' : null}`}
                  >
                    {item}
                  </button>
                )
              })}
            </div>
          </div>
          {/* end of category */}
          {/* company */}
          <div className='form-row'>
            <h5>company</h5>
            <div>
              {companies.map((item, index) => {
                return (
                  <button
                    type='button'
                    key={index}
                    name='company'
                    onClick={updatingFilter}
                    className={`${company === item ? 'active' : null}`}
                  >
                    {item}
                  </button>
                )
              })}
            </div>
          </div>
          {/* end of company */}
          <div className='form-row'>
            <h5>price</h5>
            <p className='price'>{formatPrice(price)}</p>
            <input
              type='range'
              name='price'
              onChange={updatingFilter}
              min={minPrice}
              max={maxPrice}
              value={price}
            />
          </div>
          {/* end of price */}
        </form>
        <button
          type='button'
          className='clear-btn'
          onClick={() => dispatch(clearFilter())}
        >
          clear filters
        </button>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  .from-title {
    text-transform: uppercase;
    color: var(--dark-gray);
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 10px;
    font-size: 1.25rem;
    svg {
      font-size: 1.65rem;
    }
  }

  .form-row {
    margin-top: 1.25rem;

    h5 {
      margin-bottom: 0.5rem;
    }
  }

  .search-input {
    padding: 0.5rem;
    background: var(--off-white);
    border-radius: var(--border-radius);
    border-color: transparent;
    letter-spacing: var(--letter-spacing);
    border: 1px solid var(--dark-Violet);
  }

  button {
    display: block;
    margin: 0.25em 0;
    padding: 0.25rem 0;
    text-transform: capitalize;
    background: transparent;
    font-weight: 600;
    border: none;
    letter-spacing: var(--letter-spacing);
    color: var(--dark-gray);
    cursor: pointer;
    border-bottom: 2px solid transparent;
  }
  .active {
    color: var(--dark-Violet);
    background-color: var(--off-white);
    border-bottom: 2px solid var(--dark-Violet);
  }

  .price {
    margin-bottom: 0.25rem;
  }
  .shipping {
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
    text-transform: capitalize;
    column-gap: 0.5rem;
    font-size: 1rem;
  }
  .clear-btn {
    background: var(--light-red);
    color: var(--white);
    padding: 0.25rem 0.5rem;
    border-radius: var(--border-radius);
    &:hover {
      background: var(--dark-red);
    }
  }
  @media (min-width: 768px) {
    .content {
      position: sticky;
      top: 1rem;
    }
  }
`

export default Filters
