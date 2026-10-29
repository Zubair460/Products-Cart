import React, { useContext } from 'react';
import { AppContext } from './Context';

export default function ProductCart({cartItems}) {

    const {state, dispatch} = useContext(AppContext)

    return (
        <div>
            
            <h1>My Cart</h1>

            {
                state.cartItems?.map((ele) => (
                    <div key={ele.id}>
                        <h2>{ele.heading}</h2>
                        <p>Rs. {ele.price}</p>
                    </div>
                ))
            }

        </div>
    );
}