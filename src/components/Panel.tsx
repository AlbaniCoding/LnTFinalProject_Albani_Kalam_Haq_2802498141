import { getProductList, deleteProduct } from '../scripts/product';
import { useState} from "react";

export function Panel(){

    const [productList, setProuductList] = useState(getProductList() as any);

    return (
        <>
            <div className="w-screen h-screen flex flex-wrap justify-center items-start">
                {productList.map((item: any, index: any) => (
                    <div key={index} className='flex flex-col justify-center align-center items-center border-2 border-white rounded-2xl w-3xs m-4 h-100'>
                        <img className='w-2xs h-1/2' src={item.image}></img>
                        <p>{item.title}</p>
                        <p>{item.price + '$'}</p>
                        <div className="flex flex-col">
                            <button className="bg-blue-500 text-white py-2 px-4 my-2 rounded hover:bg-blue-700 w-36">Edit</button>
                            <button className="bg-red-500 text-white py-2 px-4 my-2 rounded hover:bg-red-700 w-36" onClick={() => setProuductList(deleteProduct(item.id))}>Delete</button>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Panel