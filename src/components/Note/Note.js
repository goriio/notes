import {
  BottomContainer,
  ModalOption,
  NoteText,
  StyledNote,
} from './Note.styles';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { Modal, NoteForm } from '..';
import { useState } from 'react';

function Note({ id, backgroundColor, text, date, handleDelete, updateNote }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [edit, setEdit] = useState({
    id: null,
    text: '',
    backgroundColor: '',
  });

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleUpdate = (updatedNote) => {
    updateNote(edit.id, updatedNote);
    setEdit({
      id: null,
      text: '',
      backgroundColor: '',
    });
  };

  if (edit.id) {
    return (
      <Modal isOpen={isModalOpen} handleClose={closeModal}>
        <NoteForm
          addNote={handleUpdate}
          setIsModalOpen={setIsModalOpen}
          edit={edit}
        />
        ;
      </Modal>
    );
  }

  return (
    <StyledNote backgroundColor={backgroundColor}>
      <NoteText>{text}</NoteText>
      <BottomContainer>
        <p>{date}</p>
        <BsThreeDotsVertical
          onClick={openModal}
          style={{ cursor: 'pointer' }}
        />
        <Modal isOpen={isModalOpen} handleClose={closeModal}>
          <ModalOption onClick={() => setEdit({ id, text, backgroundColor })}>
            Edit
          </ModalOption>
          <ModalOption onClick={() => handleDelete(id)}>Delete</ModalOption>
        </Modal>
      </BottomContainer>
    </StyledNote>
  );
}

export default Note;
