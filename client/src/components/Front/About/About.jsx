import React from 'react';
import $ from 'jquery';
import 'slick-carousel/slick/slick';
import { Link } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import './About.css';
import nude from './nude.jpeg';

const About = observer(() => {

    const href = window.location.href.split('/').filter(Boolean).pop();

    return (
        <>
            {/* About */}
            <div className="list_of_items mt-4">
                <div className="container">
                    <div className="row">
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
                                {href == 'about' ? ' О НАС' : null}
                            </div>
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="col-lg-12">
                            <article className=''>
                            <span className="fw-bold">!LUCE [ЛЮ’ЧЕ]</span> от итальянского свет. Свеча во многих культурах считается сакральным символом уюта, она наполняет дом атмосферой тепла. Плавная игра пламени завораживает, успокаивает и порой становится магическим телепортом в определенный момент прошлого или на другой конец света. Уникальные ароматы переносят в воспоминания и фантазии. Ваш дом заполняется приятными эмоциями и становится источником вдохновения. Закрывая входную дверь, вы чувствуете свой аромат и понимаете вы дома.

                                В философии бренда — яркая индивидуальность, тонкое восприятие прекрасного, богатство воображения, стремление к свободе и любовь к путешествиям. Авторы проекта хотели создать лаконичный и эстетически притягательный продукт, понятный и вдохновляющий. Все свечи изготовлены вручную из натурального растительного воска и органических эфирных масел и упакованы в минималистичную экологичную упаковку.
                            </article>
                        </div>
                    </div>
                </div>
            </div>
            {/* CAURUSEL */}
            <div className="caurusel">
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

export default About