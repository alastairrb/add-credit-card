import { createContext, useReducer } from "react";
import reducer, {initialState} from "./country-reducer";

export const CountryContext = createContext();

export const CountryProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState)    

    const addCountry = (country) => {
        const updateCountries = state.countries;
        updateCountries.push(country);

        dispatch({
            type: 'ADD_COUNTRY',
            payload: updateCountries
        })
    }

    const removeCountry = (countryId) => {
        const removeCountries = state.countries.filter((currentCountry) => currentCountry.id !== countryId);        

        dispatch({
            type: 'REMOVE_COUNTRY',
            payload: removeCountries
        })
    }

    const value = {
        countries: state.countries,
        addCountry,
        removeCountry
    };  

    return <CountryContext.Provider value={value}>
        {children}
    </CountryContext.Provider>
}