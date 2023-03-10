//⊗jsrtPmStInr
import React, {useState} from 'react';

function App() {
    const [value, setValue] = useState(0);
    function getYearBirth(value) {
        let now = new Date();
        return now.getFullYear() - value;
    }


    return <div>
        <input value={value} onChange={event => setValue(event.target.value)} />
        <p>{getYearBirth(value)}</p>

    </div>;
}

export default App;
