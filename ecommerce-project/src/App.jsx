import { Route, Routes } from 'react-router';
import { HomePage } from './pages/Homepage';
import { CheckoutPage } from './pages/Checkoutpage';
import { Orders } from './pages/Orders';
import { Tracking } from './pages/Trackingpage';
import { NotFound } from './pages/Notfound'
import './App.css'

function App(){
  return (
    <>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/orders" element={<Orders />} />
        <Route  path="/tracking" element={<Tracking />} />
        <Route  path="*" element={<NotFound />} />

      </Routes>
      
    </>
  )
}

export default App
