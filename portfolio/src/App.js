import './App.css';
import { About } from './components/About';
import { Header } from "./components/Header";
import { Hero } from './components/Hero';
import { Portfolio } from './components/Portfolio';
import { Skills } from './components/Skills';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Skills />
      <Portfolio/>
      <div style={{height: "2000px" }}></div>
    </div> 
  ); 
}

export default App;
