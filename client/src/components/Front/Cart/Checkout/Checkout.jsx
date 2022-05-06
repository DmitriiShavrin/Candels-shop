import React from 'react';
import { Link } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import './Checkout.css';
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
                        <div className="col-lg-6 d-flex justify-content-between align-items-center list  m-auto">
                            <Link to='/cart' className='link'>Корзина</Link> <span className='fw-bold fs-3 text-secondary'>></span> <Link to='/checkout' className='link'>Оформление заказа</Link> <span className='fw-bold fs-3 text-secondary'>></span> <Link to='/purchase' className='link'>Заказ завершен</Link>
                        </div>
                        <div className="col-lg-3"></div>
                    </div>
                    {/* TABLES */}
                    <form onSubmit={e => {
                        storeCart.makeOrder(e)
                    }}>
                        <div className="row ps-3 pe-3 ">

                            <div className="col-lg-7 mb-5">
                                <div className="cupon mt-4 d-flex ps-2">
                                    <input type='text' placeholder='Купон' className='ps-3 inp'></input>
                                    <button className='ms-3 btn btn-light bt'>ПРИМЕНИТЬ КУПОН</button>
                                </div>



                                <div className='ps-2 pe-3 mt-5' >
                                    <h5>Детали оплаты</h5>
                                    <div className="d-flex mb-1">
                                        <div className=" wi">
                                            <label for="exampleInputEmail1" className="form-label">Имя</label>
                                            <input type="text" className="form-control" onInput={(e) => { storeCart.setFormOrder('name', e.target.value) }} />
                                        </div>
                                        <div className=" ms-3 wi">
                                            <label for="exampleInputEmail1" className="form-label">Фамилия</label>
                                            <input type="text" className="form-control" onInput={(e) => { storeCart.setFormOrder('last_name', e.target.value) }} />
                                        </div>
                                    </div>
                                    <div class="mb-1">
                                        <label for="exampleInputPassword1" className="form-label">Название компании (не обязательно)</label>
                                        <input type="text" className="form-control" onInput={(e) => { storeCart.setFormOrder('company_name', e.target.value) }} />
                                    </div>
                                    <div class="mb-1">
                                        <label for="exampleInputPassword1" className="form-label">Адрес</label>
                                        <input type="text" className="form-control" onInput={(e) => { storeCart.setFormOrder('adress', e.target.value) }}
                                            value={storeCart.order.adress}
                                        />
                                    </div>
                                    <div class="mb-1">
                                        <label for="exampleInputPassword1" className="form-label">Телефон</label>
                                        <input type="text" className="form-control" onInput={(e) => { storeCart.setFormOrder('phone', e.target.value) }} />
                                    </div>
                                    <div class="mb-1">
                                        <label for="exampleInputPassword1" className="form-label">Email</label>
                                        <input type="text" className="form-control" onInput={(e) => { storeCart.setFormOrder('email', e.target.value) }} />
                                    </div>
                                    <div class="mb-1">
                                        <label for="exampleInputPassword1" className="form-label">Примечание к заказу (не обязательно)</label>
                                        <textarea type="text" className="form-control" onInput={(e) => { storeCart.setFormOrder('notes', e.target.value) }} />
                                    </div>
                                </div>
                            </div>
                            {/* SUMM and DELIVERY */}
                            <div className="col-lg-5 mt-4">
                                <div className="summ_and_delivery p-5">
                                    <h6 className='fw-bold'>СУММА ЗАКАЗОВ</h6>
                                    <div className="border-bottom d-flex mt-5">
                                        <p className='fw-bold'>Подытог</p> <p className='ms-auto'>{storeCart.order.total} ₽</p>
                                    </div>
                                    <div className="delivery_chapter mt-3">
                                        <p className='fw-bold mb-3'>Доставка</p>
                                        <div class="form-check mb-3">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2"
                                                onInput={(e) => { storeCart.setFormOrder('delivery', e.target.value) }}
                                            />
                                            <label class="form-check-label" for="flexRadioDefault2">
                                                Доставка до двери за МКАД﻿ до 10 км.: 750 ₽
                                            </label>
                                        </div>
                                        <div className="form-check mb-3">
                                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"
                                                onInput={(e) => { storeCart.setFormOrder('delivery', e.target.value) }}
                                            />
                                            <label className="form-check-label" for="flexRadioDefault1">
                                                Доставка до двери за МКАД от 10 до 20 км.: 1,050 ₽
                                            </label>
                                        </div>
                                        <div className="form-check mb-3">
                                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"
                                                onInput={(e) => { storeCart.setFormOrder('delivery', e.target.value) }}
                                            />
                                            <label className="form-check-label" for="flexRadioDefault1">
                                                Доставка до двери за МКАД от 20 до 30 км.: 1,350 ₽
                                            </label>
                                        </div>
                                        <div className="form-check mb-3">
                                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"
                                                onInput={(e) => { storeCart.setFormOrder('delivery', e.target.value) }}
                                            />
                                            <label className="form-check-label" for="flexRadioDefault1">
                                                Доставка до двери: 450 ₽
                                            </label>
                                        </div>
                                        <div className="form-check mb-3">
                                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"
                                                onInput={(e) => { storeCart.setFormOrder('delivery', e.target.value) }}
                                            />
                                            <label className="form-check-label" for="flexRadioDefault1">
                                                Самовывоз
                                            </label>
                                        </div>
                                    </div>
                                    <div className="border-bottom mt-4"></div>
                                    <div className="summ_up d-flex mt-3">
                                        <h4>ИТОГО</h4>
                                        <h3 className='fw-bold ms-auto'>{storeCart.order.total} ₽</h3>
                                    </div>
                                    <button className="btn btn-dark text-white fw-bold mt-3 w-100">ПОДТВЕРДИТЬ ЗАКАЗ</button>
                                </div>
                            </div>
                        </div>
                    </form>
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