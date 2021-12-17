import styled from 'styled-components';

export const StyledNote = styled.div((props) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  aspectRatio: '1',
  padding: '1rem',
  borderRadius: '8px',
  backgroundColor: props.backgroundColor,
}));

export const NoteText = styled.p({
  color: 'black',
  wordBreak: 'break-word',
});

export const BottomContainer = styled.div({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  fontSize: '0.8rem',
  color: '#555',
});

export const ModalOption = styled.button({
  display: 'block',
  width: '100%',
  padding: '1rem',
  border: 'none',
  background: 'transparent',
  cursor: 'pointer',

  '&:hover': {
    background: '#e2e2e2',
  },
});
