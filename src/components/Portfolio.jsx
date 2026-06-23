import './../css/Portfolio.css'
import Carousel from './Carousel.tsx';

import HCO_issue1 from "/src/assets/comics/hco/issue1.png";
import HCO_issue2 from "/src/assets/comics/hco/issue2.jpg";
import HCO_issue3DRAFT from "/src/assets/comics/hco/issue3_DRAFT.jpg";
import HCO_issue3 from "/src/assets/comics/hco/issue3.jpg";
import HCO_issue4 from "/src/assets/comics/hco/issue4.jpg";
import HCO_issue5 from "/src/assets/comics/hco/concept_art.jpg";

import IC4_1 from "/src/assets/comics/ideas4comix/ideas 4 comix - lifting.jpg";
import IC4_2 from "/src/assets/comics/ideas4comix/ideas 4 comic - lifelong meaning.jpg";
import IC4_3 from "/src/assets/comics/ideas4comix/ideas 4 comic - relatively long wait time.jpg";
import IC4_4 from "/src/assets/comics/ideas4comix/ideas 4 comic - soul-eating machine.jpg";
import IC4_5 from "/src/assets/comics/ideas4comix/ideas 4 comix - pothole fairies.jpg";
import IC4_6 from "/src/assets/comics/ideas4comix/ideas 4 comic - fourth wall dreams.jpg";

import B1 from "/src/assets/comics/badverts/badverts - sexiest clam alive.jpg";
import B2 from "/src/assets/comics/badverts/badvertisements - legless table for sale.jpg"
import B3 from "/src/assets/comics/badverts/badvertisements - degree pop up.png";

import C1 from "/src/assets/comics/chatito/chatito - car troubles.jpg";
import C2 from "/src/assets/comics/chatito/chatito - hiking.jpg";

function Portfolio() {
    const HCO_IMAGES = [ HCO_issue1, HCO_issue2, HCO_issue3DRAFT, HCO_issue3, HCO_issue4, HCO_issue5];
    const I4C_IMAGES = [ IC4_1, IC4_2, IC4_3, IC4_4, IC4_5, IC4_6];
    const BADVERTS_IMAGES = [B1, B2, B3];
    const CHATITO_IMAGES = [C1, C2];

    return (
      <>
        <div id='portfolio'>
          <div className='portfolio-container'>
            <div className='hco'>
              <h2>Harpy, Charile, & Ordgul - Highlander Comics</h2>
              <p>This was my ambitious entrypoint into making comics at The Highlander. I wanted to introduce my original characters and their world to an audience familiar with sci-fi and mythology. It follows the adventures of three friends who travel across their world in search for cosmic power that calls to them individually. </p>
              <Carousel slides={HCO_IMAGES} />
            </div>

            <div className='ideas-4-comix'>
              <h2>Ideas 4 Comix</h2>
              <p>My next series at The Highlander was focused on capturing one-off ideas I had for a single-page comic. They usually relate to a quote, joke, or feeling I experienced and jotted down. These are usually more personal and meant to reach an audience that can find a deep connection with one piece rather than the entire collection. </p>
              <Carousel slides={I4C_IMAGES} />
            </div>        

            <div className='badverts'>
              <h2>Badvertisements</h2>
              <p>The next series is my more comical one as it is my way of reinventing what a comic is by making them resemble advertisements seen in media. These "badverts" follow similar styles of ads seen in newspapers, magazines, and the internet. I am a follower of absurd humor and I practice this in my Badvertisements series.</p>
              <Carousel slides={BADVERTS_IMAGES} />
            </div>

            <div className='chatito'>
              <h2>Chatito</h2>
              <p>Chatito is my own original character that mirrors everything I do each week and makes me depict him doing so in my comics. He's such a copy-cat, or copy-potato, or whatever he is. But the thing with Chatito is that although he does the same things I do, he always finds a way to make it unique for him. </p>
              <Carousel slides={CHATITO_IMAGES} />
            </div>
          </div>
        </div>
      </>
    )
  }

export default Portfolio;