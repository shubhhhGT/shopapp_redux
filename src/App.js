import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import Cart from './pages/Cart';
import Navbar from './components/Navbar';

function App() {
  return (
    <div>

      <div className='bg-slate-900'>
        <Navbar/>
      </div>

      {/* Define the routing for different pages using React Router. */}
      <Routes>
        {/* Route to the Home page. */}
        <Route path='/' element={<Home/>} />
        {/* Route to the cart page. */}
        <Route path='/cart' element={<Cart/>} />
      </Routes>

    </div>
  );
}

export default App;
