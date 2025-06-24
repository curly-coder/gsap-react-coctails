import React from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger, SplitText } from 'gsap/all'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Cocktails from './components/Cocktails';
import About from './components/About';
import Art from './components/Art';
import Menu from './components/Menu';
import Contact from './components/Contact';

gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {

  useGSAP(() => {
    gsap.to('.name', {
        x: 200,
        duration: 2,
        ease: 'power1.inOut'
    })
  }, [])
  return (
   <main>
        <Navbar/>
        <Hero/>
        <Cocktails/>
        <About/>
        <Art/> 
        <Menu/>
        <Contact/>
   </main>
  )
}

export default App
