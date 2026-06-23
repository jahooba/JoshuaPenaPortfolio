import heroImg from './assets/background.jpg'
import profileImg from './assets/profile2.jpg'
import './App.css'
import NavBar from '/src/components/NavBar'
import AboutMe from '/src/components/AboutMe'
import Projects from '/src/components/Projects'
import Contact from '/src/components/Contact'
import Portfolio from './components/Portfolio'

function App() {

  return (
    <>
      <NavBar />
      <div className="hero-section">
        <div className="background-container">
          <img className="bkg-img" src={heroImg} alt="" />
        </div>

        <div className="profile-container">
          <img className="profile-img" src={profileImg} alt="" />
        </div>
      </div>
      <AboutMe />
      <Projects />
      <Portfolio />
      <Contact />
    </>
  )
}

export default App
