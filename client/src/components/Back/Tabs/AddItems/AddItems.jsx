import React from 'react';
import { observer } from 'mobx-react-lite';
import Sidebar from '../../Sidebar/Sidebar';
import storeItems from '../../../../store/storeItems';

const AddItems = observer(() => {
    return (
        <>
            <div className="add_items">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 mt-5">
                            <Sidebar />
                        </div>
                        <div className="col-lg-9">
                            <div className="add_items_list ps-5 pe-5">
                                <h2 className='text-success'>Добавить товар</h2>
                                <form action="" className="add_items"
                                    onSubmit={(e) => { storeItems.create(e) }}
                                >
                                    <label for="basic-url" className="form-label mb-2 mt-2">Название товара</label>
                                    <div className="input-group ">
                                        <input type="text" className="form-control" placeholder='Введите название товара:' id='title'
                                        onInput={(e) => { storeItems.setFormItem('title', e.target.value) }} 
                                        />
                                    </div>
                                    <label for="basic-url" className="form-label mb-2 mt-2">Стоимость товара</label>
                                    <div className="input-group">
                                        <input type="text" className="form-control" placeholder='Введите стоимость товара:' id="price"
                                        onInput={(e) => { storeItems.setFormItem('price', e.target.value) }} 
                                        />
                                    </div>
                                    <label for="basic-url" className="form-label mb-2 mt-2">Общие количество товара</label>
                                    <div className="input-group">
                                        <input type="text" className="form-control" placeholder='Общие количество товара:' id="quantity"
                                        onInput={(e) => { storeItems.setFormItem('quantity', e.target.value) }} 
                                        />
                                    </div>
                                    <label for="basic-url" className="form-label mb-2 mt-2">Загрузите фото</label>
                                    <div className="input-group mb-3">
                                        <input type="file" className="form-control" id="photo"
                                        onChange={(e) => { storeItems.setFormItem('photo', e.target.files[0]) }} 
                                        />
                                    </div>
                                    <button className="btn btn-success mb-5 mt-2">Добавить</button>
                                    <p className='mt-2 text-success'>{storeItems.notify}</p>
                                    <p className="mt-2 text-danger">{storeItems.error}</p>
                                    {
                                        storeItems.img_min && storeItems.img_show
                                            ?
                                            <div className="card card_s my-5">
                                                <div className="d-flex justify-content-between align-items-center pe-2 ps-2">
                                                    <h3>Preview</h3>
                                                    <button type="button" className="btn-close" aria-label="Close" onClick={() => { storeItems.closeModal() }}></button>
                                                </div>
                                                <img src={storeItems.img_min} className="card-img-top" alt="..." />
                                            </div>
                                            :
                                            null
                                    }
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
})

export default AddItems