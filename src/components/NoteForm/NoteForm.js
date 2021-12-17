import { useState, Fragment } from 'react';
import {
  AddButton,
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

function NoteForm({ addNote, setIsModalOpen }) {
  const [note, setNote] = useState('');
  const [color, setColor] = useState(colors[0]);

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
    addNote(newNote);

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
        <AddButton onClick={handleSubmit}>Add</AddButton>
      </BottomContainer>
    </StyledNoteForm>
  );
}

export default NoteForm;
