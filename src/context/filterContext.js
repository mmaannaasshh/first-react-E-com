import { createContext, useContext,useEffect,useReducer } from "react";
import {useProductContext} from '../context/productcontex';
import reducer from '../reducer/filter_reducer'

const FiletrContext=createContext();


const initialState={
    filter_products:[],
    all_products:[]
}


export const FilterContextProvider=({children})=>{

    const {products}=useProductContext();

    const [state, dispatch] = useReducer(reducer,initialState);

    useEffect(()=>{
        dispatch({type:'LOAD_FILTER_PRODUCTS',payload:products});
    },[products])








return <FiletrContext.Provider value={{...state}} >
    {children}
</FiletrContext.Provider>
}

export const useFilterContext=()=>{
    return useContext(FiletrContext)
}