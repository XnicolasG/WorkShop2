import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Inicio from '../components/Inicio';
import Container from '../container/Container';
function App() {
  return (
    <div>
      <BrowserRouter>
        
        <Routes>
          <Route path="/" element={<Container />} />
          <Route path="/Inicio" element={<Inicio />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
