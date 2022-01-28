import { BrowserRouter, Route, Routes } from 'react-router-dom';
import FooterCont from '../Components/footer';
import { Home } from '../Components/Home';
import { Login } from '../Components/Login';
import { Logo } from '../Styles/HomeStyles';
import Container from '../container/Container';
function App() {
  return (
    <div>
      <BrowserRouter>
        
        <Routes>
          <Route path="/" element={<Container />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
