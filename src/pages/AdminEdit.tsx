import Navbar from "../components/Navbar";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { updateProduct } from "../scripts/product";

export function AdminEdit() {
    const {state} = useLocation();

    const [id, idState] = useState(state.id);
    const [title, titleState] = useState(state.title);
    const [price, priceState] = useState(state.price);
    const [image, imageState] = useState(state.image);

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
                                placeholder={state.id}
                                className="input border-2 border-white rounded-full text-center text-white pl-2 pr-2"
                            />
                        </div>
                        <div className="flex flex-row m-1">
                            <p className=""><pre>Title: </pre></p>
                            <input
                                type="text"
                                value={title}
                                onChange={(e) => titleState(e.target.value)}
                                placeholder={state.title}
                                className="input border-2 border-white rounded-full text-center text-white pl-2 pr-2"
                            />
                        </div>
                        <div className="flex flex-row m-1">
                            <p className=""><pre>Price: </pre></p>
                            <input
                                type="text"
                                value={price}
                                onChange={(e) => priceState(e.target.value)}
                                placeholder={state.price}
                                className="input border-2 border-white rounded-full text-center text-white pl-2 pr-2"
                            />
                        </div>
                        <div className="flex flex-row m-1">
                            <p className=""><pre>Image: </pre></p>
                            <input
                                type="text"
                                value={image}
                                onChange={(e) => imageState(e.target.value)}
                                placeholder={state.image}
                                className="input border-2 border-white rounded-full text-center text-white pl-2 pr-2"
                            />
                        </div>
                        <button className="bg-blue-500 text-white py-2 px-4 my-2 rounded hover:bg-blue-700 w-36" onClick={() => {
                            if(updateProduct(state.id, id, title, price, image)){
                                navigate('/admin');
                            }
                        }}>Update</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AdminEdit