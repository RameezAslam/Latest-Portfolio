import React from 'react'
import { motion } from 'framer-motion'

function AboutMe() {
  return (
    <motion.section id="about"
     className="container px-4 py-8 md:px-16 md:py-12 mx-auto mt-24 dark:bg-gray-800 bg-gray-100 rounded-lg shadow-lg"
        initial={{ opacity: 0, y: 120 }}  
        whileInView={{ opacity: 1, y: 0 }} 
        transition={{ duration: 1 }}  
        viewport={{  amount: 0.25 }} 
>
    <motion.h2
        initial={{ opacity: 0, x: -180 }}  
        whileInView={{ opacity: 1, x: 0 }} 
        transition={{ duration: 1 }}  
        viewport={{  amount: 0.25 }} 
       className="text-4xl font-semibold mb-8 text-lightning-aqua-600">About Me
       </motion.h2>
       
        <motion.p
          initial={{ opacity: 0, y: 120 }}  
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1 }}  
          viewport={{  amount: 0.25 }}
          className="text-lg leading-relaxed text-gray-500 dark:text-gray-400 mb-4">
          I’m a Frontend Developer who started my journey in August 2024. What began as a curiosity quickly grew into a passion for frontend development.
         </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 120 }}  
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1 }}  
          viewport={{  amount: 0.25 }}
           className="text-lg leading-relaxed text-gray-500 dark:text-gray-400 mb-4">
            Over the past year, I’ve focused on mastering the core web technologies, including HTML, CSS, JavaScript, and ReactJS. I’m also skilled in libraries and frameworks including Redux, Tailwind CSS, Bootstrap, Framer Motion, radix ui, shadcn/ui, clsx and twmerge.
         </motion.p>

        <motion.p 
           initial={{ opacity: 0, y: 120 }}  
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1 }}  
          viewport={{  amount: 0.25 }}
        className="text-lg leading-relaxed text-gray-500 dark:text-gray-400 mb-4">
          I’ve completed courses in HTML, CSS, and JavaScript from Meta, and I’m always working to improve my skills by learning new technologies. As a self-taught developer, I’m driven, motivated, and eager to take on new challenges.
        </motion.p>  

        <motion.p   
            initial={{ opacity: 0, y: 120 }}  
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1 }}  
          viewport={{  amount: 0.25 }}
        className="text-lg leading-relaxed text-gray-500 dark:text-gray-400">
          I’m also a quick learner, which allows me to adapt and grow with the latest trends in web development.
        </motion.p> 

    </motion.section>
  )
}

export default AboutMe