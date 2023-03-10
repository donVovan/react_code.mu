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
        <option value='1'>от 0 до 12 лет</option>
        <option value='2'>от 13 до 17 лет</option>
        <option value='3'>от 18 до 25 лет</option>
        <option value='4'>старше 25 лет</option>
    </select>
    <p>
        {value === '1'  && 'спроси разрешения у мамы'}
        {value === '2' && 'учись хорошо'}
        {value === '3' && 'не поступил? иди в армию'}
        {value === '4' && 'тебе открыты все дороги (на самом деле нет)'}
    </p>
</div>
}


export default App;
