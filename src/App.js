import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import MainPage from './Components/MainPage';
import About from './Components/About';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <MainPage/>
      <About/>
    </div>
  ); 
}

export default App;
