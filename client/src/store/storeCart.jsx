import { makeAutoObservable } from "mobx";
import { request } from '../config';

class Store {
    constructor() {
        makeAutoObservable(this);
    }

    items_in_cart = [];
    total = 0;
    total_final = 0;

    modal = false;

    order = {
        id: Date.now(),
        date: new Date(),
        name: '',
        last_name: '',
        total: 0,
        city: '',
        adress: '',
        zip: '',
        delivery: '',
        items: [],
        company_name: '',
        phone: '',
        mail: '',
        notes: ''
    };

    to_chekout = true; // поменять на false

    sold_model = {};


    // get items in cart
    getCart() {
        this.items_in_cart = JSON.parse(localStorage.getItem('items')) || [];
        this.getTotal();
    };

    // add to cart
    addToCart(item) {
        const previous_products = localStorage.getItem('items') ? localStorage.getItem('items') : '[]';
        this.items_in_cart = JSON.parse(previous_products);

        const new_item = { ...item };
        const Check = this.items_in_cart.find((itm) => itm._id == new_item._id);
        if (Check) {
            // let val = Number.parseInt(Check.count);
            Check.count += 1;
        } else {
            this.items_in_cart.push({ ...new_item, count: 1 });
        };
        this.order.items = this.items_in_cart; //!!!!
        localStorage.setItem('items', JSON.stringify(this.items_in_cart));
        this.getTotal();
    };

    // setFormItem(key, value) {
    //     this.pre_order[key] = value;
    // };

    // change volume
    changeCount(index, value) {
        this.items_in_cart[index].count = +value;
        this.order.items = this.items_in_cart; //!!!!
        localStorage.setItem('items', JSON.stringify(this.items_in_cart));
        this.getTotal();
        console.log(this.order)
    };

    //delete
    removeItem(index) {
        this.items_in_cart.splice(index, 1);
        this.order.items = this.items_in_cart; //!!!!
        localStorage.setItem('items', JSON.stringify(this.items_in_cart));
        this.getTotal();
    }

    // get total
    getTotal() {
        this.total = 0;
        this.items_in_cart.forEach((el) => {
            this.total += el.count * el.price
        })
        this.order.total = this.total
    };

    //make an order


    setFormOrder(key, value) {
        this.order[key] = value;
    };

    makeOrder(e) {
        e.preventDefault();

        let copyOrder = { ...this.order };
        copyOrder.items = JSON.stringify(copyOrder.items)

        request('/cart/make_order', (data) => {
            if (data.status == 'ok') {
                localStorage.removeItem('items');
                this.items_in_cart = [];
                e.target.reset();
                window.location.href = '/purchase'
                setTimeout(() => {
                    this.order = {
                        name: '',
                        last_name: '',
                        total: '',
                        city: '',
                        adress: '',
                        zip: '',
                        delivery: '',
                        items: [],
                        company_name: '',
                        phone: '',
                        mail: '',
                        notes: ''
                    };
                    window.location.href = '/'
                }, 10000)
            } else {
                console.log('failed')
            }
        }, 'post', copyOrder)
    };



}

export default new Store();