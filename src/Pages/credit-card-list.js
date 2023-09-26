import { useContext } from "react";
import { CreditCardContext } from "../context -and-reducers/credit-card-context";
import CreditCard from "./credit-card";

export default function CreditCardList() {
    const { creditCards } = useContext(CreditCardContext);

    return (
        <div>
            <h3>Credit Cards Entered</h3>
            <div>
                { creditCards.map(card => <CreditCard key={card.id} creditCard={card}/>) }            
            </div>            
        </div>
    )
}