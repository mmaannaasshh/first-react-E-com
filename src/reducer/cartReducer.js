
const cartReducer = (state,action) => {
switch (action.type) {
  case 'ADD_TO_CART':
    let {id,amount,color,products}=action.payload;
    let cartProduct;
    cartProduct={
      id:id+color,
      name:products.name,
      color:color,
      amount:amount,
      image:products.image[0].url,
      price:products.price,
      max:products.stock,
    }

    return{
      ...state,
      cart:[...state.cart,cartProduct]
    }
    case 'REMOVE_ITEM':
      let updatedCart=state.cart.filter((e)=>e.id!==action.payload)
      return{
        ...state,
        cart:updatedCart
      }
   case 'CLEAR_CART':
    return{
      ...state,
      cart:[]
    }

  default:
    return state
   
}

    
  
}

export default cartReducer