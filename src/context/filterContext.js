import { createContext, useContext,useEffect,useReducer } from "react";
import {useProductContext} from '../context/productcontex';
import reducer from '../reducer/filter_reducer'

const FiletrContext=createContext();


const initialState={
    filter_products:[],
    all_products:[],
    grid_view:true,
}


export const FilterContextProvider=({children})=>{

    const {products}=useProductContext();

    const [state, dispatch] = useReducer(reducer,initialState);

//to set the grid view
const setGridView=()=>{
    return dispatch({type:'SET_GRIDVIEW'})
}





    useEffect(()=>{
        dispatch({type:'LOAD_FILTER_PRODUCTS',payload:products});
    },[products])








return <FiletrContext.Provider value={{...state,setGridView}} >
    {children}
</FiletrContext.Provider>
}

export const useFilterContext=()=>{
    return useContext(FiletrContext)
}