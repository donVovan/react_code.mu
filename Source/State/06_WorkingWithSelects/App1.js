//⊗jsrtPmStSl
import React, {useState} from 'react';
import './App.css';

const App = () => {
const [value, setValue] = useState('');
const handleChange = (event) => {
  setValue(event.target.value);
}

return <div>
    <select value={value} onChange={handleChange}>
        <option>Брест</option>
        <option>Витебск</option>
        <option>Гомель</option>
        <option>Гродно</option>
        <option>Минск</option>
        <option>Могилев</option>
    </select>
    <p>Любимый город: {value}</p>
</div>
}


export default App;
