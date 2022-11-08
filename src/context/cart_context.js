
import { createContext } from 'react';
import { useContext, useReducer } from 'react';
import reducer from '../reducer/cartReducer'
const CartContext = createContext();

const initialState = {
    cart: [],
    totalItem: "",
    total_amount: "",
    shipping_fees: 5000,
}

const CartProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState)


    const addToCart = (id,amount,color,products) => {
        dispatch({ type: 'ADD_TO_CART', payload: { id,amount,color,products } })
    }




    return <CartContext.Provider value={{ ...state, addToCart }} >
        {children}
    </CartContext.Provider>
}
const useCartContext = () => {
    return useContext(CartContext)
}

export { CartProvider, useCartContext }