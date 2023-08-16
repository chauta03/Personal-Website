import './about.css';
import me from '../images/me/me.jpeg';

const Experience = (props) => {
  return (
    <div className='exp-container' style={props.style}>
      <div className='exp-position'>{props.position}, {props.company}</div>
      <div className='exp-time'>{props.time}</div>
      <div className='exp-des'>{props.description}</div>
    </div>
  );
};

const About = () => {
  const exps = [
    { position: "Research Assistant", company: 'Kalamazoo College', time: 'June 2023 - Current', description: 'Upgrading Kit Management System for CS department focused on grading, feedback, and cloning assignment' },
    { position: "Software Developer", company: 'Develop For Good', time: 'May 2023 - Current', description: 'Build browser-based UI learning tools Jara Unit for children with minimal internet and classroom access and teaching tools for teachers during self-study time' },
    { position: "Teaching Assistant", company: 'Kalamazoo College', time: 'Sep 2022 - Current', description: 'Grading and conducting office hours at CS Collaboration Center to help students with functional programming, data structures, memory organization assignments' },
    { position: "Software Developer Intern", company: 'MISA Joint Stock Company', time: 'Jul - Aug 2022', description: 'Developed backend architecture for link shortener tool in website format to replace old system' },
  ];

  return (
    <div className="about-container">
      <div className="about-pic">
        <img className="me-pic" src={me} alt='Chau Ta' />
        <div className="about-text">
          <div className="about-text1">
            Hi, I'm Chau Ta
          </div>
          <div className="about-text2">
            <div>
              I’m a Vietnamese international student at Kalamazoo College. I will graduate in <b>2025</b> with B.A of <b>Computer Science and Mathematics</b>. I’m going to attend <b>Budapest Semesters in Mathematics</b> from August 2023 to January 2024.
            </div>
            <div>Interested in Math and Tech, I enjoy problem-solving and passionate about automatic and fast algorithms.</div>
            <div>In my work, I find the combination of tech solutions and human capabilities. I am interested in making <b>positive</b> impacts and acquire knowledge that benefit the community. I have experience in <b>Full Stack Development, Game Development, and AI</b>, which has helped me to develop strong communication and collaboration skills while working in cross-field teams.</div>
          </div>
        </div>
      </div>
      <div className='skills-container'>
        <div className='skills-container-left'>
          <div className='education'>
            <div className='skill-header'>----</div>
            <div className='skill-header'>Education</div>
            <Experience
              position='Kalamazoo College, MI'
              time='2021 - 2025'
              description='B.A. Computer Science and Mathematics'
            />
          </div>
          <div className='skills'>
            <div className='skill-header'>Skills</div>
            <Experience
              position='Tools & Frameworks'
              description='Python, Java, C, Git, JavaScript, TypeScript, HTML/CSS, React, FastAPI, MongoDB, ElasticSearch, Docker, MySQL'
              style={{ display: 'flex', gap: '10px'}} />
            <div style={{ display: 'flex', flexDirection:'column', gap: '20px'}}>
              <div className='exp-position' >Revelant Training</div>
              <div style={{ display: 'flex', flexDirection:'column', gap: '15px'}}>
                <div className='exp-des'>AWS AI & ML Scholarship program: AI Programming with Python Nanodegree</div>
                <div className='exp-des'>Harvard WECode Conference with WeAmplify Extended Scholarship</div>
                <div className='exp-des'>CodePath Certificate in Intermediate Software Engineering</div>
                <div className='exp-des'>Harvard University Certificate in CS50x Intro to Programming</div>
              </div>
            </div>
          </div>
        </div>
        <div className='skills-container-right'>
          <div className='skill-header'>Experience</div>
          <div className='skills-container-right-small'>
            {exps.map((exp) => {
              return (
                <Experience
                  position={exp.position}
                  company={exp.company}
                  time={exp.time}
                  description={exp.description}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
