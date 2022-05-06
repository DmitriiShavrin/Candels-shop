import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import './Cart.css';
import cart from './cart.jpg';
import nude from './nude.jpeg';
import storeCart from '../../../../store/storeCart';

const Cart = observer(() => {

    const href = window.location.href.split('/').filter(Boolean).pop();

    useEffect(() => {
        storeCart.getCart()
    }, [])

    return (
        <>
            <div className="cart mb-3">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3"></div>
                        <div className="col-lg-6 d-flex justify-content-between align-items-center list  m-auto">
                            <Link to='/cart' className='link'>Корзина</Link> <span className='fw-bold fs-3 text-secondary'>></span> <Link to={storeCart.to_chekout ? '/checkout' : '/cart'} className='link'>Оформление заказа</Link> <span className='fw-bold fs-3 text-secondary'>></span> <Link to='/purchase' className='link'>Заказ завершен</Link>
                        </div>
                        <div className="col-lg-3"></div>
                    </div>
                    {/* TABLES */}
                    <div className="row mt-5 ps-3 pe-3">
                        <div className="col-lg-8 mb-5">
                            <table class="table">
                                <thead>
                                    <tr >
                                        <th scope="col" className='ps-0 pe-0'></th>
                                        <th scope="col" className='ps-0 pe-0'>ТОВАР</th>
                                        <th scope="col" className='ps-0 pe-0'>ЦЕНА</th>
                                        <th scope="col" className='ps-0 pe-0'>КОЛИЧЕСТВО</th>
                                        <th scope="col" className='ps-0 pe-0'>ПОДЫТОГ</th>
                                        <th scope="col" className='ps-0 pe-0'>УДАЛИТЬ</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        storeCart.items_in_cart.length
                                            ?
                                            storeCart.items_in_cart.map((item, idx) => (
                                                <tr key={idx} >
                                                    <td className='ps-0 pe-0 '>
                                                        <img src={`/img/${item.photo}`} className='pict' />
                                                    </td>
                                                    <td className='ps-0 pe-0 pt-4'>{item.title}</td>
                                                    <td className='ps-0 pe-0 pt-4'>{item.price.toLocaleString()}</td>
                                                    <td className='ps-0 pe-0 pt-4'><input type="number" defaultValue={item.count} className='text-center inp' onChange={(e) => storeCart.changeCount(idx, e.target.value)} /></td>
                                                    <td className='fw-bold ps-0 pe-0 pt-4' >{(item.count * item.price).toLocaleString()} ₽</td>
                                                    <td className='fw-bold ps-0 pe-0 pt-4' >
                                                        <button className='btn btn-warning' onClick={() => { storeCart.removeItem(idx) }}>Удалить</button>
                                                    </td>
                                                </tr>
                                            ))
                                            :
                                            null

                                    }
                                    {/* // <tr>
                                    //     <td className='ps-0 pe-0 '>
                                    //         <img src={cart} className='pict' />
                                    //     </td>
                                    //     <td className='ps-0 pe-0 pt-4'>ZERO</td>
                                    //     <td className='ps-0 pe-0 pt-4'>2,250₽</td>
                                    //     <td className='ps-0 pe-0 pt-4'><input type="number" value={1} className='text-center inp' /></td>
                                    //     <td className='fw-bold ps-0 pe-0 pt-4' >2,250₽</td>
                                    // </tr> */}
                                </tbody>
                            </table>
                            <div className="cupon mt-4 d-flex ps-2">
                                <input type='text' placeholder='Купон' className='ps-3 inp'></input>
                                <button className='ms-3 btn btn-light bt'>ПРИМЕНИТЬ КУПОН</button>
                            </div>
                        </div>
                        {/* SUMM and DELIVERY */}
                        <div className="col-lg-4">
                            <div className="summ_and_delivery p-5">
                                <div>
                                    <h6 className='fw-bold'>СУММА ЗАКАЗОВ</h6>
                                    <div className="border-bottom d-flex mt-5">
                                        <p className='fw-bold'>Подытог</p> <p className='ms-auto fw-bold fs-5'>{storeCart.total.toLocaleString()} ₽</p>
                                    </div>
                                    <div className="delivery_chapter mt-3">
                                        <p className='fw-bold mb-3'>Доставка</p>
                                        <div class="form-check mb-3">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" onInput={(e) => { storeCart.setFormOrder('delivery', e.target.value) }} value="Доставка до двери за МКАД﻿ до 10 км.: 750 ₽" />
                                            <label class="form-check-label" for="flexRadioDefault2">
                                                Доставка до двери за МКАД﻿ до 10 км.: 750 ₽
                                            </label>
                                        </div>
                                        <div className="form-check mb-3">
                                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" onInput={(e) => { storeCart.setFormOrder('delivery', e.target.value) }} value="Доставка до двери за МКАД от 10 до 20 км.: 1,050 ₽" />
                                            <label className="form-check-label" for="flexRadioDefault1">
                                                Доставка до двери за МКАД от 10 до 20 км.: 1,050 ₽
                                            </label>
                                        </div>
                                        <div className="form-check mb-3">
                                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" onInput={(e) => { storeCart.setFormOrder('delivery', e.target.value) }} value="Доставка до двери за МКАД от 20 до 30 км.: 1,350 ₽" />
                                            <label className="form-check-label" for="flexRadioDefault1">
                                                Доставка до двери за МКАД от 20 до 30 км.: 1,350 ₽
                                            </label>
                                        </div>
                                        <div className="form-check mb-3">
                                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" onInput={(e) => { storeCart.setFormOrder('delivery', e.target.value) }} value="Доставка до двери: 450 ₽" />
                                            <label className="form-check-label" for="flexRadioDefault1">
                                                Доставка до двери: 450 ₽
                                            </label>
                                        </div>
                                        <div className="form-check mb-3">
                                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" onInput={(e) => { storeCart.setFormOrder('delivery', e.target.value) }} value="Самовывоз" />
                                            <label className="form-check-label" for="flexRadioDefault1">
                                                Самовывоз
                                            </label>
                                        </div>
                                    </div>
                                    <h6>Варианты доставки будут обновлены при оформлении заказа.</h6>
                                    <div className="inputs mt-3">
                                        <input type="text" className="form-control" placeholder='Город' id="exampleInputEmail1" aria-describedby="emailHelp" onInput={(e) => { storeCart.setFormOrder('city', e.target.value) }}></input>
                                        <input type="text" className="form-control mt-2" placeholder='Улица/Дом/Квартира' id="exampleInputEmail1" aria-describedby="emailHelp" onInput={(e) => { storeCart.setFormOrder('adress', e.target.value) }}></input>
                                        <input type="text" className="form-control mt-2" placeholder='Почтовый индекс' id="exampleInputEmail1" aria-describedby="emailHelp" onInput={(e) => { storeCart.setFormOrder('zip', e.target.value) }}></input>
                                    </div>
                                    <div className="border-bottom mt-4"></div>
                                    <div className="summ_up d-flex mt-3">
                                        <h4>ИТОГО</h4>
                                        <h3 className='fw-bold ms-auto'>{storeCart.total.toLocaleString()} ₽</h3>
                                    </div>
                                    <button className="btn btn-dark text-white fw-bold mt-3 w-100" 
                                    onClick={() => {
                                        storeCart.to_chekout = true; 
                                        setTimeout(()=>{
                                            window.location.href = '/checkout';
                                        }, 1000)
                                    }}>ОФОРМИТЬ ЗАКАЗ →</button>
                                </div>
                            </div>
                        </div>
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