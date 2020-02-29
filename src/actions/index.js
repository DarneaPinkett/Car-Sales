export const ADD_ITEM = 'ADD';
export const REMOVE_ITEM = 'REMOVE';
export const UPDATE_TOTAL = 'UPDATE_TOTAL';


export const addFeature = (item) => {
    return {
        type: ADD,
        payload: item
    }
}

export const removeFeature = (item) => {
    return {
        type: REMOVE,
        payload: item
    }
}

export const updateTotal = (item) => {
    return {
        type: UPDATE_TOTAL,
        payload: item
    }
}