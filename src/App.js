import React, { useState } from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';



function App() {
  const [mode, setMode] = useState('dark');

  // Dark mode toggle Function
  const toggleMode = () => {
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      document.body.style.color = 'white';
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = '#212529';
    }
  }
  return (
    <> 
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
    <div className="container my-3">
    <TextForm heading="Enter text to Analyze below" mode={mode}/>
    </div>
    
    </>
  );
}

export default App;
