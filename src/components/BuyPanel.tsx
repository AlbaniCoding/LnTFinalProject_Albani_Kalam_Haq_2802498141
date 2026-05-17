import { useState } from 'react';
import { getCartAmount, getCartList, updateCart, Order } from '../scripts/cart';
import { getProductList } from '../scripts/product';
import '../popup.css';

export function BuyPanel(){
   
    const productList = getProductList();
    const [cart, setCart] = useState(getCartList());

    return (
        <>
            <div className="w-screen h-screen flex flex-wrap justify-center items-start">
                {productList.map((item: any, index: any) => (
                    <div key={index} className='popup flex flex-col justify-center align-center items-center border-2 border-white rounded-2xl w-3xs m-4 h-100'>
                        <img className='w-2xs h-1/2' src={item.image}></img>
                        <p>{item.title}</p>
                        <p>{item.price + '$'}</p>
                        <div className="flex flex-row">
                            <button className="bg-blue-500 text-white py-2 px-4 my-2 rounded hover:bg-blue-700 w-auto" onClick={() => { 
                                setCart(updateCart(new Order(item.id, getCartAmount(cart,item.id) + 1)));
                            }}>+</button>
                            <div className='flex flex-col justify-center align-middle items-center px-5 border-white'>
                                <h2>{getCartAmount(cart,item.id)}</h2>
                            </div>    
                            <button className="bg-blue-500 text-white py-2 px-4 my-2 rounded hover:bg-blue-700 w-auto" onClick={() => {
                                if(getCartAmount(cart,item.id) !== 0) {
                                    setCart(updateCart(new Order(item.id, getCartAmount(cart,item.id) - 1)));
                                }
                            }}>-</button>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default BuyPanel