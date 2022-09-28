import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import Profile from './components/Profile';
import Post from './components/Post';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/signup' element={<Signup /> }/>
        <Route path='/login' element={<Login />} />
        <Route path='/profile' element={<Profile /> }/>
        <Route path='/post' element={<Post />} />
        <Route path='/' element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
