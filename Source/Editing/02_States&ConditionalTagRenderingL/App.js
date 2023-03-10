//⊗jsrtPmScUOAF
import React, {useState} from 'react';
import './App.css';
import {nanoid} from "nanoid";

const id = () => {
    return nanoid();
}

const initProds = [
    {
        id: id(),
        name: 'prod1',
        cost: 'cost1',
        desc: 'long description 1',
        comm: 'my super comment 1',
        showDesc: false,
        showComm: false,
    },
    {
        id: id(),
        name: 'prod2',
        cost: 'cost2',
        desc: 'long description 2',
        comm: 'my super comment 2',
        showDesc: false,
        showComm: false,
    },
    {
        id: id(),
        name: 'prod3',
        cost: 'cost3',
        desc: 'long description 3',
        comm: 'my super comment 3',
        showDesc: false,
        showComm: false,
    },
];

function App() {
    const [notes, setNotes] = useState(initProds);
const result = notes.map(note=>{
    let desc, comm;
    if (note.showDesc){
        desc = <i>{note.desc}</i>
    }
    if (note.showComm){
        comm = <i>{note.comm}</i>
    }
    
    function showDesc(id) {
        setNotes(notes.map(note => {
            if (note.id === id){
                return{...note, showDesc: !note.showDesc}
            } else {
                return note;
            }
        }));
    }
    function showComm(id) {
        setNotes(notes.map(note => {
            if (note.id === id){
                return{...note, showComm: !note.showComm}
            } else {
                return note;
            }
        }));
    }
    
    return <li key={note.id}>
        {note.name}: {note.cost}
        <button onClick={()=> showDesc(note.id)}>Описание</button>
        {desc}
        <button onClick={()=> showComm(note.id)}>Отзывы</button>
        {comm}
    </li>
})
    return (<ul>
        {result}
    </ul>);
}


export default App;