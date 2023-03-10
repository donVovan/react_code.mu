//⊗jsrtPmScAr
import React, {useState} from 'react';
import './App.css';

const App = () => {
    const [arr, setArr] = useState([1,2,3,4,5])
const handleChange = () => {
        setArr([...arr, 6])
}
    console.log(arr)

    return (
        <div>
            <button onClick={handleChange}>тыц</button>
        </div>
    )
}


export default App;
