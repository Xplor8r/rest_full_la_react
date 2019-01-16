export const addDeliveryFilter = () => {
    return {
        type: 'ADD_DELIVERY_FILTER'
    }
}
  
export const removeDeliveryFilter = () => {
    return {
        type: 'REMOVE_DELIVERY_FILTER'
    }
}

export const addCategoryFilter = () => {
    return {
        type: 'ADD_CATEGORY_FILTER'
    }
}
  
export const removeCategoryFilter = (category) => {
    return {
        type: 'REMOVE_CATEGORY_FILTER',
        category
    }
}

