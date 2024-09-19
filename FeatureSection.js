import React from 'react';
import './Featuresec.css';
import MobCard from './New folder/Matchespic.png';

function FeatureSection() {
     return (
      <>
       <section className="features">
         <div className="container" id='contain'>
           <div className='images' id='overlay overlay_0'>
             <div className='brides-images'>
               <img src={MobCard} alt='' className='marriage-imgs'/>
             </div>
           </div>
         </div>
       </section>
       
     </>
     );
   }
   export default FeatureSection;
