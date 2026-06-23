import './../css/Projects.css'
import metisImg from '/src/assets/metis_homepage.png';
import dragonHatcherImg from '/src/assets/dragon_hatcher_image.png';

function Projects() {
    return (
        <div id='projects'>
            <h2>Projects</h2>
            <div className='grid-container'>
                
                <div className='grid-item'>
                    <a href='https://github.com/jahooba/Metis' target="_blank" rel="noopener noreferrer">
                        <h1>Metis</h1>
                    </a>
                    <a href="https://youtu.be/MWOhm6TGCBI?si=06cs6EVHNgC2thE8" target="_blank" rel="noopener noreferrer">
                        <img src={metisImg} alt="Metis project screenshot" className="metis-image" />
                    </a>
                    <p>Metis is an AI-powered web application designed to assist college students with course planning and registration. Built using the MERN stack (MongoDB, Express.js, React, and Node.js).</p>
                </div>

                <div className='grid-item'>
                    <a href='https://github.com/DavidA346/Dragon-Hatcher' target="_blank" rel="noopener noreferrer">
                        <h1>Mobile Game: Dragon Hatcher</h1>
                    </a>
                    <a href='https://youtube.com/shorts/WvLc6aYeXYU' target="_blank" rel="noopener noreferrer">
                        <img src={dragonHatcherImg} alt="Dragon Hatcher project screenshot" className="dragon-hatcher-image" />
                    </a>
                    <p>A mobile game where players can hatch and raise their own dragons. Built with React Native (Expo), JavaScript and Zustand.</p>
                </div>

            </div>
            
        </div>
    );
}

export default Projects;