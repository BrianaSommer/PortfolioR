import { useState, useRef } from 'react'
import './App.css'
import checkinImg from './assets/checkin.webp'
import italianImg from './assets/Italian.jpeg'
import weatherappImg from './assets/weatherapp.png'
import bookstoreImg from './assets/bookstore.png'
import plantstoreImg from './assets/plantstore.png'
import portfolioImg from './assets/PortfolioImg.PNG'

const projects = [
  {
    title: "Clinical Check in Form",
    description: "A full-stack online check in form for a Medical Office",
    link: "https://github.com/BrianaSommer/Clinical-Checkin.git",
    img: checkinImg
  },
  {
    title: "Favorite Foods",
    description: "HTML in class project of my Favorite Food",
    link: "https://github.com/BrianaSommer/Fav_Food.git",
    img: italianImg
  },
  {
    title: "Weather App",
    description: "Javascript and DOM",
    link: "https://github.com/BrianaSommer/Weather-App.git",
    img: weatherappImg
  },
  {
    title: "Book Store",
    description: "Javascript",
    link: "https://github.com/BrianaSommer/Bookstore_Project.git",
    img: bookstoreImg
  },
  {
    title: "Ecommerce",
    description: "Plant Store Javascript and React",
    link: "https://github.com/BrianaSommer/p2t_capstone_template.git",
    img: plantstoreImg
  }
];

function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [formStatus, setFormStatus] = useState('');
  const [formColor, setFormColor] = useState('black');
  const nameRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();

  // Carousel navigation
  const nextSlide = () => setCurrentSlide((currentSlide + 1) % projects.length);
  const prevSlide = () => setCurrentSlide((currentSlide - 1 + projects.length) % projects.length);

  // Form submission handler
  const handleSubmit = (event) => {
    event.preventDefault();
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const message = messageRef.current.value;

    if (!name || !email || !message) {
      setFormStatus('Please fill in all fields.');
      setFormColor('red');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setFormStatus('Please enter a valid email address.');
      setFormColor('red');
      return;
    }

    // Simulate successful submission
    setFormStatus('Form submitted successfully!');
    setFormColor('green');
    event.target.reset();
  };

  return (
    <>
      <nav>
        <h2 id="Heading">Welcome to My Portfolio</h2>
        <br />
        <div>
          <a className="Nav-Bar" href="#contact">Contact</a>
          <a className="Nav-Bar" href="#headline">About</a>
          <a className="Nav-Bar" href="#projects">Projects</a>
        </div>
      </nav>

      <header id="helloname">
        <h3 className="hello"> Hello!
          <br />
          &#127800; I'm Briana Sommer &#127800;
        </h3>
        <p className="employmentstatus">Full Stack Developer Student | Assistant Clinical Operations Manager</p>
        <a href="#projects"><button className="btn-grad">View My Work</button></a>
      </header>
      <p id="professional-profile"></p>
      <div id="Profile">
        <div className="Box">
          <img id="Portfolio-Img" src={portfolioImg} alt="Briana Sommer Portfolio" />
        </div>
        <h1 id="headline">About Me</h1>
        <br />
        <p id="Introduction">
          I am trying to break into the tech world. I am passionate about coding, problem-solving, and creating seamless digital experiences. With a background in clinical operations and healthcare, I bring a unique perspective to technology—one that values both precision and empathy. <mark> I am a Full Stack Developer student at NPower, committed to growing my skills and contributing to impactful tech solutions.</mark>
          <br /><br />
          I am particularly interested in roles such as Healthcare Software Engineering, EMR Build Specialist, or Healthcare Data Analyst, where I can merge my healthcare experience with my growing expertise in technology.
        </p>
        <br /><br />
      </div>
      <br /><br />

      <section id="abilities">
        <span className="skills">Epic EMR</span>
        <span className="skills">Qgenda</span>
        <span className="skills">HTML/CSS</span>
        <span className="skills">JavaScript</span>
        <span className="skills">Python</span>
        <span className="skills">React</span>
        <span className="skills">GitHub</span>
        <span className="skills">Node.js</span>
      </section>

      <section id="projects" className="projects">
        <div className="container">
          <h2>My Projects</h2>
          <br /><br /><br />
          <div className="project-grid">
            <div className="project-card">
              <h3>{projects[currentSlide].title}</h3>
              <p>{projects[currentSlide].description}</p>
              {projects[currentSlide].link ? (
                <a href={projects[currentSlide].link} className="btn" target="_blank" rel="noopener noreferrer">View Project</a>
              ) : (
                <button className="btn" disabled>No Link</button>
              )}
              <img src={projects[currentSlide].img} alt={projects[currentSlide].title} />
            </div>
          </div>
          <div style={{ textAlign: "center" }}>
            <button onClick={prevSlide} className="btn-grad">Previous</button>
            <button onClick={nextSlide} className="btn-grad">Next</button>
          </div>
        </div>
      </section>

      <form id="contact" onSubmit={handleSubmit}>
        <label htmlFor="name"></label>
        <input placeholder="Name" type="text" id="name" name="name" required ref={nameRef} />
        <br />
        <label htmlFor="email"></label>
        <input placeholder="Email" type="email" id="email" name="email" required ref={emailRef} />
        <br />
        <label htmlFor="message"></label>
        <textarea placeholder="message" id="message" name="message" rows="5" required ref={messageRef}></textarea>
        <br />
        <button type="submit" className="btn-grad">Send It</button>
      </form>
      <div id="formStatus" style={{ color: formColor }}>{formStatus}</div>

      <div className="container">
        <div className="social-links">
          <a href="#"><i className="fab fa-github"></i></a>
          <a href="#"><i className="fab fa-linkedin"></i></a>
        </div>
        <p>© 2025 My Portfolio. All rights reserved.</p>
      </div>
    </>
  )
}

export default App