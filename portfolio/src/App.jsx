import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/background.jpg'
import profileImg from './assets/profile2.jpg'
import './App.css'
import NavBar from './components/NavBar'
import AboutMe from './components/AboutMe'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {

  return (
    <>
      <NavBar />
      <div className="background-container">
        <img className="bkg-img" src={heroImg} alt="Santa Rosa Plateau background image" />
      </div>
      <div className="profile-container">
        <img className="profile-img" src={profileImg} alt="Profile picture of Joshua Pena" />
      </div>
      <AboutMe />
      <Projects />
      <Contact />
    </>
  )
}

export default App
