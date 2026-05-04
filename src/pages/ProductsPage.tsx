import Navbar from "../components/Navbar";
import { useState } from "react";
import { register } from '../scripts/user';
import { useNavigate } from "react-router-dom";
function ProductsPage() {
    const [user, userState] = useState("");
    const [pass, passState] = useState("");
    const navigate = useNavigate();

    return (
        <>
            <Navbar></Navbar>
        </>
    )
}

export default ProductsPage