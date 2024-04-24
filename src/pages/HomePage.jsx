import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../store/reducers/productsSlice'
import { Hero, FeatureProducts, Services, Contact } from '../components'
import { getCartTotals } from '../store/reducers/cartSlice'

const HomePage = () => {
  const { cart } = useSelector((state) => state.cart)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getProducts())
  }, [])

  useEffect(() => {
    dispatch(getCartTotals())
  }, [cart])

  return (
    <main className='section-container'>
      <Hero />
      <FeatureProducts />
      <Services />
      <Contact />
    </main>
  )
}

export default HomePage
