const Filter = (state = {categoryFilter: [], deliveryFilter: false}, action) => {
    switch (action.type) {
      case 'ADD_CATEGORY_FILTER':
        return Object.assign({}, state, { categoryFilter: [...state.categoryFilter, action.category], deliveryFilter: state.deliveryFilter})
        // return {...state, categoryFilter: [...state.categoryFilter, action.category], deliveryFilter: state.deliveryFilter}
      case 'REMOVE_CATEGORY_FILTER':
        const newCategoryFilter = state.categoryFilter.filter((cat) => cat !== action.category)
        return { categoryFilter: newCategoryFilter, deliveryFilter: state.deliveryFilter}

      case 'ADD_DELIVERY_FILTER':
        return { categoryFilter: [...state.categoryFilter], deliveryFilter: true}
  
      case 'REMOVE_DELIVERY_FILTER':
        return { categoryFilter: [...state.categoryFilter], deliveryFilter: false}
  
      default:
        return state
    }
  }
  
  export default Filter