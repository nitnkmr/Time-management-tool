
import './App.css';
import Navbar from './component/Navbar';
import Home from './component/Home';
import Store from './component/Store';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import About from './component/About';
function App() {
  return (
      <BrowserRouter>
    <div className="App">
        <Navbar />
        <Routes>
          <Route element={<Home/>} path='/' />
          <Route element={<Store/>} path='/archived' />
          <Route element={<About/>} path='/about' />
        </Routes>
    </div>
      </BrowserRouter>
  );
}

export default App;
