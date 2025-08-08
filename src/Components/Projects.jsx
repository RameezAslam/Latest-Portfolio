import React from 'react'
import amazon_img from '../assets/Projects-images/amazon-ss.png'
import online_shopping_img from '../assets/Projects-images/online-shopping-ss.png'
import nexis_img from '../assets/Projects-images/nexis-ss.png'
import invoice_img from '../assets/Projects-images/invoice-ss.png'
import snake_img from '../assets/Projects-images/snake-game-ss.png'
import weather_img from '../assets/Projects-images/weather-app-ss.png'
import { motion } from 'framer-motion';

const ProjectCard = ({ imgSrc, title, description, link, techstack }) => {
  return (
    <motion.section 
     className="w-full lg:w-1/2 p-4"
       initial={{ opacity: 0, y: 120 }}  
        whileInView={{ opacity: 1, y: 0 }} 
        transition={{ duration: 1 }}  
        viewport={{  amount: 0.15 }} 
     >
         <a href={link} target="_blank" className="block">
      <div className="bg-gray-200 border-2 rounded-lg shadow-lg overflow-hidden group transform hover:scale-105 transition-all duration-300 ease-in-out">
        <img src={imgSrc} alt={title} className="w-full h-48 object-cover" />
        <div className="p-6">
          <h2 className="text-xl font-semibold text-gray-800 group-hover:text-lightning-aqua-600 transition-all duration-300">{title}</h2>
          <p className="text-gray-600 dark:text-gray-500 mt-2"> <span className='text-gray-600 font-semibold'>Tech Stack:</span> {techstack}</p>
          <p className="text-gray-600 dark:text-gray-500 mt-2">{description}</p>
        </div>
      </div>
      </a>
    </motion.section>
  );
};

function Projects() {

  return (
    <div className='container py-8 px-4 mx-auto md:py-12 md:px-16 mt-12'>
        <section id='projects'
         className='w-full'
         >
              <h1 className="text-4xl text-lightning-aqua-600 font-bold mb-8">Projects</h1>
              <p className='text-lg text-gray-600 dark:text-gray-400 mt-8'>
                Below, you'll find a selection of my projects that highlight my skills and expertise in frontend development. For a complete list of all my live projects and their corresponding source code, you can explore them on <span className='text-gray-800 font-semibold dark:text-white'> Netlify and GitHub.</span></p>
              <p className='text-lg text-gray-600 dark:text-gray-400 mt-4'>
                Please note that some of my <span className='text-gray-800 font-semibold dark:text-white'>React API projects </span> are not displayed on the live website due to technical limitations, but you can still access their full source code on GitHub.
               </p>
              <div className='flex flex-wrap justify-center mt-8'>
                  <ProjectCard
                  imgSrc={online_shopping_img}
                  title="Online Shopping Store" 
                  description="A fully responsive e-commerce store featuring essential functionalities like cart 
                  management, checkout, user authentication, and an AI-powered chatbot for enhanced customer 
                  experience. Includes a dynamic landing page and a detailed single product page." 
                  link='https://online-shopping-website-0.netlify.app/'
                  techstack='React.js, Redux, React-router, Framer motion, Tailwind CSS, AI-powered chatbot'
                />         
                <ProjectCard 
                  imgSrc={nexis_img}
                  title="Nexis Business App" 
                  description="Nexis Business App is a platform that connects entrepreneurs and investors
                  .Users can log in as either an entrepreneur seeking funding or an investor exploring new startups. 
                  The app features chat functionality, enabling seamless communication between users."
                  link='https://nexis-business-website.netlify.app/'
                  techstack='React.js, React-router, Tailwind CSS, Radix UI, clsx, cn, twmerge' 
                />
                 <ProjectCard 
                  imgSrc={amazon_img}
                  title="Amazon Frontend Clone" 
                  description="Amazon Frontend Clone built with JavaScript. 
                  Includes a dynamic shop page, cart functionality, and shipping calculations based on delivery dates
                   (with faster shipping options available at a higher rate). Also features a cart page and an order tracking page 
                   for a complete shopping flow."
                  link='https://amazon-frontend-copy.netlify.app/'
                  techstack='HTML, CSS, JavaScript, Fetch API, Local Storage' 
                />

                 <ProjectCard 
                  imgSrc={invoice_img}
                  title="Invoice App" 
                  description="App allows users to easily create, manage, and track invoices. Users can add 
                  new invoices, delete existing ones, and mark them as paid. The app also features customizable filters
                   to view invoices by status (Pending, Paid, or All). By clicking on any invoice, users can view 
                   detailed information."
                  link='https://redux-invoice-app.netlify.app/'
                  techstack='React.js, Redux, React-router, Tailwind CSS.' 
                />
                 <ProjectCard 
                  imgSrc={weather_img}
                  title="Weather App" 
                  description="Weather App built with JavaScript, fetches real-time weather data from an API to display
                   key information like temperature, humidity, and wind speed for cities around the world. A simple and
                    effective way to check the weather at any location globally."
                  link='https://styled-weather-app.netlify.app/'
                  techstack='CSS, JavaScript, HTML, OpenWeatherMap API' 
                />
                   <ProjectCard 
                  imgSrc={snake_img}
                  title="Snake Game" 
                  description="Snake Game built with JavaScript, offering a classic, interactive gaming experience. The game features smooth controls, real-time updates,
                   and a dynamic scoring system. A fun way to showcase my ability to create interactive applications and manage 
                   game logic."
                  link='https://javascript-snake-game-2d.netlify.app/'
                  techstack='CSS, JavaScript, HTML, local storage' 
                />
              </div>
              <p className='text-lg text-gray-600 dark:text-gray-400 mt-8'>
                These are just a few of my selected projects. Some of my <span className='text-gray-800 font-semibold dark:text-white'> React API projects, </span>  such as the
                 <span className='text-gray-800 font-semibold dark:text-white'> Currency Converter, Blog App, and JavaScript 
                  News App, </span>are currently experiencing technical issues in being displayed live. However, you can access 
                  their source code on <span className='text-gray-800 font-semibold dark:text-white'>GitHub. </span>  
                  Additionally, feel free to explore more of my exciting <span className='text-gray-800 font-semibold dark:text-white'>JavaScript games </span> 
                   available in my portfolio.
                </p>
           </section>
         </div>
  )
}

export default Projects