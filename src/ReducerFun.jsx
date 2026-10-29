import React from 'react'

export default function ReducerFun(state, action) {
        console.log(state, action);
        
       switch (action.type) {

        case 'ADD-TO-CART':
            return {
                ...state,
                cartItems: [...state.cartItems, {...action.payload, quantity: 1}]
            };

                break;
        
            default:
                break;
        }
}
