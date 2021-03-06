import React, { useEffect } from 'react';
import $ from 'jquery';
import 'slick-carousel/slick/slick';
import { Link } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import './HomePage.css';
import item from './item1.jpg';
import nude from './nude.jpeg';
import storeLogin from '../../../store/storeLogin';
import storeItems from '../../../store/storeItems';
import storeCart from '../../../store/storeCart';

const HomePage = observer(() => {
    function initNewSlider() {
        setTimeout(() => {
            $('#slider_nevers').slick({
                slidesToShow: 4,
                dots: true,
                arrows: true,
                responsive: [
                    {
                        breakpoint: 767,
                        settings: {
                            slidesToShow: 3
                        }
                    },
                    {
                        breakpoint: 574,
                        settings: {
                            slidesToShow: 2
                        }
                    },
                    {
                        breakpoint: 399,
                        settings: {
                            slidesToShow: 1
                        }
                    }
                ]
            })
        })
    }

    return (
        <>
            {/* CARDS */}
            <div className="list_of_items mt-4">
                <div className="container">
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
                                                <p className="card-text mb-2 fw-bold fs-4">{item.price} ???</p>
                                                <Link to='/' className='btn_cart d-flex align-items-center m-auto'>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-bag" viewBox="0 0 16 16">
                                                        <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                                                    </svg>
                                                    <p className='mb-0 ms-1' onClick={()=>storeCart.addToCart(item)}>?? ??????????????</p>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                ))
                                :
                                <h4>?????? ??????????????</h4>
                        }
                    </div>
                </div>
            </div>
            {/* CAURUSEL */}
            <div className="caurusel">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="text-center">
                                <h4 className='mb-0'>?????? ??????????????????</h4>
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
                    {/* <div id="slider_nevers" className='px-4'>
                        <div className="col-lg-3 col-sm-12 col-md-6">
                            <div className="card" >
                                <div className="">
                                    <img src={item} alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-12 col-md-6">
                            <div className="card" >
                                <div className="">
                                    <img src={item} alt="" />
                                </div>
                            </div>
                        </div>
                    </div> */}

                </div>
            </div>
        </>
    )
})

export default HomePage