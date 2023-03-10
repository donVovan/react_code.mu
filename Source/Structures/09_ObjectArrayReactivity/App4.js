//⊗jsrtPmScOA
import React, {useState} from 'react';
import './App.css';
import {nanoid} from "nanoid";

const newId = nanoid();
const id = 'IWSpfBPSV3SXgRF87uO74';
const id2 = 'JAmjRlfQT8rLTm5tG2m1L';
const id3 = 'JAmjRlfQT8rLTm5tG2m1L';

function App() {

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
    const addElem = () => {
        const newElem = {
            id: '',
            prop1: 'value41',
            prop2: 'value42',
            prop3: 'value43',
        };
      let copy = Object.assign([], notes);
      newElem.id = nanoid();
      copy.push(newElem);
      setNotes(copy);
    }
    
    const result = notes.map(note => {
        return <p key={note.id}>
            <span>{note.id}</span>
            <span>{note.prop1}</span>,
            <span>{note.prop2}</span>,
            <span>{note.prop3}</span>
        </p>;
    });
    
    const editElem = (id) => {
        const data = {
            id: 'IWSpfBPSV3SXgRF87uO74',
            prop1: 'value21 !',
            prop2: 'value22 !',
            prop3: 'value23 !',
        };
      setNotes(notes.map(note => note.id === data.id ? data: note))
    }

const editProperty = () => {
    const id = 'JAmjRlfQT8rLTm5tG2m1L';
    const prop = 'prop2';
setNotes(notes.map(note => {
    if (note.id === id) {
        return {...note, [prop]: prop}
    } else {
        return note;
    }
}))
}    
    
    return (
        <div>
            {result}
            <button onClick={() => remElem(id)}>Удалить</button><br/>
            <button onClick={addElem}>Добавить</button><br/>
            <button onClick={() => editElem(id3)}>Изменить</button><br/>
            <button onClick={()=> editProperty()}>Изменить свойство</button>
        </div>
    )

}


export default App;