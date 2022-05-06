import React, { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import Sidebar from '../../Sidebar/Sidebar';
import storeItems from '../../../../store/storeItems';

const AllItems = observer(() => {
    let f = 1;

    useEffect(() => {
        storeItems.getItems();
    }, [])

    return (
        <>
            <div className="all_items">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 mt-5">
                            <Sidebar />
                        </div>
                        <div className="col-lg-9">
                            <div className="table_form_items ps-5 pe-5">
                                <h2 className='text-success'>Все товары</h2>
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th scope="col" className='text-center'>#</th>
                                            <th scope="col" className='text-center'>Фото</th>
                                            <th scope="col" className='text-center'>Название</th>
                                            <th scope="col" className='text-center'>Цена</th>
                                            <th scope="col" className='text-center'>Кол-во</th>
                                            <th scope="col" className='text-center'>Обновить</th>
                                            <th scope="col" className='text-center'>Удалить</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            storeItems.allItems.length
                                                ?
                                                storeItems.allItems.map((itm) => (
                                                    <tr key={itm._id}>
                                                        <th scope="row" className='text-center'>{f++}</th>
                                                        <td className='text-center'><img src={`/img/${itm.photo}`} width="50px" className="ms-2" /></td>
                                                        <td className='text-center'>{itm.title}</td>
                                                        <td className='text-center'>{itm.price}</td>
                                                        <td className='text-center'>{itm.quantity}</td>
                                                        <td className='text-center'><button className='btn btn-success' onClick={() => { storeItems.openUpdate(itm) }}>Обновить</button></td>
                                                        <td className='text-center'><button className='btn btn-warning' onClick={() => { storeItems.deleteItem(itm._id) }}>Удалить</button></td>
                                                    </tr>
                                                ))
                                                :
                                                <h5 className='text-danger mt-2'>Нет товаров</h5>
                                        }
                                    </tbody>
                                    {
                                        storeItems.edit_card_show
                                            ?
                                            <>
                                                <div className="edit_card">
                                                    <div class="card card_s my-5">
                                                        <div className="d-flex justify-content-between align-items-center pe-2 ps-2">
                                                            <h3>Обновите продукт</h3>
                                                            <button type="button" class="btn-close" aria-label="Close" onClick={() => { storeItems.closeModalEdit() }}></button>
                                                        </div>
                                                        <form action="" className="add_category" onSubmit={(e) => { storeItems.updateItem(e, storeItems.model._id) }}>
                                                            <img src={storeItems.img_min ? storeItems.img_min : `/img/${storeItems.model.photo}`} class="card-img-top" alt="..." />
                                                            <label for="basic-url" class="form-label mb-0">Название товара</label>
                                                            <div className="input-group ">
                                                                <input type="text" className="form-control" value={storeItems.model.title} placeholder='Введите название товара:' id='title' onInput={(e) => { storeItems.setFormItem('title', e.target.value) }} />
                                                            </div>
                                                            <label for="basic-url" className="form-label mb-0">Стоимость товара</label>
                                                            <div className="input-group">
                                                                <input type="text" className="form-control" placeholder='Введите стоимость товара:' value={storeItems.model.price} id="price" onInput={(e) => { storeItems.setFormItem('price', e.target.value) }} />
                                                            </div>
                                                            <label for="basic-url" className="form-label mb-0">Общие количество товара</label>
                                                            <div className="input-group">
                                                                <input type="text" className="form-control" placeholder='Общие количество товара:' value={storeItems.model.quantity} id="quantity" onInput={(e) => { storeItems.setFormItem('quantity', e.target.value) }} />
                                                            </div>
                                                            <label for="basic-url" className="form-label mb-0">Загрузите фото</label>
                                                            <div class="input-group mb-3">
                                                                <input type="file" class="form-control" id="photo" onChange={(e) => { storeItems.setFormItem('photo', e.target.files[0]) }} />
                                                            </div>
                                                            <button className="btn btn-success ">Обновить</button>
                                                        </form>
                                                    </div>
                                                </div>
                                            </>
                                            :
                                            null
                                    }
                                </table>
                                <p className='mt-2 text-success'>{storeItems.notify}</p>
                                <p className="mt-2 text-danger">{storeItems.error}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
})

export default AllItems