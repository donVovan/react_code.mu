//⊗jsrtPmScOA
import React, {useState} from 'react';
import './App.css';


function App() {
    const id = 'IWSpfBPSV3SXgRF87uO74';
    const initNotes = [
        {
            id: 'GYi9G_uC4gBF1e2SixDvu',
            prop1: 'value11',
            prop2: 'value12',
            prop3: 'value13',
        },
        {
            id: id,
            prop1: 'value21',
            prop2: 'value22',
            prop3: 'value23',
        },
        {
            id: 'JAmjRlfQT8rLTm5tG2m1L',
            prop1: 'value31',
            prop2: 'value32',
            prop3: 'value33',
        },
    ];
    const [notes, setNotes] = useState(initNotes);
    const remElem = (id) => {
        setNotes(notes.filter(note => {
            if (note.id !== id) {
                return note;
            }
        }))
    }

    return (
        <div>
            <button onClick={() => remElem(id)}>Удалить</button>
        </div>
    )

}


export default App;