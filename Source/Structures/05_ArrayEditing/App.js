//⊗jsrtPmScUAF
import React, {useState} from 'react';
import './App.css';

const App = () => {
    const [notes, setNotes] = useState([1,2,3,4,5]);
    const [editNum, setEditNum] = useState(null);
    const [value, setValue] = useState('');

    const result = notes.map((note, index) => {
        return <p key={index} onClick={()=>setEditNum(index)}>
            {note}
        </p>;
    })
    const changeItem = (event) => {
      setNotes([...notes.slice(0, editNum), event.target.value, ...notes.slice(editNum + 1)])
    }

    const changeValue = (event) => {
      setValue(event.target.value);
    }

    return (
        <div>

        </div>
    )
}


export default App;
