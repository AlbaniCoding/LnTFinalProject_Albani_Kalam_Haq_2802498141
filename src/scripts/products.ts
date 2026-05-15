import axios from "axios";

let productList = localStorage.getItem('productlist') as any;
//debug
// let productList = null as any;
// const alert = (x: any) => console.log(x);

class Product {
    id: number
    title: string
    price: number
    image: string
    constructor(id: number, title: string, price: number, image: string) {
        this.id = id;
        this.title = title;
        this.price = price;
        this.image = image;
    } 
}


if(productList === null) {
    try {
        productList = (await axios.get("https://fakestoreapi.com/products")).data
    } catch(err) {
        alert('API Error');
    }
    localStorage.setItem('productlist', JSON.stringify(productList));
}
else {
    productList = JSON.parse(productList);
}

export function getProductList() {
    return productList;
}

export function addProduct(id: number, title: string, price: number, image: string) {
    if(productList.findIndex((x: number) => x === id) !== -1) {
        alert("ID already occupied");
        return;
    }
    productList.push(new Product(id, title, price, image));
    localStorage.setItem('productList', JSON.stringify(productList));
    return productList;
}

export function deleteProduct(id: number) {
    productList = productList.filter((x: number) => x !== id);
    localStorage.setItem('productList', JSON.stringify(productList));
    return productList;
}