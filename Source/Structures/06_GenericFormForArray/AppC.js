//⊗jsrtPmScUAF
import React, {useState} from 'react';
import './App.css';

const App = () => {
    const [notes, setNotes] = useState([1,2,3,4,5]);
    const [editNum, setEditNum] = useState(null);

    const result = notes.map((note, index) => {
        return <p key={index} onClick={()=> startEdit(index)}>
            {note}
        </p>;
    })

    const startEdit = (index) => {
      setEditNum(index);
    }

    const editItem = (event) => {
      setNotes([...notes.slice(0, editNum), event.target.value, ...notes.slice(editNum + 1)])
    }

    const createItem = () => {
      if (!editNum) {
          const res = [...notes, ''];
          setNotes(res);
          setEditNum(res.length - 1);
      }
    }
    
    const stopEdit = () => {
      setEditNum(null);
    }

    return (
        <div>
            {result}
            <input value={editNum ? notes[editNum] : ''}
            onChange={editItem}
            onFocus={createItem}
            onBlur={stopEdit}/>
        </div>
    )
}


export default App;