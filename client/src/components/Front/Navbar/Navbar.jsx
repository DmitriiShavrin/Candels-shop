import React from 'react';
import { Link } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import './Navbar.css';
import logo from './luce.png';
import storeLogin from '../../../store/storeLogin';

const Navbar = observer(() => {
    return (
        <>
            <div className="container">
                <nav className="navbar ">
                    <div className="container-fluid d-flex flex-wrap align-items-center py-3 mb-4">
                        <Link to='/' className="navbar-brand" href="#">
                            <img src={logo} alt="" width="150" height="130" className="d-inline-block align-text-top" />
                        </Link>
                        <ul className="nav mt-3 d-flex align-items-center">
                            <li className="nav-item"><Link to='/about' className="nav-link font_style" >О НАС</Link></li>
                            <li className="nav-item"><Link to='/products' className="nav-link font_style" >ПРОДУКЦИЯ</Link></li>
                            <li className="nav-item"><Link to='/delivery' className="nav-link font_style" >ДОСТАВКА</Link></li>
                            <li className="nav-item"><Link to='/contacts' className="nav-link font_style" >КОНТАКТЫ</Link></li>
                            <li className="nav-item"><Link to={storeLogin.ON ? '/all_items' : '/login'} className="nav-link font_style" ><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
                                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                                <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
                            </svg></Link></li>
                            <li className="nav-item"><Link to='/cart' className="nav-link font_style" ><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bag" viewBox="0 0 16 16">
                                <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                            </svg></Link></li>
                        </ul>
                    </div>
                </nav>
            </div>
        </>
    )
})

export default Navbar