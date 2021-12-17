import {
  BottomContainer,
  ModalOption,
  NoteText,
  StyledNote,
} from './Note.styles';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { Modal } from '..';
import { useState } from 'react';

function Note({ id, backgroundColor, text, date, handleDelete }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
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
          <ModalOption>Edit</ModalOption>
          <ModalOption onClick={() => handleDelete(id)}>Delete</ModalOption>
        </Modal>
      </BottomContainer>
    </StyledNote>
  );
}

export default Note;
