import React from 'react';
import { Link } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import './Products.css';
import item from './item1.jpg';
import storeItems from '../../../store/storeItems';
import storeCart from '../../../store/storeCart';

const Products = observer(() => {

    const href = window.location.href.split('/').filter(Boolean).pop();

    return (
        <>
            {/* CARDS */}
            <div className="list_of_items mt-4 mb-3">
                <div className="container">
                    <div className="row mb-5">
                        <div className="col-lg-12">
                            <div className="col-lg-12 d-flex  align-items-center">
                                <Link to='/' className='text-decoration-none'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-house" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M2 13.5V7h1v6.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V7h1v6.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5zm11-11V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z" />
                                        <path fill-rule="evenodd" d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z" />
                                    </svg>
                                </Link>
                                <div className="ms-2 me-2 mt-1">
                                >
                                </div>
                                <div className=" mt-1">
                                    {href == 'products' ? ' ПРОДУКЦИЯ' : null}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {
                            storeItems.allItems.length
                                ?
                                storeItems.allItems.map(item => (
                                    <div className="col-lg-3 col-md-4 col-sm-6" key={item.id}>
                                        <div className="card card_style" >
                                            <img src={`/img/${item.photo}`} className="card-img-top" />
                                            <div className="card-body d-flex flex-column justify-content-center text-center">
                                                <h6 className="card-title mb-1 fs-5">{item.title}</h6>
                                                <p className="card-text mb-2 fw-bold fs-4">{item.price} ₽</p>
                                                <Link to='/' className='btn_cart d-flex align-items-center m-auto'>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-bag" viewBox="0 0 16 16">
                                                        <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                                                    </svg>
                                                    <p className='mb-0 ms-1' onClick={()=>storeCart.addToCart(item)}>В КОРЗИНУ</p>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                ))
                                :
                                <h4>Not products</h4>
                        }
                    </div>
                </div>
            </div>
        </>
    )
})

export default Products