//⊗jsrtPmStInr
import React, {useState} from 'react';

function App() {
    const [value, setValue] = useState('text');
    const [value2, setValue2] = useState('text');
    

    return <div>
        <input value={value} onChange={event => setValue(event.target.value)} />
        <p>text: {value}</p>
        <input value={value2} onChange={event => setValue2(event.target.value)} />
        <p>text: {value2}</p>
    </div>;
}

export default App;
