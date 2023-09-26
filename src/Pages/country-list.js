import { useContext, useState } from "react";
import { CountryContext } from "../context -and-reducers/country-context";
import CountryModel from '../Models/country-model';

export default function CountryList() {
    const { countries, addCountry, removeCountry } = useContext(CountryContext);    

    const [country, setCountry] = useState('')

    const handleAddCountry = () => {               
        var entity = new CountryModel ({
            id: Math.random(),
            country: country
          });

          addCountry(entity);  
          
          setCountry("");
    }

    const handleRemoveCountry = (id) => {        
        removeCountry(id);
    }

    return (
        <>
            <h3>List of banned countries</h3>
            {countries.map(function(data) {
            return (                                
                <div>
                  Country:  {data.country}
                  <button onClick={() => handleRemoveCountry(data.id)}>Remove</button>            
                </div>                                                      
                )
            })}
           <div>                
                <input value={country} onChange={(e) => setCountry(e.target.value)} type="text"></input>                
            </div>
            <button onClick={handleAddCountry}>Add</button>            
        </>    
      ) 
}
