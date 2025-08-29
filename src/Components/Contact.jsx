import React from 'react'
import {Linkedin, Github, Phone,} from 'lucide-react'
import gmail_img from '../assets/Icons/gmail.png'
import { motion } from 'framer-motion'

function Contact() {
  return (
    <div className='w-full container mt-12 py-8 px-4 mx-auto md:py-12 md:px-16'>
        <motion.section
         id='contact'
         className='w-full'
        initial={{ opacity: 0, y: 120 }}  
        whileInView={{ opacity: 1, y: 0 }} 
        transition={{ duration: 1 }}  
        viewport={{  amount: 0.25 }} 
         >
            <motion.h1 
                 initial={{ opacity: 0, x: -180 }}  
                whileInView={{ opacity: 1, x: 0 }} 
                transition={{ duration: 2 }}  
                viewport={{  amount: 0.25 }}
            className='text-lightning-aqua-600 text-4xl font-bold'>Get in touch</motion.h1>
            <div className='flex flex-col items-center gap-8 mt-8'>
                <p className='text-gray-600 dark:text-gray-400 text-lg'>I’m always open to new opportunities and conversations. Whether you have a question, want to collaborate, or just want to chat about tech, feel free to reach out!</p>
                <div className='flex flex-col gap-4 mt-16 sm:flex-row sm:justify-center items-center sm:gap-12'>
                    <a href='https://www.linkedin.com/in/rameezaslam/' target='_blank' rel='noopener noreferrer' className='flex items-center gap-2 text-gray-600 hover:text-lightning-aqua-600 transition-colors'>
                        <Linkedin className='w-6 h-6' />
                        <span>LinkedIn</span>
                    </a>
                    <a href="https://github.com/RameezAslam" target='_blank' rel='nonopener nonreferrer' className='flex items-center gap-2 text-gray-600 hover:text-lightning-aqua-600 transition-colors'>
                         <Github className='w-6 h-6' />
                        <span>GitHub</span>
                    </a>
                    <div className='flex items-center gap-2 cursor-pointer text-gray-600 hover:text-lightning-aqua-600 transition-colors'>
                        <Phone />
                        <span>+92 334-4328041</span>
                    </div>
                    <div className='flex items-center gap-2 cursor-pointer'>
                        <img className='w-6 h-6' src={gmail_img} alt="Gmail-logo" />
                        <span className='text-gray-600 hover:text-lightning-aqua-600 transition-colors'>rameezaslam387@gmail.com</span>
                    </div>
                </div>
                <button className='bg-lightning-aqua-600 text-gray-700 hover:bg-transparent w-auto
            hover:text-lightning-aqua-600 transform transition duration-500 border border-lightning-aqua-600 px-4 py-2 rounded-full font-semibold'>
           <a href="https://www.linkedin.com/in/rameezaslam/" target='_blank' rel='noopener noreferrer' >Hire Me</a></button>
            </div>
        </motion.section>
    </div>
  )
}

export default Contact