import React, {useState} from "react";

function Notepad() {
    const [notes, setNotes] = useState([]);
    const [currentNote, setCurrentNote] = useState('');
    const [search, setSearch] = useState('');

    const handleChange = (event) => {
      setCurrentNote(event.target.value);
    }

    const handleAddNote = () => {
      if (!currentNote){
          return;
      }
      setNotes([...notes, {id: Date.now(), text: currentNote}]);
      setCurrentNote('');
    }
    
    const handleDeleteNote = (id) => {
      setNotes(notes.filter(note => note.id !== id));
    };
    
    const handleEditNote = (id) => {
      const noteToEdit = notes.find(note => note.id === id);
      setCurrentNote(noteToEdit.text);
      setNotes(notes.filter(note => note.id !== id));
    };
    
    const handleSearch = (event) => {
      setSearch(event.target.value);
    }
    
    const filteredNotes = notes.filter(note => note.text.toLowerCase().includes(search.toLowerCase()));

    return <div>
        <div>
            <textarea value={currentNote} onChange={handleChange} />
            <button onClick={handleAddNote}>Добавить</button>
        </div>
        <div>
            <input type="text" placeholder='Поиск' onChange={handleSearch}/>
            <h2>Записки</h2>
             <ul>
                 {filteredNotes.map((note) => (
                     <li key={note.id} onClick={()=> handleEditNote(note.id)}>
                 {note.text}
                     <button onClick={()=> handleDeleteNote(note.id)}>Удалить</button>
                     </li>
                 ))}
             </ul>
        </div>
    </div>
}

export default Notepad;