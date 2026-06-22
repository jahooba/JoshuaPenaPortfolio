import './../css/Portfolio.css'
import Carousel from './Carousel.tsx';

import HCO_issue1 from "/src/assets/comics/hco/issue1.png";
import HCO_issue2 from "/src/assets/comics/hco/issue2.jpg";
import HCO_issue3DRAFT from "/src/assets/comics/hco/[DRAFT]_issue3.jpg";
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
        <div className='portfolio-container'>
          <div className='hco'>
            <h2>Harpy, Charile, & Ordgul - Highlander Comics</h2>
            <Carousel slides={HCO_IMAGES} />
          </div>

          <div className='ideas-4-comix'>
            <h2>Ideas 4 Comix</h2>
            <Carousel slides={I4C_IMAGES} />
          </div>        

          <div className='badverts'>
            <h2>Badverts</h2>
            <Carousel slides={BADVERTS_IMAGES} />
          </div>

          <div className='chatito'>
            <h2>Chatito</h2>
            <Carousel slides={CHATITO_IMAGES} />
          </div>
        </div>
      </>
    )
  }

export default Portfolio;