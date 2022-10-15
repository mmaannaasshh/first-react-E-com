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
            const featureData = action.payload.filter((curElem) => {
                return curElem.featured === true;
                });
            return {
                ...state,
                isloading: false,
                products: action.payload,
                featureProducts: featureData
            }
        case "SET_SINGLE_LOADING":
            return {
                ...state,
                isSingleLoading: true
            }
        case "SET_SINGLE_PRODUCT":
            return {
                ...state,
                isSingleLoading: false,
                singleProoduct: action.payload
            }
        case "SET_SINGLE_ERROR":
            return {
                ...state,
                isSingleLoading: false,
                isError: true
            }


        default:
            return {
                ...state,
            };
    }





};

export default productReducer;
