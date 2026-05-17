import Navbar from "../components/Navbar";
import { useState } from "react";
import { register } from '../scripts/user';
import { useNavigate } from "react-router-dom";
function RegisterPage() {
    const [user, userState] = useState("");
    const [pass, passState] = useState("");
    const navigate = useNavigate();

    return (
        <>
            <Navbar></Navbar>
            <div className="flex justify-center items-center min-h-screen">
                <div className='flex flex-col justify-center align-center items-center border-2 border-white rounded-2xl w-3xs'>
                    <input
                        type="text"
                        value={user}
                        onChange={(e) => userState(e.target.value)}
                        placeholder="Username"
                        className="input border-2 border-white rounded-full m-4 text-center text-white"
                    />

                    <input
                        type="password"
                        value={pass}
                        onChange={(e) => passState(e.target.value)}
                        placeholder="Password"
                        className="input border-2 border-white rounded-full m-4 text-center text-white"
                    />

                    <button className="p-2 m-2 bg-blue-500 hover:bg-blue-700 rounded-full text-white" onClick={() => {
                        {
                            register(user, pass);
                            navigate("/login");
                        }    
                    }}>Register</button>

                </div>
            </div>
        </>
    )
}

export default RegisterPage