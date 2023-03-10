//⊗jsrtPmStInr
import React, {useState} from 'react';

function App() {
    const [value, setValue] = useState(0);
    const [res, setRes] = useState(0);
    
    function getSum(res) {
        let sum = 0;
        for (let i = 0; i < res.length; i++) {
            sum += Number(res[i]);
        }
        return sum;
    }


    return <div>
        <input value={value} onChange={event => setValue(event.target.value)} onBlur={event => setRes(event.target.value)}/><br/>

        <p>{getSum(res)}</p>
    </div>;

}

export default App;
