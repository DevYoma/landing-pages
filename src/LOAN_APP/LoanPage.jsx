import React, { useState } from 'react'
import './LoanPage.css';

const LoanPage = () => {

   const [principal, setPrincipal] = useState(0)
   const [rate, setRate] = useState(0)
   const [duration, setDuration] = useState(0)
   const [compoundedPeriod, setCompoundedPeriod] = useState(0)

   const [result, setResult] = useState("")
   const [showResult, setShowResult] = useState(false)
   const [disabled, setDisabled] = useState(false)

   const handleClick = (e) => {
       e.preventDefault()

    const compoundInterest = (principal, duration, rate, compoundedPeriod) => {
        if(principal == "" || duration == "" || rate == "" || compoundedPeriod == ""){
            alert("No Invalid response")
            return
        }
        if(rate > 1 || rate == 0 ){
            alert("Rate can't be more than 1 or Equal to Zero")
            return
        }
        const amount = principal * (Math.pow((1 + (rate / compoundedPeriod)), (compoundedPeriod * duration)));
        setResult(amount)
        setShowResult(true)
        // const interest = amount - principal;
        return amount;
     };
     console.log(compoundInterest(principal, duration, rate, compoundedPeriod));
    
   }

   const handleClearForm = (e) => {
        e.preventDefault()
   }

  return (
    <form className='loanPage__container'>
        <div className="loanPage__containerBackground">
            <div></div>
            <div></div>
        </div>

        <div className="loanPage__form">
            <div className='loanPage__formHeader'>
                <p>Welcome 🚀😃</p>
                <h3>Compound Intrest App</h3>
            </div>
            <label htmlFor="">Principal</label>
            <input 
                placeholder='Principal'
                type="number" 
                // value={principal}
                onChange={(e) => setPrincipal(e.target.value)}
            />

            <label htmlFor="">Rate(%)</label>
            <input 
                placeholder='Rate'
                type="number" 
                // value={rate}
                min={0.01}
                max={1}
                step={0.02}
                onChange={(e) => setRate(e.target.value)}
            />

            <label htmlFor="">Time</label>
            <input 
                placeholder='Duration in years'
                type="number" 
                // value={duration}
                onChange={(e) => setDuration(e.target.value)}
            />

            <label htmlFor="">Compounded Period</label>
            <input 
                placeholder='Compounded Periods'
                type="number" 
                // value={compoundedPeriod}
                onChange={(e) => setCompoundedPeriod(e.target.value)}
            /> <br />

            <button onClick={handleClick} >
                Generate Compound Intrest
            </button>

            {showResult && (<p className='loanPage__result'>The compounded interest over {compoundedPeriod} is <span>₦{result}</span></p>)}

            <button type='submit' onClick={handleClearForm} className='loanPage__clearButton'>Clear Form</button>

        </div>
    </form>
  )
}

export default LoanPage


// TODO

// MAIN
// 1. Add FORM conditions to check if the certain conditions are true 

// 1. make the button disabled when the user is seeing result
// 2. add a help icon linked to a react toastify component for clarity and usage of the app