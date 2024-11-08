import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  return (
    <>
      <Navbar tittle="Text Utils" about="About Us"/>
      <TextForm heading="Enter the Text to analyze Bellow"/>
    </>
  );
}
export default App;