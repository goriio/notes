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
  const editDefault = {
    id: null,
    text: '',
    backgroundColor: '',
  };

  const [isModalOpen, setIsModalOpen] = useState(false);

  const [edit, setEdit] = useState(editDefault);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    if (edit.id) setEdit(editDefault);
  };

  const handleUpdate = (updatedNote) => {
    updateNote(edit.id, updatedNote);
    setEdit(editDefault);
  };

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
          {edit.id ? (
            <NoteForm
              submitNote={handleUpdate}
              setIsModalOpen={setIsModalOpen}
              edit={edit}
            />
          ) : (
            <>
              <ModalOption
                onClick={() => setEdit({ id, text, backgroundColor })}
              >
                Edit
              </ModalOption>
              <ModalOption onClick={() => handleDelete(id)}>Delete</ModalOption>
            </>
          )}
        </Modal>
      </BottomContainer>
    </StyledNote>
  );
}

export default Note;
