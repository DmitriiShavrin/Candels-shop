import React from 'react';
import { Link } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import './Purchase.css';
import nude from './nude.jpeg';
import storeCart from '../../../../store/storeCart';

const Cart = observer(() => {

    const href = window.location.href.split('/').filter(Boolean).pop();

    return (
        <>
            <div className="cart mb-3">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3"></div>
                        <div className="col-lg-6 d-flex justify-content-between align-items-center list m-auto">
                            <Link to='/cart' className='link'>Корзина</Link> <span className='fw-bold fs-3 text-secondary'>></span> <Link to='/checkout' className='link'>Оформление заказа</Link> <span className='fw-bold fs-3 text-secondary'>></span> <Link to='/purchase' className='link'>Заказ завершен</Link>
                        </div>
                        <div className="col-lg-3"></div>
                    </div>
                    <div className="row">
                        <div className="col-lg-2"></div>
                        <div className="col-lg-8">
                            <div className="first_block mt-4 mb-4">
                                <h3 className='text-center'>
                                    <span className='text-success me-2'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-check2" viewBox="0 0 16 16">
                                            <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
                                        </svg>
                                    </span>
                                    Ваш заказ принят. Благодарим Вас.
                                </h3>
                            </div>
                            <div className="second-block">
                                <h5 className='mb-4'>Ваш заказ</h5>
                                <div className="table mb-0">
                                    <div className="chapter">
                                        <h6 className='ms-2'>Товар</h6>
                                        <hr className='mb-0' />
                                        <div className="d-flex ">
                                            {
                                                storeCart.order.items.length
                                                    ?
                                                    storeCart.order.items.map((item, idx) => (
                                                        <>
                                                            <h6>{item.title} x {item.count}</h6>
                                                            <h6 className='ms-auto'>{item.count * item.price} ₽</h6>
                                                        </>
                                                    ))
                                                    :
                                                    null
                                            }
                                        </div>
                                    </div>
                                </div>
                                <div className="table">
                                    <div className="chapter">
                                        <div className="d-flex mb-0">
                                            <h6>Подытог</h6>
                                            <h6 className='ms-auto'>{storeCart.order.total} ₽</h6>
                                        </div>
                                        <hr className='mb-0 mt-0' />
                                        <div className="d-flex ">
                                            <h6>Доставка</h6>
                                            <h6 className='ms-auto'>{storeCart.order.delivery}</h6>
                                        </div>
                                        <hr className='mb-0 mt-0' />
                                        <div className="d-flex ">
                                            <h6>Метод оплаты</h6>
                                            <h6 className='ms-auto'>Оплата после подтверждения заказа</h6>
                                        </div>
                                        <hr className='mb-3 mt-0' />
                                        <div className="d-flex align-items-center">
                                            <h6>Итого:</h6>
                                            <h6 className='ms-auto fw-bold fs-4'>{storeCart.order.total} ₽</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2"></div>
                    </div>
                    {/* Carousel */}
                    <div className="caurusel mt-5">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="text-center">
                                        <h4 className='mb-0'>Наш инстаграм</h4>
                                        <p>@luce_candles_moscow</p>
                                    </div>
                                </div>
                            </div>
                            <div className="row mt-2 mb-5">
                                <div className="col-lg-2">
                                    <div className="card">
                                        <img src={nude} class="card-img-top" />
                                    </div>
                                </div>
                                <div className="col-lg-2">
                                    <div className="card">
                                        <img src={nude} class="card-img-top" />
                                    </div>
                                </div>
                                <div className="col-lg-2">
                                    <div className="card">
                                        <img src={nude} class="card-img-top" />
                                    </div>
                                </div>
                                <div className="col-lg-2">
                                    <div className="card">
                                        <img src={nude} class="card-img-top" />
                                    </div>
                                </div>
                                <div className="col-lg-2">
                                    <div className="card">
                                        <img src={nude} class="card-img-top" />
                                    </div>
                                </div>
                                <div className="col-lg-2">
                                    <div className="card">
                                        <img src={nude} class="card-img-top" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
})

export default Cart