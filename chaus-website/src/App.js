import './App.css';
import Header from "./components/header";
import Intro from "./components/intro";
import Projects from './components/projects';

function App() {
  return (
    <div className="App">
      <Header />
      <Intro />
      <Projects />
    </div>
  );
}

export default App;
