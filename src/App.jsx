import React from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger, SplitText } from 'gsap/all'

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
    <div className='flex-center h-[100vh]'>
        <h1 className='text-3xl text-indigo-500 name'>DARINA</h1>
    </div>
  )
}

export default App
