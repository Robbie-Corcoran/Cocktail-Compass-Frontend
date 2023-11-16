import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './comps/Header.tsx';
import About from './comps/About.tsx';
import Gallery from './comps/Gallery.tsx';
import Favourites from './comps/Favourites.tsx';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Gallery />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/favourites" element={<Favourites />}></Route>
      </Routes>
    </>
  );
}

export default App;
