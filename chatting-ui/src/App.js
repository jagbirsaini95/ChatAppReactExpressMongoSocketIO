import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Login from './pages/Login';
import Register from './pages/Register';
import Chat from './pages/Chat';
import { ToastContainer } from 'react-toastify';
import SetAvatar from './components/SetAvatar';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <BrowserRouter>
      <ToastContainer />
      <Routes>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/register' element={<Register />}></Route>
        <Route path='/set-avatar' element={<SetAvatar />}></Route>
        <Route path='/chat' element={<Chat />}></Route>
        <Route path='/' element={<Chat />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
