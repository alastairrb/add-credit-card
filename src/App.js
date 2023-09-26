import Navbar from './Components/navbar';
import './App.css';
import CreditCardList from './Pages/credit-card-list'
import AddCreditCard from './Pages/add-credit-card'
import CountryList from './Pages/country-list'
import { Route, Routes } from 'react-router-dom';
import { CreditCardProvider } from './context -and-reducers/credit-card-context';
import { CountryProvider } from './context -and-reducers/country-context';

function App() {  
  return  (
    <>
      <Navbar />
      <div className='container'>           
        <CountryProvider>
          <CreditCardProvider>
            <Routes>          
                <Route path="/creditcardlist" element={<CreditCardList />} />
                <Route path="/" element={<AddCreditCard />} />
                <Route path="/countries" element={<CountryList />} />
              </Routes>
          </CreditCardProvider>                      
        </CountryProvider>                  
      </div>
    </> 
  )
}

export default App;
