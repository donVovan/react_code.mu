//⊗jsrtPmStInr
import React, {useState} from 'react';

function App() {
    const [value, setValue] = useState(0);
    function getCelsius(value) {
        return (value - 32) / 1.8;
    }


    return <div>
        <input value={value} onChange={event => setValue(event.target.value)} />
        <p>{getCelsius(value)}</p>

    </div>;
}

export default App;
