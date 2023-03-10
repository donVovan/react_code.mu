//⊗jsrtPmScUAF
import React, {useState} from 'react';
import './App.css';

const App = () => {
    const notes = ['a', 'b', 'c', 'd', 'e'];
    const [arr, setArr] = useState(notes);
    const [editElem, setEditElem] = useState(null);

    const result = arr.map((elem, index) => {
        return <li key={index} onClick={() => startEdit(index)}>
            {elem}
        </li>;
    })

    const startEdit = (index) => {
        setEditElem(index);
    }

    const editItem = (event) => {
        setArr([...arr.slice(0, editElem), event.target.value, ...arr.slice(editElem + 1)])
    }

    const createItem = () => {
        if (!editElem) {
            const res = [...arr, ''];
            setArr(res);
            setEditElem(res.length - 1);
        }
    }

    const stopEdit = () => {
        setEditElem(null);
    }

    return (
        <div>
            <ul>
                {result}
            </ul>

            <input value={editElem ? notes[editElem] : ''}
                   onChange={editItem}
                   onFocus={createItem}
                   onBlur={stopEdit}/>
        </div>
    )
}


export default App;