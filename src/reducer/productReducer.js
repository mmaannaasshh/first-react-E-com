const productReducer = (state, action) => {

    switch (action.type) {
        case "SET_LOADING":
            return {
                ...state,
                isloading: true
            }

        case "API_ERROR":
            return {
                ...state,
                isloading: false,
                isError: true
            }
        case "MY_API_DATA":
            const featureData = action.payload.filter((e) => { return e.featured === true; })
            return {
                ...state,
                isloading: false,
                products: action.payload,
                featureProducts: featureData
            }


        default:
            return {
                ...state,
            };
    }





};

export default productReducer;
