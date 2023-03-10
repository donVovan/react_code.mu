//⊗jsrtPmScUAF
import React, {useState} from 'react';
import './App.css';

const App = () => {
    const notes = ['a', 'b', 'c', 'd', 'e'];
    const [arr, setArr] = useState(notes);
    const [editElem, setEditElem] = useState(null);
    const [value, setValue] = useState('');

    const result = arr.map((elem, index) => {
        return <li key={index} onClick={()=> startEdit(index)}>
            {elem}
        </li>;
    })

    const startEdit = (index) => {
        setEditElem(index);
        setValue(arr[index]);
    }
    const changeHandler = (event) => {
        setValue(event.target.value);
        if (editElem) {
            setArr([...arr.slice(0, editElem), event.target.value, ...arr.slice(editElem + 1)]);
        }
    }

    const blurHandler = (event) => {
        if (!editElem) {
            setArr([...arr, value]);
        } else {
            setEditElem(null);
        }
        setValue('')
    }

    return (
        <div>
            <ul>
                {result}
            </ul>
            <input value={value} onChange={changeHandler} onBlur={blurHandler}/>
        </div>
    )
}


export default App;