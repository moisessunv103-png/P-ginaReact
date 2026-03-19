import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import CursorGotaPintura from './components/CursorGotaPintura';
import Inicio from './pages/Inicio';
import Servicios from './pages/Servicios';
import Productos from './pages/Productos';
import Contacto from './pages/Contacto';
import './App.css';

function App() {
  return (
    <div className="app">
      <CursorGotaPintura />
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/productos" element={<Productos />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;

