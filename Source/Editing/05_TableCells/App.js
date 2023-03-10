//⊗jsrtPmEdTC
import React, {useState} from 'react';
import './App.css';
import {nanoid} from "nanoid";

const id = () => nanoid();

const initNotes = [
    {
        id: id(),
        fields: [
            {name: 'prop1', value: 'value11', isEdit: false},
            {name: 'prop2', value: 'value12', isEdit: false},
            {name: 'prop3', value: 'value13', isEdit: false},
        ]
    },
    {
        id: id(),
        fields: [
            {name: 'prop1', value: 'value21', isEdit: false},
            {name: 'prop2', value: 'value22', isEdit: false},
            {name: 'prop3', value: 'value23', isEdit: false},
        ]
    },
    {
        id: id(),
        fields: [
            {name: 'prop1', value: 'value31', isEdit: false},
            {name: 'prop2', value: 'value32', isEdit: false},
            {name: 'prop3', value: 'value33', isEdit: false},
        ]
    },
];

function App() {
    const [notes, setNotes] = useState(initNotes);

    const rows = notes.map(note => {
        const cells = note.fields.map(field => {
            let elem;

            if (!field.isEdit) {
                elem = <span onClick={() => startEdit(note.id, field.name)}>
                    {field.value}
                </span>
            } else {
                elem = <input value={field.value}
                              onChange={event => changeCell(note.id, field.name, event)}
                              onBlur={() => endEdit(note.id, field.name)}
                />;
            }
            return <td key={field.name}>{elem}</td>;
        })
        return <tr key={note.id}>{cells}</tr>
    });

    function func(id, name, key, value, event) {
        setNotes(notes.map(note => {
            if (note.id === id) {
                const fields = note.fields.map(field => {
                    if (field.name === name) {
                        return {...field, [key]: value}
                    } else {
                        return field;
                    }
                });

                return {id, fields};
            } else {
                return note;
            }
        }));
    }

    function startEdit(id, name, event) {
        func(id, name, "isEdit", true, event);
    }

    function endEdit(id, name, event) {
        func(id, name, "isEdit", false, event);
    }

    function changeCell(id, name, event) {
        func(id, name, "value", event.target.value, event)
    }

    return <div>
        <table>
            <tbody>
            {rows}
            </tbody>
        </table>
    </div>;
}


export default App;