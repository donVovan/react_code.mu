//⊗jsrtPmScAr
import React, {useState} from 'react';
import './App.css';

const App = () => {
    const [arr, setArr] = useState([1, 2, 3, 4, 5]);
let ind = 3;

    const handleChange = () => {
        setArr([...arr.slice(0, ind), 888, ...arr.slice(ind + 1)]);
    }
    console.log(arr)

    return (
        <div>
            <button onClick={handleChange}>тыц</button>
        </div>
    )
}


export default App;
