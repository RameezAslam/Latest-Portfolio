import React from 'react'
import { motion } from 'framer-motion';

function Experience() {
  return (
    <div className='container py-8 px-4 mx-auto md:py-12 md:px-16 mt-12 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-lg'>
        <motion.section id='experience' 
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
            className='text-4xl text-lightning-aqua-600 font-bold'>Work Experience</motion.h1>
            
            <div className='mt-8'>
                <p 
                 initial={{ opacity: 0, y: 120 }}  
                 whileInView={{ opacity: 1, y: 0 }} 
                 transition={{ duration: 1 }}  
                 viewport={{  amount: 0.25 }}
                 className='text-lg text-gray-600 dark:text-gray-400'>
                    As a passionate frontend developer, I have had the opportunity to work on various challenging and rewarding projects. 
                    My experience spans across building responsive and high-performance web applications, designing interactive user interfaces with ReactJS, integrating APIs, and ensuring seamless cross-browser compatibility. 
                    Throughout my journey, I have focused on delivering clean, maintainable code while optimizing user experiences.
                </p>

                  <div className="mt-6">
                    <h2 className='text-xl font-semibold text-lightning-aqua-600'>Frontend Developer Intern - DevelopersHub Corporation</h2>
                    <p 
                     initial={{ opacity: 0, y: 120 }}  
                    whileInView={{ opacity: 1, y: 0 }} 
                    transition={{ duration: 1 }}  
                    viewport={{  amount: 0.25 }}
                    className='text-sm text-gray-600 dark:text-gray-400'>March 2025 – May 2025</p>
                     <p 
                      initial={{ opacity: 0, y: 120 }}  
                      whileInView={{ opacity: 1, y: 0 }} 
                      transition={{ duration: 1 }}  
                     viewport={{  amount: 0.25 }}
                    className='text-lg text-gray-600 dark:text-gray-400 mt-4'>
                         During my internship at DevelopersHub, I was tasked with designing a responsive e-commerce website. The focus of the project was on creating an intuitive and user-friendly interface that would be adaptable across various screen sizes.
                    </p>
                    <p 
                     initial={{ opacity: 0, y: 120 }}  
                     whileInView={{ opacity: 1, y: 0 }} 
                     transition={{ duration: 1 }}  
                     viewport={{  amount: 0.25 }}
                     className='text-lg text-gray-600 dark:text-gray-400 mt-4'>
                        In the second phase of my internship, I worked on developing the **Nexis Business App**, a platform where entrepreneurs and investors could connect for potential funding opportunities. The app allowed entrepreneurs to seek funding, while investors could explore and support startups.
                    </p>
                    <ul className='list-disc ml-8 text-lg text-gray-600 dark:text-gray-400 mt-2'>
                        <li>Developed and implemented the entire UI using ReactJS, ensuring a responsive and accessible design</li>
                        <li>Built user registration and authentication features (Login/Signup) using ReactJS, with seamless user flows for entrepreneurs and investors</li>
                        <li>Created a dynamic chat system between investors and entrepreneurs, enabling them to exchange predefined messages about funding opportunities</li>
                        <li>Utilized modern tools like Radix UI, `clsx`, `cn`, `twmerge` to improve UI components, ensuring flexibility, consistency, and responsiveness</li>
                        <li>Collaborated with a remote team of developers, ensuring efficient communication and project progress</li>
                    </ul>
                </div>
            </div>

                <div className="mt-6">
                    <h2 className='text-xl font-semibold text-lightning-aqua-600'>Frontend Developer Intern - Genius Operators</h2>
                    <p 
                     initial={{ opacity: 0, y: 120 }}  
                    whileInView={{ opacity: 1, y: 0 }} 
                    transition={{ duration: 1 }}  
                    viewport={{  amount: 0.25 }}
                     className='text-sm text-gray-600 dark:text-gray-400'>October 2024 – March 2025</p>
                    <p 
                     initial={{ opacity: 0, y: 120 }}  
                    whileInView={{ opacity: 1, y: 0 }} 
                    transition={{ duration: 1 }}  
                    viewport={{  amount: 0.25 }}
                        className='text-lg text-gray-600 dark:text-gray-400 mt-4'>
                        During my internship at Genius operators, my main task was to make changes in UI/UX and maintain the frontend part of the websites. The focus was on HTML, CSS, and JavaScript.
                    </p>
                    <ul className='list-disc ml-8 text-lg text-gray-600 dark:text-gray-400 mt-2'>
                        <li>Developed and maintained responsive web pages using HTML,CSS, and JavaScript</li>
                        <li>Collaborated with the team to improve UI/UX designs and ensure cross-browser compatibility.</li>
                        <li>Learned React.js, Bootstrap, and Tailwind CSS while practicing modern frontend workflows.</li>
                        <li>Fixed bugs and optimized frontend code to enhance performance.
                            Used Git/GitHub for version control and project collaboration.</li>
                    </ul>
                </div>
          </motion.section>   
    </div>
  )
}

export default Experience
