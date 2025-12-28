import { Route, Routes } from 'react-router';
import { HomePage } from './pages/Homepage';
import { CheckoutPage } from './pages/Checkoutpage';
import { Orders } from './pages/Orders';
import './App.css'

function App(){
  return (
    <>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/orders" element={<Orders />} />
      </Routes>
      
    </>
  )
}

export default App
