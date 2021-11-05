export const GET_FAVORITES = 'GET_FAVORITES';
export const ADD_TO_FAVORITES = 'ADD_TO_FAVORITES';
export const DELETE_FROM_FAVORITES = 'DELETE_FROM_FAVORITES';

// getting the favorite states
export function GetFavoriteSates() {
    const action = {
        type: GET_FAVORITES
    }
    return action;
}

// Add data to favorite list
export function AddToFavoriteSates(item) {
    const action = {
        type: ADD_TO_FAVORITES,
        payload: item
    }
    return action;
}

// Delete items from favorite list
export function DeleteFromFavoriteSates(item) {
    const action = {
        type: DELETE_FROM_FAVORITES,
        payload: item
    }
    return action;
}