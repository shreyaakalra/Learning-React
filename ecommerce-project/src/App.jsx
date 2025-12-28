import { Route, Routes } from 'react-router';
import { HomePage } from './pages/Homepage';
import { CheckoutPage } from './pages/Checkoutpage';
import './App.css'

function App(){
  return (
    <>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="checkout.html" element={<CheckoutPage />} />
      </Routes>
      
    </>
  )
}

export default App
