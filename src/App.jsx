import { Routes, Route } from 'react-router-dom'
import { Navbar, Sidebar, Footer, ProductRout } from './components'
import {
  HomePage,
  AboutPage,
  ErrorPage,
  ProductsPage,
  SingleProductPage,
  CartPage,
  CheckoutPage,
} from './pages'

const App = () => {
  return (
    <>
      <Navbar />
      <Sidebar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/products' element={<ProductsPage />} />
        <Route path='/products/:id' element={<SingleProductPage />} />
        <Route path='cart' element={<CartPage />} />
        <Route
          path='checkout'
          element={
            <ProductRout>
              <CheckoutPage />
            </ProductRout>
          }
        />
        <Route path='*' element={<ErrorPage />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
