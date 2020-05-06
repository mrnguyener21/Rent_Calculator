import React,{useState} from 'react';
import {Typography, Slider} from '@material-ui/core'
// import {Doughnut} from 'react-chartjs-2';


const Visuals = ({salary,taxinDollars, netIncome, monthlyIncome}) => {
  const [rentBudget, setRentBudget] = useState('');
  const rent = monthlyIncome * (rentBudget/100);
  console.timeLog(rentBudget)
  console.log(rent)
  return (
    <>

    <Typography id="discrete-slider-small-steps" gutterBottom>
      Percentage of Monthly Income Going Towards Rent *Generally recommendation is up to 30%*
    </Typography>
    <Slider
      defaultValue={0}
      // getAriaValueText={valuetext}
      aria-labelledby="discrete-slider-small-steps"
      step={1}
      // marks
      min={-0.00000000}
      max={100}
      valueLabelDisplay="auto"
      onChange={console.log('hi')}
    />

    </>
  )
}
export default Visuals;