import { createContext, useReducer } from "react";
import reducer, { initialState } from "./credit-card-reducer"

export const CreditCardContext = createContext();

export const CreditCardProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState)    

    const addCreditCard = (creditCard) => {
        const updatedCreditCardList = state.creditCards;
        updatedCreditCardList.push(creditCard);

        dispatch({
            type: 'ADD_CREDITCARD',
            payload: updatedCreditCardList
        })
    };

    const value = {
        creditCards: state.creditCards,
        addCreditCard
    };  

    return <CreditCardContext.Provider value={value}>
        {children}
    </CreditCardContext.Provider>
}