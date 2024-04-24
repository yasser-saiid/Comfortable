import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components'
import { updateSorting, sortProducts } from '../store/reducers/productsSlice'

const Sort = () => {
  const dispatch = useDispatch()

  const { filteredProducts, sort } = useSelector((state) => state.products)

  const updateSort = (e) => {
    const name = e.target.name
    const value = e.target.value
    dispatch(updateSorting({ name, value }))
  }

  useEffect(() => {
    dispatch(sortProducts())
  }, [sort])

  return (
    <Wrapper>
      <small>{filteredProducts.length} products found</small>
      <hr />
      <form>
        <label htmlFor='sort' className='form-label'>
          sort by |
        </label>
        <select
          name='sort'
          id='sort'
          className='form-select'
          value={sort}
          onChange={updateSort}
        >
          <option value='price-lowest'>price (lowest)</option>
          <option value='price-highest'>price (highest)</option>
          <option value='name-a'>name (a - z)</option>
          <option value='name-z'>name (z - a)</option>
        </select>
      </form>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  margin-bottom: 2rem;
  column-gap: 2rem;
  @media (max-width: 576px) {
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 0.75rem;

    label {
      display: inline-block;
      margin-right: 0.5rem;
    }
  }
  @media (min-width: 768px) {
    column-gap: 2rem;
    position: sticky;
    z-index: 10;
    background-color: var(--white);
    top: 0rem;
    padding: 1rem 0;
  }
`

export default Sort
