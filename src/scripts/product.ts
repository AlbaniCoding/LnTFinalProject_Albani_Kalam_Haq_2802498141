import axios from "axios";

let productList = localStorage.getItem('productlist') as any;
console.log(productList);
// debug
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
        let temp = (await axios.get("https://api.escuelajs.co/api/v1/products")).data
        productList = [];
        for(let i = 0; i < temp.length; i++){
            productList.push(new Product(temp[i].id, temp[i].title, temp[i].price, temp[i].images[0] ))
        }
        // productList = (await axios.get("https://fakestoreapi.com/products")).data
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
    if(productList.findIndex((x: any) => x.id === id) !== -1) {
        alert("ID already occupied");
        return null;
    }
    try {
        id = Number(id);
        price = Number(price);
    } catch(e) {
        alert('Error: ID or Price is not a number');
        return productList;
    }
    productList.push(new Product(id, title, price, image));
    localStorage.setItem('productlist', JSON.stringify(productList));
    return productList;
}

export function deleteProduct(id: number) {
    productList = productList.filter((x: any) => x.id !== id);
    localStorage.setItem('productlist', JSON.stringify(productList));
    return productList;
}

export function updateProduct(old_id: number, id: number, title: string, price: number, image: string) {
    try {
        id = Number(id);
        price = Number(price);
    } catch(e) {
        alert('Error: ID or Price is not a number');
        return false;
    }
    if(old_id === id) {
        deleteProduct(id);
        addProduct(id, title, price, image);
        alert('Successfully updated product');
        return true;
    }
    else if(addProduct(id, title, price, image) !== null) {
        deleteProduct(old_id);
        alert('Successfully updated product');
        return true;
    }
    else {
        alert('Product update failed');
        return false
    }
}