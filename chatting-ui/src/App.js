import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Login from './pages/Login';
import Register from './pages/Register';
import Chat from './pages/Chat';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/register' element={<Register />}></Route>
        <Route path='/chat' element={<Chat />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
