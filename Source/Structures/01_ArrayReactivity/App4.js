//⊗jsrtPmScAr
import React, {useState} from 'react';
import './App.css';

const App = () => {
    const [arr, setArr] = useState([1, 2, 3, 4, 5]);
let ind = 3;

    const handleChange = () => {
        let rev = Object.assign([], arr);
        setArr(rev.reverse());
    }

    return (
        <div>
            <button onClick={handleChange}>тыц</button>
        </div>
    )
}


export default App;
