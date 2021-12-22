import styled from 'styled-components';

export const StyledModal = styled.div({
  position: 'fixed',
  inset: '0',
  background: 'hsla(0, 0%, 0%, 0.6)',
  zIndex: '1000',

  '@media(min-width: 500px)': {
    display: 'grid',
    placeItems: 'center',
  },
});

export const ModalContainer = styled.div({
  position: 'fixed',
  left: '0',
  right: '0',
  bottom: '0',
  borderRadius: '8px 8px 0 0',
  background: 'white',
  overflow: 'hidden',

  '@media(min-width: 500px)': {
    inset: 'unset',
    minWidth: '350px',
    borderRadius: '8px',
  },
});

export const CloseButtonContainer = styled.div({
  padding: '1rem',
});

export const CloseButton = styled.button({
  width: '100%',
  padding: '0.5rem',
  border: '1px solid #555',
  borderRadius: '8px',
  background: 'transparent',
  cursor: 'pointer',

  '&:hover': {
    borderColor: '#e2e2e2',
    background: '#e2e2e2',
  },
});
