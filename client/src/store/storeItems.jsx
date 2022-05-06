import { makeAutoObservable } from "mobx";
import { request } from '../config';

class Store {
    constructor() {
        makeAutoObservable(this);
        this.getItems();
    };

    validate = {
        price: {
            value: /^\d+$/,
            mess: 'Price incorrect'
        },
        discount: {
            value: /^\d+$/,
            mess: 'Discount incorrect'
        },
        quantity: {
            value: /^\d+$/,
            mess: 'Quantity incorrect'
        }
    };

    model = {
        title: '',
        photo: '',
        price: '',
        quantity: ''
    };

    notify = '';
    error = '';

    img_min = null;
    img_show = false;

    edit_card_show = false;
    modal = false;
    item_show_modal = false;

    allItems = [];

    // check numbers in form
    validateForm(cb) {
        for (let key in this.validate) {
            for (let m in this.model) {
                if (key == m) {
                    if (this.model[m].search(this.validate[key].value) == -1) {
                        this.error = this.validate[key].mess;
                        return;
                    }
                }
            }
        }
        cb();
    };

    //create an item
    setFormItem(key, value) {
        if (key == 'photo') {
            this.preview(value);
            this.model.old_photo = this.model.photo;
        }
        this.model[key] = value;
    };

    create(e) {
        e.preventDefault();
        this.validateForm(() => {
            request('/items', (data) => {
                switch (data.status) {
                    case 'ok':
                        this.notify = 'Товар успешно создан';
                        this.error = '';
                        e.target.reset();
                        setTimeout(()=>{
                            this.notify = '';
                        }, 2000)
                        break;
                    case 'already':
                        this.notify = '';
                        this.error = 'Товар уже существует';
                        setTimeout(()=>{
                            this.error = '';
                        }, 2000)
                        break;
                    default:
                        this.error = 'Произошла ошибка';
                        this.notify = ''
                }
            }, 'post', this.model)
            this.img_min = null;
            this.img_show = false;
        })
    };

    preview(file) {
        const fReader = new FileReader();
        fReader.readAsDataURL(file);
        let _this = this;
        fReader.onloadend = function () {
            _this.img_min = fReader.result
            _this.img_show = true
        }
    };

    closeModal() {
        this.img_show = false
    };

    //Getting all
    getItems() {
        request('/items', (data) => {
            if (data.status == 'ok') {
                this.allItems = data.body;
            }
        })
    };


    // Delete item
    deleteItem(id) {
        request(`/items/${id}`, (data) => {
            if (data.status == 'ok') {
                this.allItems = data;
                this.notify = 'Товар успешно удален';
            } else {
                this.error = 'Возникла ошибка при удалении';
            }
        }, 'delete')
    };

    //Edition of items
    updateItem(e, id) {
        e.preventDefault();
        request(`/items/${id}`, (data) => {
            if (data.status == 'ok') {
                this.allItems = data;
                this.edit_card_show = false;
                e.target.reset();
                this.notify = 'Товар успешно изменен';
            } else {
                this.error = 'Возникла ошибка при обновлении';
            }
        }, 'put', this.model)
    };

    // Open update
    openUpdate(itm) {
        this.model = { ...itm };
        this.edit_card_show = true;
    };

    closeModalEdit() {
        this.edit_card_show = false;
        this.model = null;
    };

    // opend item chapter to add
    openAddItem() {
        if (!this.item_show_modal)
            this.item_show_modal = true;
        else
            this.item_show_modal = false
    };


};

export default new Store();