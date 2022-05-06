import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
// Front
import HomePage from './components/Front/HomePage/HomePage';
import About from './components/Front/About/About';
import Navbar from './components/Front/Navbar/Navbar';
import Footer from './components/Front/Footer/Footer';
import Products from './components/Front/Products/Products';
import Delivery from './components/Front/Delivery/Delivery';
import Contacts from './components/Front/Contacts/Contacts';
import Cart from './components/Front/Cart/Cart/Cart';
import Checkout from './components/Front/Cart/Checkout/Checkout';
import Purchase from './components/Front/Cart/Purchase/Purchase';
import Login from './components/Front/Login/Login';
// Back
import AddItems from './components/Back/Tabs/AddItems/AddItems';
import AllItems from './components/Back/Tabs/AllItems/AllItems';
//stores
import storeLogin from './store/storeLogin';
import storeCart from './store/storeCart';


function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          {/* FRONT */}
          <Route path='/' element={<HomePage />} />
          <Route path='/about' element={<About />} />
          <Route path='/products' element={<Products />} />
          <Route path='/delivery' element={<Delivery />} />
          <Route path='/contacts' element={<Contacts />} />
          <Route path='/cart' element={<Cart />} />
          {
            storeCart.to_chekout
              ?
              <Route path='/checkout' element={<Checkout />} />
              :
              null
          } 
          <Route path='/purchase' element={<Purchase />} />
          <Route path='/login' element={<Login />} />
          {/* BACK */}
          {
            storeLogin.ON
              ?
              <>
                <Route path='/add_items' element={<AddItems />} />
                <Route path='/all_items' element={<AllItems />} />
              </>
              :
              null
          }

        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default observer(App);

// доделать козину с товарами 
