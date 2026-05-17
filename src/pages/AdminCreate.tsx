import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { addProduct } from "../scripts/product";

export default function AdminCreate() {
    const [id, idState] = useState('');
    const [title, titleState] = useState('');
    const [price, priceState] = useState('');
    const [image, imageState] = useState('');

    const navigate = useNavigate();

    return (
        <>
            <Navbar/>
            <div className="flex justify-center items-center min-h-screen">
                <div className='flex flex-row justify-center align-center items-center border-2 border-white rounded-2xl w-auto h-auto'>
                    <div>
                        <img src={image} className="w-2xs h-100"></img>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="flex flex-row m-1">
                            <p className=""><pre>ID   : </pre></p>
                            <input
                                type="text"
                                value={id}
                                onChange={(e) => idState(e.target.value)}
                                placeholder='ID (number)'
                                className="input border-2 border-white rounded-full text-center text-white pl-2 pr-2"
                            />
                        </div>
                        <div className="flex flex-row m-1">
                            <p className=""><pre>Title: </pre></p>
                            <input
                                type="text"
                                value={title}
                                onChange={(e) => titleState(e.target.value)}
                                placeholder='TITLE'
                                className="input border-2 border-white rounded-full text-center text-white pl-2 pr-2"
                            />
                        </div>
                        <div className="flex flex-row m-1">
                            <p className=""><pre>Price: </pre></p>
                            <input
                                type="text"
                                value={price}
                                onChange={(e) => priceState(e.target.value)}
                                placeholder='PRICE ($)'
                                className="input border-2 border-white rounded-full text-center text-white pl-2 pr-2"
                            />
                        </div>
                        <div className="flex flex-row m-1">
                            <p className=""><pre>Image: </pre></p>
                            <input
                                type="text"
                                value={image}
                                onChange={(e) => imageState(e.target.value)}
                                placeholder='IMAGE (link)'
                                className="input border-2 border-white rounded-full text-center text-white pl-2 pr-2"
                            />
                        </div>
                        <button className="bg-blue-500 text-white py-2 px-4 my-2 rounded hover:bg-blue-700 w-36" onClick={() => {
                            try { 
                                if(addProduct(Number(id), title, Number(price), image)){
                                    navigate('/admin');
                                }
                            } catch(e) {
                                alert('ID or Price is not a number');
                            } 
                        }}>Update</button>
                    </div>
                </div>
            </div>
        </>
    )
}