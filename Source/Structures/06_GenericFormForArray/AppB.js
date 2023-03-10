//⊗jsrtPmScUAF
import React, {useState} from 'react';
import './App.css';

const App = () => {
    const [notes, setNotes] = useState([1,2,3,4,5]);
    const [editNum, setEditNum] = useState(null);
    const [value, setValue] = useState('');

    const result = notes.map((note, index) => {
        return <p key={index} onClick={()=> startEdit(index)}>
            {note}
        </p>;
    })

    const startEdit = (index) => {
      setEditNum(index);
      setValue(notes[index]);
    }
    const changeHandler = (event) => {
      setValue(event.target.value);
      if (editNum) {
          setNotes([...notes.slice(0, editNum), event.target.value, ...notes.slice(editNum + 1)]);
      }
    }

    const blurHandler = (event) => {
      if (!editNum) {
          setNotes([...notes, value]);
      } else {
          setEditNum(null);
      }
      setValue('')
    }

    return (
        <div>
            {result}
            <input value={value} onChange={changeHandler} onBlur={blurHandler}/>
        </div>
    )
}


export default App;