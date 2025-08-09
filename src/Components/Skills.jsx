import React,{useState,useEffect} from 'react'
import html_logo from '../assets/Icons/html-5.png';
import css_logo from '../assets/Icons/css.png';  
import js_logo from '../assets/Icons/js.png';
import react_logo from '../assets/Icons/React.png';
import tailwind_logo from '../assets/Icons/Tailwind CSS.png';
import bootstrap_logo from '../assets/Icons/Bootstrap.png';
import git_logo from '../assets/Icons/git.png';
import github_logo from '../assets/Icons/github.png';
import figma_logo from '../assets/Icons/Figma.png';
import vite_logo from '../assets/Icons/Vite.js.png';
import wordpress_logo from '../assets/Icons/wordpress.png';
import { motion } from 'framer-motion';

const skillBarClass = 'transition-all duration-1000 ease-in-out';


const Skill = ({ logo, skillName, skillLevel }) => (
  <div className="w-32 text-center">
    <div className="mb-4">
      <img src={logo} alt={skillName} className="w-16 h-16 mx-auto" />
    </div>
    <div className="w-full bg-gray-200 h-2 rounded-full">
      <div
        className={`h-full bg-lightning-aqua-600 dark:bg-lightning-aqua-700 rounded-full ${skillBarClass}`}
        style={{ width: `${skillLevel}%` }}
      ></div>
    </div>
    <p className="text-sm text-gray-800 dark:text-gray-400 mt-2 font-semibold">{skillName}</p>
  </div>
);

function Skills() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      { threshold: 1.0 }
    );

    const section = document.querySelector("#skills");
    if (section) {
      observer.observe(section);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className='container py-8 px-4 mx-auto md:py-12 md:px-16 mt-12'>
        <motion.section id='skills'
         className='w-full'
        initial={{ opacity: 0, y: 120 }}  
        whileInView={{ opacity: 1, y: 0 }} 
        transition={{ duration: 1 }}  
        viewport={{  amount: 0.25 }} 
         >
            <h1 className='text-4xl text-lightning-aqua-600 font-bold mb-16'>Skills</h1>
             <div className="flex justify-around flex-wrap gap-x-4 gap-y-12 sm:gap-8 md:gap-16">
          <Skill
            logo={html_logo}
            skillName="HTML"
            skillLevel={isVisible ? 90 : 0} 
          />
          <Skill
            logo={css_logo}
            skillName="CSS"
            skillLevel={isVisible ? 85 : 0} 
          />
          <Skill
            logo={js_logo}
            skillName="JavaScript"
            skillLevel={isVisible ? 70 : 0} 
          />
          <Skill
            logo={react_logo}
            skillName="ReactJS"
            skillLevel={isVisible ? 80 : 0} 
          />
            <Skill
            logo={tailwind_logo}
            skillName="Tailwind CSS"
            skillLevel={isVisible ? 80 : 0} 
          />
            <Skill
            logo={bootstrap_logo}
            skillName="Bootstrap"
            skillLevel={isVisible ? 70 : 0} 
          />
            <Skill
            logo={vite_logo}
            skillName="Vite.js"
            skillLevel={isVisible ? 85 : 0} 
          />
            <Skill
            logo={git_logo}
            skillName="Git"
            skillLevel={isVisible ? 85 : 0} 
          />
            <Skill
            logo={github_logo}
            skillName="GitHub"
            skillLevel={isVisible ? 85 : 0} 
          />
            <Skill
            logo={figma_logo}
            skillName="Figma"
            skillLevel={isVisible ? 70 : 0} 
          />
            <Skill
            logo={wordpress_logo}
            skillName="WordPress"
            skillLevel={isVisible ? 70 : 0} 
          />
        </div>
        <h1 className='text-4xl text-lightning-aqua-600 font-bold mt-32'>Additional Skills</h1>
        <p className='text-lg text-gray-600 dark:text-gray-400 mt-8'>
          In addition to the skills showcased above, I am familiar with tools and technologies like <span className='text-gray-800 font-semibold dark:text-white'> 
            Radix UI, clsx, cn, and twmerge.</span>  As an experienced <span className='text-gray-800 font-semibold dark:text-white'>prompt engineer,</span> 
           I leverage <span className='text-gray-800 font-semibold dark:text-white'> AI in my web development process</span>, utilizing platforms like <span className='text-gray-800 font-semibold dark:text-white'> ChatGPT </span>
            for efficient coding, visualizations, and reasoning. I am well-versed in various
           versions of ChatGPT, including <span className='text-gray-800 font-semibold dark:text-white'>GPT-4.0-mini and GPT-4.0-mini-high</span>, and I can strategically choose the
           most suitable version for specific tasks, ensuring optimal results.
        </p>

         </motion.section>   
    </div>
  )
}

export default Skills