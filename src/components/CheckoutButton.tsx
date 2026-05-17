import { useNavigate } from "react-router-dom";

export default function CheckoutButton() {
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
        onClick={() => navigate('/checkout')}
        ><img src="https://upload.wikimedia.org/wikipedia/commons/c/c3/Shopping_cart_Pinhead_icon.svg?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original" className="w-8 h-8"></img></button>
    );
}