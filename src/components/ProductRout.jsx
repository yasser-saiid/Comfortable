import { Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useAuth0 } from '@auth0/auth0-react'

const ProductRout = ({ children }) => {
  const { isLoading, user } = useAuth0()

  if (isLoading) {
    return <p>Loading...</p>
  }

  if (!user) {
    return <Navigate to='/' />
  }

  return children
}

export default ProductRout
