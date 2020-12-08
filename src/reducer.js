export const initialState = {
    basket: [],
    user: null,

}


// selector
export const getBasketTotal = (basket) => {
    basket?.reduce((amount, item) => item.price + amount, 0)
}

export const reducer = (state = initialState, action) => {
    console.log(action)
    switch (action.type) {
        case 'ADD_TO_BASKET':
            // const subtotal=state.basket[action.id]

            return {
                ...state,
                basket: [...state.basket, action.item],
                // subtotal:
            }
        case 'REMOVE_FROM_BASKET':
            // const updatedBasket = state.basket.filter(item => item.id !== action.id)

            const productIndex = state.basket.findIndex(basketItem => basketItem.id === action.id)
            const newBasket = [...state.basket]

            if (productIndex >= 0) {
                // newBasket.splice(productIndex, 1)
                console.log("item znaleziony")
            } else {
                console.wart(`Nie mogę usunąć produktu o id ${action.id} bo nie ma go w koszyku.`)
            }

            delete newBasket[productIndex]

            return {
                ...state,
                basket: newBasket
            }
        case 'SET_USER':
            return {
                ...state,
                user: action.user
            }
        default:
            return state
    }
}