import React from 'react';
import { observer } from 'mobx-react-lite';
import { Link, useLocation } from 'react-router-dom';
import './Sidebar.css';
import storeLogin from '../../../store/storeLogin';

const Sidebar = observer(() => {
    const { pathname } = useLocation();

    return (
        <>
            <div className="list-group mb-3">
                <Link to='/all_items' className={`list-group-item list-group-item-action ${pathname == '/all_items' ? 'active' : ''}`} >Все товары</Link>
                <Link to='/add_items' className={`list-group-item list-group-item-action ${pathname == '/add_items' ? 'active' : ''}`} >Добавить товары</Link>
                {/* <Link to='/change_contacts' className={`list-group-item list-group-item-action ${pathname == '/change_contacts' ? 'active' : ''}`} >Контакты</Link> */}
                <button className="list-group-item list-group-item-action" onClick={() => { storeLogin.logout() }}>Выйти</button>
            </div>
        </>
    )
})

export default Sidebar