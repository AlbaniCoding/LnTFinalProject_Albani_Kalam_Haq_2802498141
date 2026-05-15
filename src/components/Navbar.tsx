import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Navbar(){

    const u = localStorage.getItem("TOKOHAPPY_USERNAME");
    const [user, userState] = useState("");
    const navigate = useNavigate();

    useEffect( () => {
            if(u === null) {
                userState("?");
            } 
            else {
                userState(u.charAt(0).toUpperCase());
            }
        }
    ); 

    return (
        <>
            <nav className="text-white bg-green-400 flex justify-end p-2">
                <div className="w-1/2 text-3xl">
                    TokoHappy
                </div>
                <div className="w-1/2 flex items-center justify-end">
                    <button className="bg-white text-green-400 border-white border-2 py-2 px-4 mx-4 rounded hover:bg-green-400 hover:text-white" onClick={() => navigate("/login")}>Login</button>
                    <button className="border-blue-500 border-2 bg-blue-500 text-white py-2 px-4 mx-4 rounded hover:bg-blue-700" onClick={() => navigate("/register")}>Register</button>
                    <button className="text-3xl w-10 mx-4 pb-1 bg-white text-green-400 rounded-full hover:bg-gray-200" onClick={() => {localStorage.removeItem("TOKOHAPPY_USERNAME"); userState("?"); navigate("/");}}>{user}</button>              
                </div>
            </nav>
        </>
    );
}

export default Navbar