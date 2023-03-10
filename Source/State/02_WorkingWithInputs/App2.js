//⊗jsrtPmStInr
import React, {useState} from 'react';

function App() {
    const [value, setValue] = useState(0);


    return <div>
        <input value={value} onChange={event => setValue(event.target.value)} />
        <p>{value.length}</p>

    </div>;
}

export default App;
