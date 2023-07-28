import './projects.css';
import css1 from '../images/projects/css1.svg';
import kit from '../images/projects/kit.svg';
import jara from '../images/projects/jara.svg';
import mily from '../images/projects/mily.svg';
import fotoflix from '../images/projects/fotoflix.svg';
import ocean from '../images/projects/ocean.svg';

const Project = (props) => {
    return (
        <div className='project-container' >
            <a href={props.link} target="_blank" rel="noopener noreferrer">
                <img className='project-image' src={props.image} alt={props.title} />
            </a>
            <div className='project-title'>
                {props.title}
            </div>
            <div className='project-description'>
                {props.description}
            </div>
        </div>
    )
}

const Projects = () => {
  return (
    <div className="main-projects-container">
      <Project image={css1} title='Chaus' description='A website for my dog' link='https://stardewvalleywiki.com/Jade'/>  
      <Project image={jara} title='Chaus' description='A website for my dog' />  
      <Project image={mily} title='Chaus' description='A website for my dog' />  
      <Project image={kit} title='Chaus' description='A website for my dog' />  
      <Project image={ocean} title='Chaus' description='A website for my dog' />
      <Project image={fotoflix} title='Chaus' description='A website for my dog' />    
    </div>
  );
};

export default Projects;

