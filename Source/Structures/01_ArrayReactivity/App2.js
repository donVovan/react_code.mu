//⊗jsrtPmScAr
import React, {useState} from 'react';
import './App.css';

const App = () => {
    const [arr, setArr] = useState([1, 2, 3, 4, 5]);
let ind = 3;

    const handleChange = () => {
        const copy = Object.assign([], arr);
        copy.splice(ind,1);
        setArr(copy);
    }
    console.log(arr)

    return (
        <div>
            <button onClick={handleChange}>тыц</button>
        </div>
    )
}


export default App;
