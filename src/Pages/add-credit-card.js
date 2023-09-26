import { useContext, useState } from "react"
import { CreditCardContext } from "../context -and-reducers/credit-card-context"
import { CountryContext } from "../context -and-reducers/country-context"
import validator from "validator";
import "./add-credit-card-style.css"

export default function AddCreditCard() {
    const [name, setName] = useState('')
    const [number, setNumber] = useState('')
    const [date, setDate] = useState('')
    const [cvc, setCvc] = useState('')
    const [country, setCountry] = useState('')
    let [message, setMessage] = useState("");
 
    const { creditCards, addCreditCard } = useContext(CreditCardContext);
    const { countries } = useContext(CountryContext);

    const handleSaveCreditCardDetails = () => {                               
        if(isCardValid()) {
            const creditCard = {id: Math.random(), name, number, date, cvc, country }        
            addCreditCard(creditCard);

            setName("");
            setNumber("");
            setDate("");
            setCvc("");
            setCountry("");
        };                    
    };

    const isCardValid = () => {
        if(checkIfCountryBanned()) {
            alert("This country is banned.");
            document.getElementById("country").focus();
            return false;
        };

        if(checkIfExist()) {
            alert("This credit card exists");            
            return false;
        };

        return true;
    };

    const checkIfCountryBanned = () => {
        var banned = countries.filter((banned) => {
            return banned.country === country;
        });  
        
        if(banned.length > 0) {
            return true;
        }

        return false;  
    };

    const checkIfExist = () => {
        var exists = creditCards.filter((card) => {
            return card.number === number;
        });

        if(exists.length > 0) {
            return true;
        }

        return false;        
    };

    const validateCreditCard = () => {        
      if (validator.isCreditCard(number)) {
         setMessage("is a valid credit card number");
      } else {
         setMessage("is not a valid credit card number");
      } 
    };
   
    return (
        <>
        <div class="container-credit-card">
        <h1>Add Credit Card</h1>            
            <div class="row">
                <div class="col-25">
                    <label>Name on credit card</label>
                </div>
                <div class="col-75">
                    <input value={name} onChange={(e) => setName(e.target.value)} className="input-credit-card" type="text"></input>    
                </div>                                
            </div>
            <div class="row">
                <div class="col-25">
                    <label>Credit Card Number</label>
                </div>
                <div class="col-75">
                    <h4>
                        Visa cards should start with the 4, and the length should be 13 or 16.
                    </h4>
                    <h4>
                        The master card should start with 51 through 55, and the length should be 16 digits.
                    </h4>
                    <h4>
                        American Express card should start with 34 or 37, and the length should be 15. 
                    </h4>                                                                   
                    <input value={number} onBlur={ validateCreditCard } onChange={(e) => setNumber(e.target.value)} className="input-credit-card" type="number"></input>  
                    <p>
                    {" "}
                    {number} {message}
         </p>
                </div>                                
            </div>
            <div class="row">
                <div class="col-25">
                    <label>Expiry Date</label>        
                </div>
                <div class="col-75">
                    <input value={date} onChange={(e) => setDate(e.target.value)} className="input-credit-card" type="text"></input>    
                </div>                                
            </div>
            <div class="row">
                <div class="col-25">
                    <label>CVC number</label>    
                </div>
                <div class="col-75">
                    <input value={cvc} onChange={(e) => setCvc(e.target.value)} className="input-credit-card" type="text"></input>    
                </div>                                
            </div>
            <div class="row">
                <div class="col-25">
                    <label>Country</label>    
                </div>
                <div class="col-75">
                    <input value={country} onChange={(e) => setCountry(e.target.value)} className="input-credit-card" type="text" id="country"></input>    
                </div>                                
            </div>            
            <div class="row">                
                <button onClick={handleSaveCreditCardDetails} type="submit">Save</button>
            </div>                         
        </div>
    </>
    )                         
}