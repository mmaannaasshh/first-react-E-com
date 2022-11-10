
import { createContext, useEffect } from 'react';
import { useContext, useReducer } from 'react';
import reducer from '../reducer/cartReducer'
const CartContext = createContext();
const getLocalCartData = () => {
    let newCartData = localStorage.getItem("man")
    if (newCartData === []) {
        return []
    } else {
        return JSON.parse(newCartData)
    }
}
const initialState = {
    // cart: [],
    cart: getLocalCartData(),
    totalItem: "",
    total_amount: "",
    shipping_fees: 5000,
}

const CartProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState)


    const addToCart = (id, amount, color, products) => {
        dispatch({ type: 'ADD_TO_CART', payload: { id, amount, color, products } })
    }
    const removeItem = (id) => {
        dispatch({ type: 'REMOVE_ITEM', payload: id })
    }

const clearCart=()=>{
dispatch({type:'CLEAR_CART'})
}





    // to add the data in loal storage
    useEffect(() => {
        localStorage.setItem("man", JSON.stringify(state.cart))
    }, [state.cart])

    return <CartContext.Provider value={{ ...state, addToCart, removeItem,clearCart }} >
        {children}
    </CartContext.Provider>
}
const useCartContext = () => {
    return useContext(CartContext)
}

export { CartProvider, useCartContext }