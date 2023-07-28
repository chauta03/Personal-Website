import './projects.css';
import css from '../images/projects/css.svg';

const Project = (props) => {
    return (
        <div className='project-container' >
            <img className='project-image' src={props.image} alt={props.title} href={props.link} />
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
      <Project image={css} title='Chaus' description='A website for my dog' />  
    </div>
  );
};

export default Projects;

