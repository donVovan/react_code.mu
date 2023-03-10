//⊗jsrtPmStInr
import React, {useState} from 'react';

function App() {
    const [value1, setValue1] = useState(0);
    const [value2, setValue2] = useState(0);
    const [res1, setRes1] = useState('');
    const [res2, setRes2] = useState('');


    return <div>
        <input value={value1} onChange={event => setValue1(event.target.value)}/><br/>
        <input value={value2} onChange={event => setValue2(event.target.value)}/><br/>
        <button onClick={()=>setRes1(Number(value1) + Number(value2))}>+</button>
        <button onClick={()=>setRes2(value1 * value2)}>*</button><br/>
        <p> result: {res1} {res2}</p>

    </div>;
}

export default App;
