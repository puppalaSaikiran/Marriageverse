import React from 'react'
import Brides from './New folder/BridesImgs.png';
import '../components/pics.css'

function pics() {
  return (
    <div className='container-fluid'>
      <div className='img-container'>
      <img src={Brides} alt='bride images' className='mainImg'/>
      {/* <img src={Brides} alt='bride images' className='' style={{width:'98vw'}}/> */}
      </div>
    </div>
  )
}

export default pics

















// import React, { useEffect, useRef, useState } from 'react';
// import './pics.css';
// import first from './New folder/first.png';
// import second from './New folder/second.png';
// import middle from './New folder/middle.png';
// import fourth from './New folder/fourth.png';
// import last from './New folder/last.png';

// function Pics() {
//   const wrapperRef = useRef(null);
//   const images = [first, second, middle, fourth, last];
//   const [isPaused, setIsPaused] = useState(false);
//   const [isMobile, setIsMobile] = useState(false);

//   useEffect(() => {
//     const checkMobile = () => {
//       setIsMobile(window.innerWidth <= 768);
//     };
    
//     checkMobile();
//     window.addEventListener('resize', checkMobile);
    
//     return () => window.removeEventListener('resize', checkMobile);
//   }, []);

//   useEffect(() => {
//     if (isMobile) return; // Don't auto-scroll on mobile

//     const wrapper = wrapperRef.current;
//     let animationFrameId;
//     let scrollAmount = 0;
//     const step = 0.5;

//     const scroll = () => {
//       if (!isPaused && wrapper) {
//         scrollAmount += step;
//         wrapper.scrollLeft = scrollAmount;

//         if (scrollAmount >= wrapper.scrollWidth / 2) {
//           scrollAmount = 0;
//         }

//         animationFrameId = requestAnimationFrame(scroll);
//       }
//     };

//     animationFrameId = requestAnimationFrame(scroll);

//     return () => {
//       cancelAnimationFrame(animationFrameId);
//     };
//   }, [isPaused, isMobile]);

//   const handleMouseEnter = () => !isMobile && setIsPaused(true);
//   const handleMouseLeave = () => !isMobile && setIsPaused(false);

//   return (
//     <div 
//       className="carousel-container"
//       onMouseEnter={handleMouseEnter}
//       onMouseLeave={handleMouseLeave}
//     >
//       <div className="wrapper" ref={wrapperRef}>
//         {[...images, ...images, ...images].map((src, index) => (
//           <div className="card" key={index}>
//             <img src={src} alt={`Image ${index + 1}`} />
//             <div className="info">
//               {/* You can add more information here if needed */}
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Pics;


