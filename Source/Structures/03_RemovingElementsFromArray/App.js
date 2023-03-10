//⊗jsrtPmScRE
import React, {useState} from 'react';
import './App.css';

const App = () => {
    const notes = ['a', 'b', 'c', 'd', 'e'];
    const [arr, setArr] = useState(notes);
    const [value, setValue] = useState('');

    const res = arr.map((item, i) => {
        return <li key={i}>{item} <button onClick={()=> remItem(i)}>удалить</button></li>;
    });
    const remItem = (i) => {
      setArr([...arr.slice(0,i), ...arr.slice(i + 1)]);
    }
    const handleChange = (event) => {
      setValue(event.target.value);
    }

    const addItem = () => {
      setArr([...arr, value]);
      setValue('');

    }
    
    return (
        <div>
       <ul>
           {res}
       </ul>
            <input value={ value } onChange={handleChange} onBlur={addItem}/>
        </div>
    )
}


export default App;
