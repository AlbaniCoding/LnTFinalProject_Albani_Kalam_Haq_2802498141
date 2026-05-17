import { useNavigate } from "react-router-dom";

export default function CreateButton() {
    const navigate = useNavigate();
    return (
        <button
        className="
            flex 
            items-center 
            justify-center
            fixed bottom-6 right-6
            w-14 
            h-14
            rounded-full
            bg-green-500
            hover:bg-green-700
            text-black
            text-3xl
            font-bold
        "
        onClick={() => navigate('/create')}
        >+</button>
    );
}