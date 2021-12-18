import { useEffect, useState } from 'react';
import { Modal, Note, NoteForm } from '..';
import { NewNoteButton, StyledNoteList } from './NoteList.styles';

function NoteList() {
  const [notes, setNotes] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // TODO: store and get notes using localStorage.

  useEffect(() => {
    const notes = JSON.parse(localStorage.getItem('notes')) || [];
    setNotes(notes);
  }, []);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const addNote = (note) => {
    const newNotes = [note, ...notes];
    setNotes(newNotes);
    localStorage.setItem('notes', JSON.stringify(newNotes));
  };

  const updateNote = (updatedNoteId, updatedNote) => {
    const newNotes = notes.map((note) =>
      note.id === updatedNoteId ? updatedNote : note
    );
    setNotes(newNotes);
    localStorage.setItem('notes', JSON.stringify(newNotes));
  };

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
    localStorage.setItem('notes', JSON.stringify(newNotes));
  };

  return (
    <>
      <StyledNoteList>
        {notes.length ? (
          notes.map((note) => (
            <Note
              key={note.id}
              {...note}
              handleDelete={deleteNote}
              updateNote={updateNote}
            />
          ))
        ) : (
          <p>Add a note.</p>
        )}
      </StyledNoteList>
      <NewNoteButton onClick={openModal}>+</NewNoteButton>
      <Modal isOpen={isModalOpen} handleClose={closeModal}>
        <NoteForm submitNote={addNote} setIsModalOpen={setIsModalOpen} />
      </Modal>
    </>
  );
}

export default NoteList;
