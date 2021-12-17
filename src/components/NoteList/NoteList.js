import { useState } from 'react';
import { Modal, Note, NoteForm } from '..';
import { NewNoteButton, StyledNoteList } from './NoteList.styles';

function NoteList() {
  const [notes, setNotes] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // TODO: store and get notes using localStorage.

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const addNote = (note) => {
    setNotes([note, ...notes]);
    console.log(notes);
  };

  // TODO: add an updateNote function

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };

  return (
    <>
      <StyledNoteList>
        {notes.length ? (
          notes.map((note) => (
            <Note key={note.id} {...note} handleDelete={deleteNote} />
          ))
        ) : (
          <p>Add a note.</p>
        )}
      </StyledNoteList>
      <NewNoteButton onClick={openModal}>+</NewNoteButton>
      <Modal isOpen={isModalOpen} handleClose={closeModal}>
        <NoteForm addNote={addNote} setIsModalOpen={setIsModalOpen} />
      </Modal>
    </>
  );
}

export default NoteList;
