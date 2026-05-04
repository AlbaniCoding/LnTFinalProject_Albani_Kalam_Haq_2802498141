import { useEffect, useState } from "react";
import axios from "axios";

function AdminPanel() {
    const [productList, setProuductList] = useState([]);

    useEffect(() => {
        let arr = [] as any;
        axios.get("https://fakestoreapi.com/products")
            .then(res => {
                for(let i = 0; i < res.data.length; i++){
                    arr.push(res.data[i]);
                    
                }
                console.log(productList);
                setProuductList(arr);
            })
            .catch(err => {console.error(err);});
        
        
     }, []);
    return (
        <>
            
        </>
    )   
}

export default AdminPanel