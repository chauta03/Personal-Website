import Intro from '../components/intro';
import Projects from '../components/projects';
import './main.css';


const Main = () => {
  return (
    <div className="Main">
      <Intro />
      <Projects />
    </div>
  );
};

export default Main;