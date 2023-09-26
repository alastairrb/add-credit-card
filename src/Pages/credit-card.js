import "./credit-card-style.css";

const CreditCard = ({creditCard}) => {
    return (
        <div className="card">
            <h4>{creditCard.name}</h4>
            <h4>{creditCard.number}</h4>
            <h4>{creditCard.date}</h4>
            <h4>{creditCard.cvc}</h4>
            <h4>{creditCard.country}</h4>
        </div>
    )        
} 

export default CreditCard;