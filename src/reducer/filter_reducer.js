const filterReducer = (state, action) => {

    switch (action.type) {
        case 'LOAD_FILTER_PRODUCTS':
            return {
                ...state,
                filter_products: [...action.payload],
                all_products: [...action.payload]

            }
        case 'SET_GRIDVIEW':
            return {
                ...state,
                grid_view: true
            }
        case 'SET_LISTVIEW':
            return {
                ...state,
                grid_view: false
            }
        case 'SHORTING':
            let userSortValue = document.getElementById('sortingg');
            let sort_value = userSortValue.options[userSortValue.selectedIndex].value;
            console.log(sort_value);
            return {
                ...state,
                shorting_value: sort_value
            }
        case 'SHORTING_PRODUCT':
            let newSortDate;
            let tempsortProduct = [...action.payload]

            if (state.shorting_value === 'lowest') {
                newSortDate=tempsortProduct.sort((a,b)=>{
                    return a.price-b.price
                })
            }
            if (state.shorting_value === 'highest') {
                newSortDate=tempsortProduct.sort((a,b)=>{
                    return b.price-a.price
                })
            }





            if (state.shorting_value === 'a-z') {
                newSortDate = tempsortProduct.sort((a, b) => {
                    return a.name.localeCompare(b.name)
                })
            }
            if (state.shorting_value === 'z-a') {
                newSortDate = tempsortProduct.sort((a, b) => {
                    return b.name.localeCompare(a.name)
                })
            }

            return {
                ...state,
                filter_products: newSortDate
            }

        default:
            return state
    }


}
export default filterReducer;