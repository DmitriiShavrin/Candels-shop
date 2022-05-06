import React from 'react';
import { Link } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import './Delivery.css';
import nude from './nude.jpeg';

const Delivery = observer(() => {

    const href = window.location.href.split('/').filter(Boolean).pop();

    return (
        <>
            <div className="delivery mt-4 mb-3">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
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
                                            {href == 'delivery' ? ' ДОСТАВКА' : null}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6">
                            <p className='fst-italic'>Доставка <span className='fw-bold'>по Москве</span> осуществляется до двери в течении суток после заказа.</p>
                            <p>Доставка до двери за МКАД до 10 км. <span className='fw-bold'>— 750 руб.</span></p>
                            <p>Доставка до двери за МКАД от 10 до 20 км. <span className='fw-bold'>— 1 050 руб.</span></p>
                            <p>Доставка до двери за МКАД от 20 до 30 км.<span className='fw-bold'>— 1 350 руб.</span></p>
                            <p>Доставка до двери <span className='fw-bold'>— 450 руб.</span></p>
                            <p>Бесплатный самовывоз</p>
                            <p className='fst-italic'>Доставка <span className='fw-bold'>по России</span> осуществляется <span className='fw-bold'>СДЭК</span> до двери согласно тарифу и занимает от 3 до 5 рабочих дней в зависимости от города в который был сделан заказ.</p>
                            <p>Оплата производится после подтверждения заказа. Бронь заказа осуществляется на сутки без оплаты, дальше заказ будет аннулирован.</p>
                        </div>
                        <div className="col-lg-6 jpg_bf"></div>
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

export default Delivery