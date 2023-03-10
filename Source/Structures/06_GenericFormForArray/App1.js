//⊗jsrtPmScUAF
import React, {useState} from 'react';
import './App.css';

const App = () => {
    const notes = ['a', 'b', 'c', 'd', 'e'];
    const [arr, setArr] = useState(notes);
    const [editElem, setEditElem] = useState(null);
    const [value, setValue] = useState('');

    const result = arr.map((elem, index) => {
        return <li key={index} onClick={()=>setEditElem(index)}>
            {elem}
        </li>;
    })
    const changeItem = (event) => {
        setArr([...arr.slice(0, editElem), event.target.value, ...arr.slice(editElem + 1)])
    }
    const stopEdit = (event) => {
        setEditElem(null);
    }
    const changeValue = (event) => {
        setValue(event.target.value);
    }
    const addItem = (event) => {
        setArr([...arr, value]);
    }

    let input;
    if (editElem) {
        input = <input
            value={arr[editElem]}
            onChange={changeItem}
            onBlur={stopEdit}
        />
    } else {
        input = <input
            value={value}
            onChange={changeValue}
            onBlur={addItem}
        />
    }

    return (
        <div>
            <ul>
                {result}
            </ul>
            {input}
        </div>
    )
}


export default App;