//⊗jsrtPmStInr
import React, {useState} from 'react';

function App() {
    const [value1, setValue1] = useState(getDefaultDate);
    const [value2, setValue2] = useState(getDefaultDate);
    const [result, setResult] = useState(0);

    function getDefaultDate() {
        let now = new Date;
        let month = now.getMonth() + 1;
        if (month < 10) {
            month = '0' + month;
        }
        return now.getFullYear() + '-' + month + '-' + now.getDate();
    }

    function handleClick() {
        let dateVal1 = new Date(value1.split('-'));
        let dateVal2 = new Date(value2.split('-'));
        setResult(Math.floor((dateVal1 - dateVal2) / (1000 * 60 * 60 * 24)));
    }


    return <div>
        <input value={value1} onChange={event => setValue1(event.target.value)}/><br/>
        <input value={value2} onChange={event => setValue2(event.target.value)}/><br/>
        <button onClick={handleClick}>btn</button>
        <br/>
        <p>{result}</p>

    </div>;

}

export default App;
