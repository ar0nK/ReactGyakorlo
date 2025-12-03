
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import MindenTargy from './Pages/MindenTargy';
import TargyReszlet from './Pages/TargyReszlet';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MindenTargy/>}/>
          <Route path='/reszletek/:id' element={<TargyReszlet/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
