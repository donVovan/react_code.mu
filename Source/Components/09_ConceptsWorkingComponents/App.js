//⊗jsrtPmCpRCC
import React, { useState } from "react";
import "./App.css";

function App() {
    const [notes, setNotes] = useState([1, 2, 3, 4, 5]);
    const [editIndex, setEditIndex] = useState(null);

    function startEdit(index) {
        setEditIndex(index);
    }

    function changeItem(event) {
        const newNotes = [...notes];
        newNotes[editIndex] = event.target.value;
        setNotes(newNotes);
    }

    const result = notes.map((note, index) => (
        <p key={index} onClick={() => startEdit(index)}>
            {note}
        </p>
    ));

    return (
        <div>
            {result}
            {editIndex !== null && (
                <input
                    value={notes[editIndex]}
                    onChange={changeItem}
                    onBlur={() => setEditIndex(null)}
                />
            )}
        </div>
    );
}

export default App;