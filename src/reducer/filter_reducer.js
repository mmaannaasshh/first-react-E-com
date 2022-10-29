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
            // let userSortValue = document.getElementById('sortingg');
            // let sort_value = userSortValue.options[userSortValue.selectedIndex].value;
            return {
                ...state,
                // shorting_value: sort_value
                shorting_value: action.payload,
            }
        case 'SHORTING_PRODUCT':
            let newSortDate;
            const { filter_products } = state;
            let tempsortProduct = [...filter_products]
            const sortingProducts = (a, b) => {
                if (state.shorting_value === 'lowest') { return a.price - b.price }
                if (state.shorting_value === 'highest') { return b.price - a.price }
                if (state.shorting_value === 'a-z') { return a.name.localeCompare(b.name) }
                if (state.shorting_value === 'z-a') { return b.name.localeCompare(a.name) }
            }
            newSortDate = tempsortProduct.sort(sortingProducts)
            return {
                ...state,
                filter_products: newSortDate
            }
        case 'UPDATE_FILTER_VALUE':
            const { name, value } = action.payload
            return {
                ...state,
                filter: {
                    ...state.filter,
                    [name]: value
                }
            }
            case 'UPDATE_FILTER':
                const { all_products}=state;
                let tempFilterProduct=[...all_products]
                const {text,category,company}=state.filter
                if (text) {
                    tempFilterProduct=tempFilterProduct.filter((e)=>{
                        return e.name.toLowerCase().includes(text)
                    })
                }
                if (category!=="all") {
                    tempFilterProduct=tempFilterProduct.filter((e)=>{
                        return e.category===category;
                    })
                }
                if (company!=="all") {
                    tempFilterProduct=tempFilterProduct.filter((e)=>{
                        return e.company.toLowerCase()===company.toLowerCase()
                    })
                }
                
                return{
                   ...state,
                   filter_products:tempFilterProduct
                }
        default:
            return state
    }


}
export default filterReducer;