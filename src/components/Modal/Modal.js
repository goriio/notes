import { useRef } from 'react';
import {
  CloseButton,
  CloseButtonContainer,
  ModalContainer,
  StyledModal,
} from './Modal.styles';

function Modal({ isOpen, handleClose, children }) {
  const clickOutsideRef = useRef(null);

  const handleClickOutside = (event) => {
    if (event.target === clickOutsideRef.current) handleClose();
  };

  return (
    <>
      {isOpen && (
        <StyledModal ref={clickOutsideRef} onClick={handleClickOutside}>
          <ModalContainer>
            {children}
            <CloseButtonContainer>
              <CloseButton onClick={handleClose}>Close</CloseButton>
            </CloseButtonContainer>
          </ModalContainer>
        </StyledModal>
      )}
    </>
  );
}

export default Modal;
