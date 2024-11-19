import { useState } from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  const [mode,setMode] = useState('light')
  const toggleMode = ()=>{
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = '#030137'
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = 'white'
    }
  }
  return (
    <>
      <Navbar tittle="Text Utils" about="About Us" mode={mode} toggleMode={toggleMode}/>
      <TextForm heading="Enter the Text to analyze Bellow" mode={mode} toggleMode={toggleMode}/>
      {/* <About/> */}
    </>
  );
}
export default App;