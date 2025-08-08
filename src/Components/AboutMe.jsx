import React from 'react'
import { motion } from 'framer-motion'

function AboutMe() {
  return (
    <motion.section id="about"
     className="container px-4 py-8 md:px-16 md:py-12 mx-auto mt-24"
        initial={{ opacity: 0, y: 120 }}  
        whileInView={{ opacity: 1, y: 0 }} 
        transition={{ duration: 1 }}  
        viewport={{  amount: 0.25 }} 
>
    <h2 className="text-4xl font-semibold mb-8 text-lightning-aqua-600">About Me</h2>
        <p className="text-lg leading-relaxed text-gray-500 dark:text-gray-400 mb-4">
          I’m a Frontend Developer who started my journey in August 2024. What began as a curiosity quickly grew into a passion for frontend development.
         </p>
          <p className="text-lg leading-relaxed text-gray-500 dark:text-gray-400 mb-4">
            Over the past year, I’ve focused on mastering the core web technologies, including HTML, CSS, JavaScript, and ReactJS. I’m also skilled in libraries and frameworks including Redux, Tailwind CSS, Bootstrap, Framer Motion, and beginner in radix ui, clsx, cn and twmerge.
         </p> 
        <p className="text-lg leading-relaxed text-gray-500 dark:text-gray-400 mb-4">
          I’ve completed courses in HTML, CSS, and JavaScript from Meta, and I’m always working to improve my skills by learning new technologies. As a self-taught developer, I’m driven, motivated, and eager to take on new challenges.
        </p>  
        <p className="text-lg leading-relaxed text-gray-500 dark:text-gray-400">
          I’m also a quick learner, which allows me to adapt and grow with the latest trends in web development.
        </p> 
    </motion.section>
  )
}

export default AboutMe