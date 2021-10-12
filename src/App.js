import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import MainPage from './Components/MainPage';
import About from './Components/About';
import Skills from './Components/Skills';
import Experience from './Components/Experience';
import Portfolio from './Components/Portfolio';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <MainPage/>
      <About/>
      <Experience/>
      <Skills/>
      <Portfolio/>
    </div>
  ); 
}

export default App;
