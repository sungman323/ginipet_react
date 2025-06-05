import './App.css';
import Main from './component/Main';
import Footer from './layout/Footer';
import Header from './layout/Header';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import './styles/reset.css';
import './styles/common.css';
import Join from './component/Join';
import Login from './component/Login';
import Cart from './component/Cart';
import Order from './component/Order';
import Intro from './component/Intro';
import Info from './component/Info';
import Event from './component/Event';
import Customer from './component/Customer';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/join' element={<Join />} />
          <Route path='/login' element={<Login />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/order' element={<Order />} />
          <Route path='/intro' element={<Intro />} />
          <Route path='/info' element={<Info />} />
          <Route path='/event' element={<Event />} />
          <Route path='/customer' element={<Customer />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
