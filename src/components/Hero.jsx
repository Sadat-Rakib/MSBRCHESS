import React, { useRef, useEffect } from 'react';
import './Hero.css';
import Navbar from './Navbar';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Tilt from 'react-parallax-tilt';
gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const kingRef = useRef(null);
  const heroRef = useRef(null);
  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const section3Ref = useRef(null);
  useEffect(() => {
    const h1 = document.querySelector('.hero-heading');
    const p = document.querySelector('.hero-subtext');
    const btn = document.querySelector('.hero-button');
  
    gsap.set([h1, p, btn], { y: 80, opacity: 0 });
  
    gsap.to(h1, {
      y: 0,
      opacity: 1,
      delay: 3,
      duration: 1,
      ease: 'power3.out',
    });
  
    gsap.to(p, {
      y: 0,
      opacity: 1,
      delay: 3.3,
      duration: 1,
      ease: 'power3.out',
    });
  
    gsap.to(btn, {
      y: 0,
      opacity: 1,
      delay: 3.6,
      duration: 1,
      ease: 'power3.out',
    });
  }, []);
  
  useEffect(() => {
    const heading = document.querySelector('.section1-heading');
    const para = document.querySelector('.section1-para');
  
    if (!heading || !para) return;
  
    gsap.set([heading, para], { opacity: 0, x: 100 });
  
    gsap.to(heading, {
      scrollTrigger: {
        trigger: section1Ref.current,
        start: 'top 50%',
        toggleActions: 'play none none none',
      },
      opacity: 1,
      x: 0,
      duration: 1,
      ease: 'power3.out',
    });
  
    gsap.to(para, {
      scrollTrigger: {
        trigger: section1Ref.current,
        start: 'top 50%',
        toggleActions: 'play none none none',
      },
      opacity: 1,
      x: 0,
      duration: 1,
      delay: 0.3,
      ease: 'power3.out',
    });
  }, []);
  
  useEffect(() => {
    const heading = document.querySelector('.section2-heading');
    const para = document.querySelector('.section2-para');
  
    if (!heading || !para) return;
  
    gsap.set([heading, para], { opacity: 0, y: 60 });
  
    gsap.to(heading, {
      scrollTrigger: {
        trigger: section2Ref.current,
        start: 'top 50%',
        toggleActions: 'play none none none',
      },
      opacity: 1,
      y: 0,
      duration: 1,
      ease: 'power3.out',
    });
  
    gsap.to(para, {
      scrollTrigger: {
        trigger: section2Ref.current,
        start: 'top 45%',
        toggleActions: 'play none none none',
      },
      opacity: 1,
      y: 0,
      duration: 1,
      delay: 0.2,
      ease: 'power3.out',
    });
  }, []);
  
  useEffect(() => {
    const overlay = document.querySelector('.section3-overlay');
    const h1 = overlay.querySelector('h1');
    const p = overlay.querySelector('p');
    const btn = overlay.querySelector('button');
  
    const showOverlay = gsap.timeline({ paused: true });
  
    showOverlay.to(overlay, {
      opacity: 1,
      duration: 1,
      delay: 3,
      pointerEvents: 'auto',
    });
  
    showOverlay.to(h1, {
      y: 0,
      opacity: 1,
      duration: 1,
      delay: 0.3,
      ease: 'power3.out',
    });
  
    showOverlay.to(p, {
      y: 0,
      opacity: 1,
      duration: 1,
      delay: 0.3,
      ease: 'power3.out',
    });
  
    showOverlay.to(btn, {
      y: 0,
      opacity: 1,
      duration: 1,
      delay: 0.3,
      ease: 'power3.out',
    });

    ScrollTrigger.create({
      trigger: section3Ref.current,
      start: 'top center',
      end: 'bottom top',
      onEnter: () => showOverlay.play(),
      onLeaveBack: () => {
        gsap.to(overlay, {
          opacity: 0,
          duration: 0.5,
          pointerEvents: 'none',
        });
        gsap.set([h1, p, btn], {
          opacity: 0,
          y: 80,
        });
        showOverlay.pause(0); 
      },
     
    });
  }, []);
  

  useEffect(() => {
    const heroImg = kingRef.current;
    const section1 = section1Ref.current;
    const section2 = section2Ref.current;
    const section3 = document.querySelector('.section3'); 
  
    if (!heroImg || !section1 || !section2 || !section3) return;
  
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section1,
        start: 'top 70%',
        endTrigger: section3,
        end: 'top center',
        scrub: true,
        
      },
    });
  
    
    tl.to(heroImg, {
      x: 700,
      y: 810,
      scale: 1.0,
      rotate: -30,
      ease: 'power2.out',
    });
  
    tl.to(heroImg, {
      x: 1250,
      y: 1110,
      scale: 0.87,
      rotate: 10,
      ease: 'power2.inOut',
    });
  
    tl.to(heroImg, {
      x: 1830,
      y: 1890,
      scale: 1.9,
      rotate: -30,
      ease: 'power2.inOut',
    });
  
  }, []);
  

  return (
  <>
  <div className="hero-container" ref={heroRef}>
    <Navbar />
    <video className="hero-video" autoPlay muted loop playsInline>
      <source src="/videos/hero.mp4" type="video/mp4" />
    </video>    
    <div className="hero-content"><Tilt
          className="tilt-wrapper"
          tiltMaxAngleX={20}
          tiltMaxAngleY={20}
          scale={1.03}
          gyroscope={true}
          transitionSpeed={2000}
          perspective={2000}
          style={{ width: 'fit-content', margin: '0 auto' }}
        >
  <h1 className="hero-heading">The Chess Awakens</h1>
  <p className="hero-subtext">From scattered chaos to strategy — scroll to begin.</p>
  <button className="hero-button">Enter the Realm</button>
  </Tilt>
</div>

  </div>

  <div className="hero-model1">
    <img
      src="./images/king.png"
      alt=""
      className="hero-img"
      ref={kingRef}
    />
  </div>
  <div className="section1" ref={section1Ref}>
  <div className="section1-left">
  </div>
  <div className="section1-right">
    <h1 className="section1-heading">Master Every Move</h1>
    <p className="section1-para">
      In the world of chess, every move matters. Whether you're opening strong or defending with grace, each piece tells a story. <br /><br />
      At MSBRChess, we help you decode those stories — from timeless tactics to modern strategies — so you’re never just playing; you're commanding.
    </p>
  </div>
</div>

  <div className="section2" ref={section2Ref}>
  <div className="section2-top">
    <div></div>
    <img src="/images/section2.png" alt="White King" className="king-img" />
  </div>
  <h1 className="section2-heading">The Battle Begins</h1>
  <p className="section2-para">A timeless clash of strategy and elegance—where power meets precision, and every move counts.</p>
</div>

<div className="section3" ref={section3Ref}>
  <img src="./images/section3-1.png" alt="" className="section3-img" />

  <div className="section3-overlay">
  <Tilt
          className="tilt-wrapper"
          tiltMaxAngleX={20}
          tiltMaxAngleY={20}
          scale={1.03}
          gyroscope={true}
          transitionSpeed={2000}
          perspective={2000}
          style={{ width: 'fit-content', margin: '0 auto' }}
        >
    <h1>Checkmate is Inevitable</h1>
    <p>Even the mightiest fall when strategy is supreme.</p>
    <button>Play Your First Game Perfectly</button>
    </Tilt>
  </div>
</div>


</>

  );
};

export default Hero;
