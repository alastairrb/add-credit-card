import CountryModel from "../Models/country-model";

export const initialState = {  
  // countries: []  
    countries: [
        new CountryModel ({
            id: 1,
            country: "Scotland"
          }),
          new CountryModel ({
            id: 2,
            country: "Romania"
          }),
          new CountryModel ({
            id: 3,
            country: "Ireland"
          }),
          new CountryModel ({
            id: 4,
            country: "Tonga"
          })
    ]
};

const countryReducer = (state, action) => {
    switch(action.type) {       
        case 'ADD_COUNTRY':            
            return {
                ...state,
                countries: action.payload
        }
        case 'REMOVE_COUNTRY':
            return {
                ...state,
                countries: action.payload 
        }              
        default:
            return;
    }
}

export default countryReducer;