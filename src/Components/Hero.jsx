import React from 'react'
import {useTypewriter, Cursor} from 'react-simple-typewriter'
import my_pic from '../Assets/my-pic-2-removebg-preview.png'
import { motion } from 'framer-motion'

function Hero() {
   const [text] = useTypewriter({
    words: ['Frontend Developer', 'Reactjs Developer', 'Wordpress Developer'],
    loop: true,
    delaySpeed: 1200,    // delay before re-typing
    typeSpeed: 120,      // typing speed in ms
    deleteSpeed: 80,     // backspacing speed
  })

  return (
    <div className='w-full mt-20 pt-12 min-h-screen font-sans-serif container mx-auto'>
        <section id='home' className='flex flex-col px-4 items-center justify-center space-y-12 md:flex-row md:items-center md:space-x-8 md:justify-around text-gray-900 dark:text-gray-100'>
            <motion.div
              initial={{ x: '-200px', opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 2, ease: 'easeInOut' }}
              viewport={{ once: true, amount: 0.25 }}
             className='flex flex-col items-center justify-center w-full md:w-1/2'>
                <h1 className='text-4xl text-lightning-aqua-dark font-bold'>Hello...</h1>
                <h2 className='text-2xl text-gray-600 dark:text-gray-400 font-semibold mt-4'>I'm Rameez and</h2>
                <h2 className='text-2xl text-gray-600 dark:text-gray-400 font-semibold mt-4'>I'm a <span className='text-2xl text-lightning-aqua-dark font-bold'> {text} <Cursor /> </span> </h2>
            </motion.div>
      <motion.div
          initial={{ x: '200px', opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 2, ease: 'easeInOut' }}
          viewport={{ once: true, amount: 0.25 }}
          className='w-full md:w-1/2 flex justify-center'>
        <div
          className="animate-slow-bounce transition inline-block rounded-full p-1  /* border thickness */ bg-gradient-to-br /* diagonal gradient */ from-lightning-aqua-500
              via-lightning-aqua-dim to-lightning-aqua-dark dark:from-lightning-aqua-dim dark:via-lightning-aqua-dark
            dark:to-lightning-aqua-500
          "
        >
          <div
            className="
              rounded-full p-1 bg-gray-100 dark:bg-gray-900 shadow-lg"
          >
            <img
              src={my_pic}
              alt="Personal pic"
              className="rounded-full w-60 h-60 object-cover"
            />
          </div>
        </div>
    </motion.div>
  </section>
       <div className='flex justify-start ml-6 sm:ml-12 md:ml-24 gap-4 mt-8'>
           <button className='bg-lightning-aqua-600 text-gray-700 hover:bg-transparent
            hover:text-lightning-aqua-600 transform transition duration-500 border border-lightning-aqua-600 px-4 py-2 rounded-full font-semibold'>
           <a href="#projects">See My Projects</a></button>
           <button className='bg-gray-700 text-white hover:bg-transparent
            hover:text-gray-700 hover:dark:text-white transform transition duration-500 border border-gray-700 px-4 py-2 rounded-full font-semibold'>
            Resume</button>
       </div>
</div>
  )
}

export default Hero