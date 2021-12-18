import { useState, Fragment } from 'react';
import {
  SubmitButton,
  BottomContainer,
  ColorsGroup,
  ColorRadio,
  StyledNoteForm,
  TextArea,
  ColorIndicator,
} from './NoteForm.styles';

const colors = [
  'hsl(30, 70%, 85%)',
  'hsl(60, 70%, 85%)',
  'hsl(90, 70%, 85%)',
  'hsl(120, 70%, 85%)',
  'hsl(150, 70%, 85%)',
];

function NoteForm({ submitNote, setIsModalOpen, edit }) {
  const [note, setNote] = useState(edit ? edit.text : '');
  const [color, setColor] = useState(edit ? edit.backgroundColor : colors[0]);

  const handleNoteChange = (event) => {
    setNote(event.target.value);
  };

  const handleColorChange = (event) => {
    setColor(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const newNote = {
      id: Date.now(),
      text: note,
      backgroundColor: color,
      date: new Date().toDateString(),
    };

    console.log(newNote);
    submitNote(newNote);

    setNote('');
    setColor(colors[0]);

    setIsModalOpen(false);
  };

  return (
    <StyledNoteForm onSubmit={handleSubmit}>
      <TextArea
        placeholder='What to remember?'
        maxLength={70}
        value={note}
        onChange={handleNoteChange}
        required
      ></TextArea>
      <BottomContainer>
        <ColorsGroup>
          {colors.map((item) => (
            <Fragment key={item}>
              <ColorRadio
                value={item}
                checked={color === item}
                onChange={handleColorChange}
                id={item}
              />
              <ColorIndicator htmlFor={item} />
            </Fragment>
          ))}
        </ColorsGroup>
        <SubmitButton onClick={handleSubmit}>
          {edit ? 'Update' : 'Add'}
        </SubmitButton>
      </BottomContainer>
    </StyledNoteForm>
  );
}

export default NoteForm;
