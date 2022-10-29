import { createContext, useContext, useEffect, useReducer } from "react";
import { useProductContext } from '../context/productcontex';
import reducer from '../reducer/filter_reducer'

const FiletrContext = createContext();


const initialState = {
    filter_products: [],
    all_products: [],
    grid_view: true,
    shorting_value: "lowest",
    filter: {
        text: '',
        category: 'all',
        company: 'all'
    }
}


export const FilterContextProvider = ({ children }) => {

    const { products } = useProductContext();

    const [state, dispatch] = useReducer(reducer, initialState);

    //to set the grid view
    const setGridView = () => {
        return dispatch({ type: 'SET_GRIDVIEW' })
    }
    const setListView = () => {
        return dispatch({ type: 'SET_LISTVIEW' })
    }
    // sorting function
    const shorting = (event) => {
        let userValue = event.target.value;
        dispatch({ type: 'SHORTING', payload: userValue })
    }
    const updateFilter = (event) => {
        let name = event.target.name;
        let value = event.target.value;
        dispatch({ type: 'UPDATE_FILTER_VALUE', payload: { name, value } })
    }
    useEffect(() => {
        dispatch({ type: 'UPDATE_FILTER' })
    }, [products, state.filter])
    useEffect(() => {
        dispatch({ type: 'SHORTING_PRODUCT' })

    }, [products, state.shorting_value])


    useEffect(() => {
        dispatch({ type: 'LOAD_FILTER_PRODUCTS', payload: products });
    }, [products])


    return (<FiletrContext.Provider value={{ ...state, setGridView, setListView, shorting, updateFilter }} >
        {children}
    </FiletrContext.Provider>
    )
}

export const useFilterContext = () => {
    return useContext(FiletrContext)
}