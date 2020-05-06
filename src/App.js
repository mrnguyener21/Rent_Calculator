import React,{useState} from 'react';
import Visuals from './Component/Visuals'
const App = () => {
  const [salary, setSalary] = useState('');
  const [taxRate, setTaxRate] = useState('')

  const taxPercentage = taxRate/100;
  const taxInDollars = salary * (taxPercentage)
  const netIncome = salary * (1-(taxPercentage))
  const monthlyIncome = parseInt((netIncome/12).toFixed(2));

  
  return (
    <div>
      <input type='text' placeholder="Enter Earnings Per Year" value={salary} onChange={(e) => setSalary(e.target.value)}/>
      <input type='text' placeholder='Enter Tax'value={taxRate} onChange={(e) => setTaxRate(e.target.value)} />%
      <button onClick={()=> console.log(netIncome, taxInDollars, monthlyIncome)}>button</button>

      <Visuals salary={salary} taxInDollars={taxInDollars} netIncome={netIncome} monthlyIncome={monthlyIncome}/>
    </div>
  )
}
export default App;