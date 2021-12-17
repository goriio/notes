import styled from 'styled-components';

export const StyledNoteList = styled.div({
  display: 'grid',
  gap: '0.5rem',
  gridTemplateColumns: 'repeat(2, 1fr)',

  '@media(min-width: 550px)': {
    gridTemplateColumns: 'repeat(3, 1fr)',
  },

  '@media(min-width: 800px)': {
    gridTemplateColumns: 'repeat(4, 1fr)',
  },
});

export const NewNoteButton = styled.button({
  position: 'fixed',
  right: '1rem',
  bottom: '1rem',
  width: '3rem',
  height: '3rem',
  border: 'none',
  borderRadius: '50%',
  background: 'blue',
  fontSize: '2rem',
  color: 'white',
  cursor: 'pointer',

  '@media(min-width: 500px)': {
    right: '3rem',
    bottom: '2rem',
  },
});
