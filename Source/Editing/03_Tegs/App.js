//⊗jsrtPmEdTg
import React, {useState} from 'react';
import './App.css';

function App() {
    const [value, setValue] = useState('text');
    const [isEdit, setIsEdit] = useState(false);

    let elem;
    if (!isEdit) {
        elem = <div>
            <span>{value}</span>
            <button onClick={() => setIsEdit(true)}>edit</button>

        </div>
    } else {
        elem = <div>
            <input value={value} onChange={event => setValue(event.target.value)}/>
            <button onClick={() => setIsEdit(false)}>show</button>
            ;
        </div>
    }
    return <>
        {elem}
    </>
}


export default App;