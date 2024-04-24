import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { FaBars } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { links } from '../utilities/constant'
import CartButtons from './CartButtons'
import { openSidebar } from '../store/reducers/sidebarSlice'

const Navbar = () => {
  const { isUser } = useSelector((state) => state.auth)
  const dispatch = useDispatch()

  return (
    <NavContainer>
      <div className='nav-center section-center'>
        <div className='nav-header'>
          <Link to='/' className='nav-logo'>
            comfortable
          </Link>
          <button
            type='button'
            className='nav-toggle'
            onClick={() => dispatch(openSidebar())}
          >
            <FaBars />
          </button>
        </div>
        <ul className='nav-links'>
          {links.map((link) => {
            const { id, text, url } = link
            return (
              <li key={id}>
                <Link to={url}>{text}</Link>
              </li>
            )
          })}
          {isUser && (
            <li>
              <Link to='/checkout'>checkout</Link>
            </li>
          )}
        </ul>
        <CartButtons />
      </div>
    </NavContainer>
  )
}

const NavContainer = styled.nav`
  height: 5rem;
  display: grid;
  place-items: center;
  .nav-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .nav-logo {
    font-size: 1.95rem;
    color: var(--dark-Violet);
    text-transform: capitalize;
  }
  .nav-toggle {
    background: transparent;
    border: transparent;
    color: var(--dark-Violet);
    cursor: pointer;
    svg {
      font-size: 2rem;
    }
  }
  .nav-links {
    display: none;
  }
  .cart-btn-wrapper {
    display: none;
  }
  @media (min-width: 992px) {
    .nav-toggle {
      display: none;
    }
    .nav-center {
      display: grid;
      grid-template-columns: auto 1fr auto;
      align-items: center;
    }
    .nav-links {
      display: flex;
      justify-content: center;
      li {
        margin: 0 0.5rem;
      }
      a {
        color: var(--dark-Violet);
        font-size: 1.15rem;
        text-transform: capitalize;
        letter-spacing: var(--letter-spacing);
        padding: 0.5rem;
        &:hover {
          border-bottom: 2px solid var(--dark-Violet);
        }
      }
    }
    .cart-btn-wrapper {
      display: grid;
    }
  }
`

export default Navbar
