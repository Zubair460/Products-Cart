
import React, { useContext, useState } from 'react';
import SmartWatch from './assets/Smart Watch.jpg';
import ProductCart from './ProductCart';
import { AppContext } from './Context';

export default function MyProducts() {
    
    
    const {state, dispatch} = useContext(AppContext)

    const data = [
        {
            id: 1,
            img: SmartWatch,
            heading: "Smart Watch",
            description: "A stylish smartwatch with fitness tracking and modern features.",
            price: 4500
        },
        {
            id: 2,
            img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
            heading: "Wireless Headphones",
            description: "Enjoy high-quality sound with comfortable wireless headphones.",
            price: 3500
        },
        {
            id: 3,
            img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
            heading: "Sports Shoes",
            description: "Comfortable and lightweight sports shoes for everyday use.",
            price: 6000
        },
        {
            id: 4,
            img: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99c",
            heading: "Digital Camera",
            description: "Capture beautiful moments with this high-quality digital camera.",
            price: 25000
        },
        {
            id: 5,
            img: "https://images.unsplash.com/photo-1546868871-7041f2a55e12",
            heading: "Smart Watch Pro",
            description: "A premium smartwatch with advanced health and fitness features.",
            price: 8500
        },
        {
            id: 6,
            img: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9",
            heading: "Smartphone",
            description: "A modern smartphone with a powerful camera and fast performance.",
            price: 45000
        }
    ];

    const [products] = useState(data);
    const [showCart, setShowCart] = useState(false);

    function handleAddToCart(ele){
        setShowCart(true)
        dispatch({type: 'ADD-TO-CART', payload: ele})
    }
    return (
        <div>
            
            {/* Cart Component */}
            {showCart && (
                <ProductCart/>
            )}

            {/* Products */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">

                {products.map((ele) => {
                    return (
                        <div
                            key={ele.id}
                            className="border rounded-xl p-4 shadow-md"
                        >

                            <h1 className="text-xl font-bold">
                                {ele.id}
                            </h1>

                            <img
                                src={ele.img}
                                alt={ele.heading}
                                className="w-full h-48 object-cover rounded-lg"
                            />

                            <h1 className="text-xl font-semibold mt-3">
                                {ele.heading}
                            </h1>

                            <p className="text-gray-600 mt-2">
                                {ele.description}
                            </p>

                            <h1 className="text-lg font-bold text-blue-600 mt-3">
                                Rs. {ele.price}
                            </h1>

                            <button
                                onClick={() => handleAddToCart(ele)}
                                className="bg-blue-600 text-white px-4 py-2 rounded-lg mt-4 hover:bg-blue-700"
                            >
                                Add To Cart
                            </button>

                        </div>
                    );
                })}

            </div>

        </div>
    );
}
