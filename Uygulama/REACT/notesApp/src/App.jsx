import React, { useState } from 'react';
import './App.css';

function App() {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState('');
  const [editIndex, setEditIndex] = useState(null);
  const [editNote, setEditNote] = useState('');

  const handleAddNote = () => {
    if (newNote.trim()) {
      setNotes([...notes, newNote]);
      setNewNote('');
    }
  };


  const handleEditNote = (index) => {
    setEditIndex(index);
    setEditNote(notes[index]);
  };

  const handleSaveEdit = () => {
    if (editNote.trim()) {
      const updatedNotes = [...notes];
      updatedNotes[editIndex] = editNote;
      setNotes(updatedNotes);
      setEditIndex(null);
      setEditNote('');
    }
  };


  const handleCancelEdit = () => {
    setEditIndex(null);
    setEditNote('');
  };

  const handleDeleteNote = (index) => {
    const updatedNotes = notes.filter((_, i) => i !== index);
    setNotes(updatedNotes);
  };

  return (
    <div className="App">
      <h1>Notes App</h1>
      <div className="notes-container">
        <div className="my-notes">
          <h2>Notlarım</h2>
          {notes.map((note, index) => (
            <div key={index} className="note-item">
              {editIndex === index ? (
                <div className="edit-note-form">
                  <input
                    type="text"
                    value={editNote}
                    onChange={(e) => setEditNote(e.target.value)}
                  />
                  <button onClick={handleSaveEdit}>Kaydet</button>
                  <button onClick={handleCancelEdit}>İptal</button>
                </div>
              ) : (
                <>
                  <p>{note}</p>
                  <button onClick={() => handleEditNote(index)}>Düzenle</button>
                  <button onClick={() => handleDeleteNote(index)}>Sil</button>
                </>
              )}
            </div>
          ))}
        </div>
        <div className="add-note">
          <h2>Yeni Not Ekle</h2>
          <input 
            type="text" 
            placeholder="Notunuzu buraya girin..." 
            value={newNote} 
            onChange={(e) => setNewNote(e.target.value)} 
          />
          <button onClick={handleAddNote}>Ekle</button>
        </div>
      </div>
    </div>
  );
}

export default App;
