//⊗jsrtPmStSl
import React, {useState} from 'react';
import './App.css';

const App = () => {
    const cities = ['Брест', 'Витебск', 'Гомель', 'Гродно', 'Минск', 'Могилев']
    const [value, setValue] = useState('');
    const options = cities.map((city, i) => {
        return <option key={i}>{city}</option>;
    })
    const handleChange = (event) => {
        setValue(event.target.value);
    }

    return <div>
        <select value={value} onChange={handleChange}>
            {options}
        </select>
        <p>Любимый город: {value}</p>
</div>
}


export default App;
