//⊗jsrtPmStInr
import React, {useState} from 'react';
import './App.css';

function App() {
    const [value, setValue] = useState(0);
    const [res, setRes] = useState(0);

    function getDiv(res) {
        let pr = 1;
        for (let i = 1; i < (res / 2) + 1; i++) {
            if (res % i === 0) {
                pr *= i;
            }

        }
        return pr;
    }


    return <div>
        <input value={value} onChange={event => setValue(event.target.value)} onBlur={event => setRes(event.target.value)}/><br/>

        <p>{getDiv(res)}</p>
    </div>;

}

export default App;
