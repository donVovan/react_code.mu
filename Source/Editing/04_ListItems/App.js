//⊗jsrtPmEdLI
import React, {useState} from 'react';
import './App.css';

const initNotes = [
    {text: 'Запись 1', isEdit: false},
    {text: 'Запись 2', isEdit: false},
    {text: 'Запись 3', isEdit: false},
];

function App() {
  const [notes, setNotes] = useState(initNotes);

  const result = notes.map((note, index)=> {
      let elem;
      if (!note.isEdit){
          elem = <><span>{note.text}</span><button onClick={()=> startEdit(index)}>Редактировать</button></>
      } else {
          elem = <><input
              value={note.text}
              onChange={event => changeNote(index, event)}
          /><button onClick={()=> endEdit(index)}>сохранить</button></>
      }
      return <li key={index}>{elem}</li>;
  })
    
    function startEdit(index) {
        const copy = Object.assign([], notes);
        copy[index].isEdit = true;
        setNotes(copy);
    }
    function changeNote(index, event) {
        const copy = Object.assign([], notes);
        copy[index].text = event.target.value;
        setNotes(copy);
    }
    function endEdit(index) {
        const copy = Object.assign([], notes);
        copy[index].isEdit = false;
        setNotes(copy);
    }

    return <ul>
        {result}
    </ul>
}


export default App;