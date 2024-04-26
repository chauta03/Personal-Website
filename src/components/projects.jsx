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
      <div className='project-skills'>
        {props.skills}
      </div>
      <div className='project-description'>
        {props.description}
      </div>
    </div>
  )
}

const Projects = () => {
  const projects = [
    {
      image: css1,
      title: 'Compute Science Society',
      skills: 'TypeScipt, Nodes, HTML/CSS, Figma',
      description: 'A website for the first CS community at Kalamazoo College with the hope of bringing tech industry nearer to students.',
      link: 'https://kzoocss.org/'
    },
    {
      image: jara,
      title: 'Jara Unit',
      skills: 'React, HTML/CSS, SQLite, Flask, Figma',
      description: 'A browser-based UI Jara Unit - a teaching tool for teachers and a learning tool for students with minimally internet available.',
      link: 'http://www.joinjara.com/'
    },
    {
      image: mily,
      title: 'MISA Shortlink',
      skills: 'Python, Flask, ElasticSearch, Docker, MongoDB',
      description: 'A free shorten-link service allows sharing links through images, customizing links, and tracking clicks.',
      link: 'https://mily.vn/main'
    },
    {
      image: kit,
      title: 'Kit',
      skills: 'Shell, Linux, Ruby on Rails, MySQL',
      description: 'Learning Management System focused on ease of use, efficient grading, and high quality feedback on assignments',
      link: 'https://kit.cs.kzoo.edu/klasses'
    },
    {
      image: ocean,
      title: "Ocean's Whisper",
      skills: 'Unreal Engine 4',
      description: 'Real Time Strategy Game that simulates ocean pollution from dumping and how it affects us and the economy.',
      link: 'https://devpost.com/software/ocean-s-whisper'
    },
    {
      image: fotoflix,
      title: 'Fotoflix',
      skills: 'TypeScipt, HTML/CSS, Firebase, Figma',
      description: 'Online social media platform for images and videos sharing.',
      link: 'https://fotoflix.org/'
    },
    {
      image: divisorgame,
      title: 'Divisor Game',
      skills: 'Python, React, HTML/CSS, Firebase, Figma',
      description: 'Math-based divisor game.',
      link: ''
    },
  ];

  return (
    <div className="main-projects-container">
        {projects.map((project) => (
          <Project
            image={project.image}
            title={project.title}
            skills={project.skills}
            description={project.description}
            link={project.link}
          />
        ))}
    </div>
  );
};

export default Projects;

