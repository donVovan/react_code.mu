//⊗jsrtPmStRd
import React, {useState} from 'react';
import './App.css';

const App = () => {
    const [value, setValue] = useState(1);
    const handleChange = (event) => {
        setValue(event.target.value);
    }

    return (
        <div>
            <input type="radio" name='radio' value='1' checked={value === '1' ? true : false} onChange={handleChange}/>
            <input type="radio" name='radio' value='2' checked={value === '2' ? true : false} onChange={handleChange}/>
            <input type="radio" name='radio' value='3' checked={value === '3' ? true : false} onChange={handleChange}/>
            <p>
                {value}
            </p>
        </div>

    )
}


export default App;
