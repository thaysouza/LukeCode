import React from  'react';
import Anima from '../../componets/Anima/';

import './styles.css';

import yoda from '../../assets/images/yoda.png';
import separator from '../../assets/images/separator.svg';

const Home = () => {
    return(
   <>

   <Anima />
     <div className="section-1">
      <div className="container">
         <header className="header">
             <h2>Luke Code</h2>
             <nav>
                 <button>Fazer login</button>
                 <button>Escreva-se</button>
             </nav>
         </header>
         <main>
             <section>
                 <h1>Se torce um mestre<br/> da programação!</h1>
                 <img src={separator} alt="icone" />
                 <p>
                     De o próximo passo para seu futuro,<br/>
                     que a força esteja com você.
                 </p>
             </section>

             <section>
             <img src={yoda} alt="yoda - star wars" />
             </section>
       </main>
      </div>

     </div>

   </>

    )
}

export default Home; 