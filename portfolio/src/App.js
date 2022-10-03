import './App.css';
import { About } from './components/About';
import { Header } from "./components/Header";
import { Hero } from './components/Hero';
import { Portfolio } from './components/Portfolio';
import { Skills } from './components/Skills';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { BackToTop } from './components/BackToTop';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Skills />
      <Portfolio/>
      <Contact />
      <Footer />
      <BackToTop />
    </div> 
  ); 
}

export default App;
