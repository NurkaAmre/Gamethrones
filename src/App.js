import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Characters from './pages/Characters';
import CharacterDetails from './pages/CharacterDetails';
import NavBar from './components/NavBar';
import './App.module.css';
import Footer from './components/Footer';
import fetchCharacters from './redux/Dragons/fetch';
import About from './pages/About';

const App = () => {
  const dispatch = useDispatch();
  dispatch(fetchCharacters());
  return (
    <>
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={(
            <Characters />
        )}
        />
        <Route path="/character/:characterdetails" element={<CharacterDetails />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </>

  );
};

export default App;
