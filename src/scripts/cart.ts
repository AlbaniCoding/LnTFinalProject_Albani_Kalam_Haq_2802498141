import axios from 'axios';

export class Order {
    id: number
    amount: number
    constructor(id: number, amount: number) {
        this.id = id;
        this.amount = amount
    }

    public getTitle() {
        let index = productList.findIndex((x: any) => x.id === this.id);
        if(index === -1) {
            alert('This item no longer exist');
            return 'Error: Item not found';
        }
        return productList[index].title;
    }

    public getPrice() {
        let index = productList.findIndex((x: any) => x.id === this.id);
        if(index === -1) {
            alert('This item no longer exist');
            return 0;
        }
        return productList[index].price;
    }

    public getTotal() {
        return this.getPrice() * this.amount;
    }
}

let productList = localStorage.getItem('productlist') as any;
// debug
// let productList = null as any;
// const alert = (x: any) => console.log(x);

if(productList === null) {
    try {
        productList = (await axios.get("https://fakestoreapi.com/products")).data
    } catch(err) {
        alert('API Error');
    }
    // localStorage.setItem('productlist', JSON.stringify(productList));
}
else {
    productList = JSON.parse(productList);
}
let cartlist = localStorage.getItem('cartlist') as any;
// let cartlist = null as any;

if(cartlist === null){
    cartlist = [] as any;
}
else {
    cartlist = JSON.parse(cartlist!);
}

export function getCartList() {
    return cartlist;
}

export function updateCart(order: Order) {
    let cart = [...cartlist];
    let index = cart.findIndex((x: Order) => x.id == order.id);
    if(index === -1){
        cart.push(order);
    }
    else {
        cart[index] = order;
    }
    cartlist = cart;
    localStorage.setItem('cartlist', JSON.stringify(cartlist));
    return cart;
}

export function deleteCart(id: number) {
    cartlist = cartlist.filter((x: Order) =>  x.id !== id);
    localStorage.setItem('cartlist', JSON.stringify(cartlist));
    return cartlist;
}

export function getCartAmount(cart: any, id: number) {
    let index = cart.findIndex((x: Order) => x.id === id) 
    if(index === -1) {
        return 0;
    }
    return cart[index].amount;
}

export function getPrice(id: number) {
    let index = productList.findIndex((x: any) => x.id === id);
    if(index === -1) {
        alert('This item no longer exist');
        return 0;
    }
    return productList[index].price;
}

export function getTotal(order: Order) {
    return getPrice(order.id) * order.amount;
}

export function getTitle(id: number) {
    let index = productList.findIndex((x: any) => x.id === id);
        if(index === -1) {
            alert('This item no longer exist');
            return 'Error: Item not found';
        }
    return productList[index].title;
}

export function getAllTotal() {
    let total = 0
    for(let i = 0; i < cartlist.length; i++) {
        total += getTotal(cartlist[i]);
    }
    return total;
}