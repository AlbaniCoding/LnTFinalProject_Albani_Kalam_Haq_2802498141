import Navbar from "../components/Navbar";
import { getAllTotal, getCartList, getTitle, getTotal, Order } from "../scripts/cart";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";


export default function Checkout() {
    const navigate = useNavigate();
    const cart = getCartList().filter((x: any) => x.amount !== 0);
    const [name, setName] = useState("");
    useEffect(() => {
        if(cart.length === 0) {
            alert('No items in cart');
            navigate('/products');
        }
    })
        
    return ( 
        <>
            <Navbar/>
            <div className="flex justify-center items-center min-h-screen">
                <div className='flex flex-col justify-center align-center items-center border-2 border-white rounded-2xl w-96'>
                    {cart.map((item: Order, index: number) => {
                        return(<h2 key={index}>{item.amount + ' x ' + getTitle(item.id) + ' ' + getTotal(item) + '$'}</h2>);
                    })}
                    <h2>{"Total: " + getAllTotal()}</h2>
                    <div className="flex flex-row m-1">
                            <p className=""><pre>Nama : </pre></p>
                            <input
                                type="text"
                                onChange={(e) => setName(e.target.value)}
                                className="input border-2 border-white rounded-full text-center text-white pl-2 pr-2"
                            />
                    </div>
                    <div className="flex flex-row m-1">
                            <p className=""><pre>Telp : </pre></p>
                            <input
                                type="text"
                                className="input border-2 border-white rounded-full text-center text-white pl-2 pr-2"
                            />
                    </div>
                    <div className="flex flex-row m-1">
                            <p className=""><pre>Email: </pre></p>
                            <input
                                type="text"
                                className="input border-2 border-white rounded-full text-center text-white pl-2 pr-2"
                            />
                    </div>
                    <div className="flex flex-row m-1">
                            <p className=""><pre>Rumah: </pre></p>
                            <input
                                type="text"
                                className="input border-2 border-white rounded-full text-center text-white pl-2 pr-2"
                            />
                    </div>
                    <div className="flex flex-row m-1">
                            <p className=""><pre>rek  : </pre></p>
                            <input
                                type="text"
                                className="input border-2 border-white rounded-full text-center text-white pl-2 pr-2"
                            />
                    </div>
                    <button className="bg-blue-500 text-white py-2 px-4 my-2 rounded hover:bg-blue-700 w-36" onClick={() => {
                        alert('Transaction successful by ' + name + ' with total price ' + getAllTotal() + '$');
                        localStorage.removeItem('cartlist');
                        navigate('/');
                    }}>Buy</button>
                </div>
            </div>
        </>
    );
}