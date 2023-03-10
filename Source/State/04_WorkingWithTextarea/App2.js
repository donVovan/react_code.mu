//⊗jsrtPmStTx
import React, {useState} from 'react';
import './App.css';

function App() {
    const [value, setValue] = useState('');
    const [res, setRes] = useState('');

    function handleChange(event) {
        setValue(event.target.value);
        setRes(getSum(event.target.value));
    }
    function getSum(num) {
        let sum = 0;
        for (let i = 0; i < num.length; i++) {
            sum += Number(num[i]);
        }
        return sum
    }


    return <div>
        <textarea value={value} onChange={handleChange} />
        <p>{res}</p>
    </div>;
}

export default App;
