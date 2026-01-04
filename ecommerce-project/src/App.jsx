import { Route, Routes } from 'react-router';
import { HomePage } from './pages/Homepage';
import { CheckoutPage } from './pages/Checkoutpage';
import { Orders } from './pages/Orders';
import { Tracking } from './pages/Trackingpage';
import { NotFound } from './pages/Notfound'
import { useEffect, useState} from 'react';
import axios from 'axios';
import './App.css'

function App(){

  const [cart, setCart] = useState([]);

  useEffect(() => {
    axios.get('/api/cart-items?expand=product')
        .then((response) => {
          setCart(response.data);
        });
  },[]);


  return (
    <>
      <Routes>
        <Route index element={<HomePage cart={cart}/>} />
        <Route path="/checkout" element={<CheckoutPage cart={cart} />} />
        <Route path="/orders" element={<Orders />} />
        <Route  path="/tracking" element={<Tracking />} />
        <Route  path="*" element={<NotFound />} />

      </Routes>
      
    </>
  )
}

export default App
