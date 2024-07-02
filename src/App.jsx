// src/App.jsx
import React from 'react';
import Gallery from './Components/Gallery';
import logo from './assets/logo.png';

function App() {
  return (
    <div className="min-h-screen bg-gray-900 py-10">
      <header className="flex items-center justify-center mb-8">
        <img src={logo} alt="Logo" className="h-16 mr-4" />
        <h1 className="text-3xl font-bold text-white text-center">
          Flower Picture Gallery
        </h1>
      </header>
      <Gallery />
    </div>
  );
}

export default App;
