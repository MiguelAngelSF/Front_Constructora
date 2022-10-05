import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/home/Home';
import Login from './components/login/Login';
import NotFound from './components/notfound/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
