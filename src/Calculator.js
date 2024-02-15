import React from 'react';
import { useState } from 'react';
import './Calculator.css';

function Calculator() {
  const [bill, setBill] = useState('');
  const [tip, setTip] = useState('');
  const [people, setPeople] = useState(1);

  function calculateTip() {
    const billFloat = parseFloat(bill);
    const tipFloat = parseFloat(tip) / 100;
    const peopleFloat = parseFloat(people);
    return ((billFloat * tipFloat) / peopleFloat).toFixed(2);
  }

  function calculateTotal() {
    const billFloat = parseFloat(bill);
    const tipFloat = parseFloat(tip) / 100;
    const tipAmount = billFloat * tipFloat;
    const peopleFloat = parseFloat(people);
    const total = ((billFloat + tipAmount) / peopleFloat).toFixed(2);
    if (isNaN(total)) {
      return (billFloat / peopleFloat).toFixed(2);
    }
    return total;
  }

  const tipMarkup = `Tip $${
    isNaN(calculateTip()) ? '0.00' : calculateTip()
  }`;

  const totalMarkup = `Total $${
    isNaN(calculateTotal()) ? '0.00' : calculateTotal()
  }`;

  return (
    <div className="Calculator">
      <div className="Calculator_Input">
        <form>
          <fieldset>
            <legend>Bill</legend>
            <label htmlFor="bill">Bill: </label>
            <input
              name="bill"
              type="number"
              placeholder="0.00"
              min={0}
              value={bill}
              onChange={(e) => setBill(e.target.value)}
            />
          </fieldset>

          <fieldset>
            <legend>Tip</legend>
            <label htmlFor="tip">Tip % </label>
            <input
              name="tip"
              type="number"
              placeholder="15%"
              min={0}
              value={`${tip}`}
              onChange={(e) => setTip(e.target.value)}
            />
          </fieldset>

          <fieldset>
            <legend>Number of People</legend>
            <label htmlFor="people"> Number of people </label>
            <input
              name="people"
              type="number"
              placeholder="1"
              min={1}
              max={15}
              value={people}
              onChange={(e) => setPeople(e.target.value)}
            />
          </fieldset>
        </form>
      </div>

      <div className="Calculator_Output">
        <h2>{tipMarkup}</h2>
        {people > 1 && <p> per person</p>}
        <h2>{totalMarkup}</h2>
        {people > 1 && <p> per person</p>}
      </div>
    </div>
  );
}

export default Calculator;
