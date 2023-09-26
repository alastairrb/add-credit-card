/**
 * Represents the model for a country
 */
class CountryModel {

    id: string;
    country: string;   
  
    constructor({ id, country }: CountryModel | Object) {
      Object.assign(this, {
        id: id,
        country: country,        
      })
    }
  }
  
  export default CountryModel;