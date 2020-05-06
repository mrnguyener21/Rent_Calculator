import React,{useState} from 'react';
import Visuals from './Component/Visuals'
const App = () => {
  const [salary, setSalary] = useState('');
  const [tax, settax] = useState('')

  const taxPercentage = tax/100;
  const netIncome = salary * (1-(taxPercentage))
  const monthlyIncome = parseInt((netIncome/12).toFixed(2));
  const monthlyTax = (salary * taxPercentage)/12

  return (
    <div>
      <input type='text' placeholder="Enter Earnings Per Year" value={salary} onChange={(e) => setSalary(e.target.value)}/>
      <input type='text' placeholder='Enter Tax'value={tax} onChange={(e) => settax(e.target.value)} />%
      <Visuals monthlyIncome={monthlyIncome} monthlyTax={monthlyTax}/>
    </div>
  )
}
export default App;