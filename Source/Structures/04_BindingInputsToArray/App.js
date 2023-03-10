//⊗jsrtPmScIAB
import React, {useState} from 'react';
import './App.css';

const getAverage = (arr) => {
    let sum = 0;
    for (let elem of arr) {
        sum += Number(elem);
    }
    let average = sum / arr.length
    return average;
}


const App = () => {
    const notes = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const [arr, setArr] = useState(notes);
    
    const changeHandler = (i, event) => {
      setArr([...arr.slice(0, i)], event.target.value, ...arr.slice(i + 1));
    }
    
    const inputs = arr.map((input, i) => {
        return <input key={i} value={input} onChange={event => changeHandler(i, event)}/>;
    });


    return (
        <div>
            {inputs}
            {getAverage(arr)}
        </div>
    )
}


export default App;
