export const initialState = {    
    creditCards: []
}

const CreditCardReducer = (state, action) => {
    switch(action.type) {
        case 'ADD_CREDITCARD':                       
            return {
                ...state,
                creditCards: action.payload
            };
        default:
            return;
    }
}

export default CreditCardReducer;