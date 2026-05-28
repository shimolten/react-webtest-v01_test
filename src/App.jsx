import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ShowDetail from './pages/ShowDetail';
import './App.css';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
}