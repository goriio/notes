import styled from 'styled-components';

export const StyledNoteForm = styled.form({
  padding: '1rem',
});

export const TextArea = styled.textarea({
  width: '100%',
  height: '150px',
  border: 'none',
  outline: 'none',
  resize: 'none',
});

export const BottomContainer = styled.div({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});

export const SubmitButton = styled.button({
  padding: '0.5rem',
  border: 'none',
  borderRadius: '8px',
  background: 'blue',
  color: 'white',
  cursor: 'pointer',
});

export const ColorsGroup = styled.div({
  display: 'flex',
  alignItems: 'center',
  gap: '1rem',
});

export const ColorRadio = styled.input.attrs({ type: 'radio' })((props) => ({
  display: 'none',

  '& + label': {
    background: props.value,
  },

  '&:checked + label': {
    border: '2px solid #555',
  },
}));

export const ColorIndicator = styled.label({
  display: 'inline-block',
  width: '1rem',
  height: '1rem',
  borderRadius: '4px',
  cursor: 'pointer',
});
