import React from 'react'
import {useFilterContext} from '../../context/filterContext'
import GridView from './GridView';
// import ListView from './ListView';

const ProductList = () => {
    const {filter_products,setGridView}=useFilterContext();

 if (setGridView) {
    return <GridView products={filter_products}/>
    
 }
//  if (setGridView===true) {
//     return <ListView products={filter_products}/>
    
//  }



}

export default ProductList
