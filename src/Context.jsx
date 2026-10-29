
import React, { createContext, useEffect, useReducer } from 'react';
import ReducerFun from './ReducerFun';


export const AppContext = createContext();

export default function Context({ children }) {

    const initialState = {
        cartItems: [],
        TotalQty: 0,
        TotalAmount: 0,
    };

    const [state, dispatch] = useReducer(
        ReducerFun,
        initialState
    );


    useEffect(()=>{
        console.log('current state:', state)
    }, [state])

    return (
        <AppContext.Provider value={{ state, dispatch }}>
            {children}
        </AppContext.Provider>
    );
}
