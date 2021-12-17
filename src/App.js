import { Container, NoteList } from './components';
import { GlobalStyles } from './GlobalStyles';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Container>
        <GlobalStyles />
        <h1 style={{ margin: '1rem 0' }}>Notes</h1>
        <Routes>
          <Route exact path='/' element={<NoteList />} />
          <Route path='*' element={<NoteList />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
