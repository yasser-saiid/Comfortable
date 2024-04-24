import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { FaTimes } from 'react-icons/fa'
import { links } from '../utilities/constant'
import styled from 'styled-components'
import CartButtons from './CartButtons'
import { closeSidebar } from '../store/reducers/sidebarSlice'

const Sidebar = () => {
  const { isSidebarOpen } = useSelector((state) => state.sidebar)
  const { isUser } = useSelector((state) => state.auth)
  const dispatch = useDispatch()

  return (
    <SidebarContainer>
      <aside
        className={`${isSidebarOpen ? 'sidebar show-sidebar' : 'sidebar'}`}
      >
        <div className='sidebar-header'>
          <Link to='/' className='sidebar-logo'>
            comfortable
          </Link>
          <button
            className='close-btn'
            onClick={() => dispatch(closeSidebar())}
          >
            <FaTimes />
          </button>
        </div>
        <ul className='links'>
          {links.map(({ id, text, url }) => {
            return (
              <li key={id}>
                <Link to={url} onClick={() => dispatch(closeSidebar())}>
                  {text}
                </Link>
              </li>
            )
          })}
          {isUser && (
            <li>
              <Link to='/checkout' onClick={() => dispatch(closeSidebar())}>
                checkout
              </Link>
            </li>
          )}
        </ul>
        <CartButtons />
      </aside>
    </SidebarContainer>
  )
}

const SidebarContainer = styled.div`
  text-align: center;
  .sidebar-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 1.5rem;
  }
  .close-btn {
    font-size: 2rem;
    background: transparent;
    border-color: transparent;
    color: var(--dark-red);
    transition: var(--transition);
    cursor: pointer;
    margin-top: 0.2rem;
  }
  .close-btn:hover {
    color: var(--clr-red-light);
  }
  .sidebar-logo {
    justify-self: center;
    height: 45px;
    font-size: 1.95rem;
    color: var(--dark-Violet);
    text-transform: capitalize;
  }
  .links {
    margin-bottom: 2rem;
  }
  .links a {
    display: block;
    text-align: left;
    font-size: 1.15rem;
    text-transform: capitalize;
    padding: 1rem 1.5rem;
    color: var(--dark-Violet);
    transition: var(--transition);
    letter-spacing: var(--spacing);
  }

  .links a:hover {
    padding: 1rem 1.5rem;
    padding-left: 2rem;
    background: var(--light-gray);
    color: var(--light-Violet);
  }

  .sidebar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: var(--white);
    transition: var(--transition);
    transform: translate(-100%);
    z-index: -1;
  }
  .show-sidebar {
    transform: translate(0);
    z-index: 999;
  }
  .cart-btn-wrapper {
    margin: 2rem auto;
  }
  @media screen and (min-width: 992px) {
    .sidebar {
      display: none;
    }
  }
`

export default Sidebar
