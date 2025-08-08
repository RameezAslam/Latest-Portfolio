import React,{useEffect, useState} from 'react'
import ThemeToggle from './ThemeToggle';
import { Menu, X } from 'lucide-react'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('');

  const handleClick = (id) => {
    setActiveLink(id);
  };

  useEffect(() => {
    const sections = document.querySelectorAll('section');
    const links = document.querySelectorAll('.nav-link');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        const sectionId = entry.target.id;
        const link = document.querySelector(`a[href="#${sectionId}"]`);

        if (entry.isIntersecting) {
          link.classList.add('text-lightning-aqua-600', 'dark:text-lightning-aqua-500', 'font-semibold');
        } else {
            link.classList.remove('text-lightning-aqua-600', 'dark:text-lightning-aqua-500', 'font-semibold');
        }
      });
    }, {
      threshold: 0.25,
    });

    sections.forEach(section => {
      observer.observe(section);
    });

    // Cleanup observer on unmount
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className='w-full font-sans-serif'>
        <nav className='flex items-center justify-between px-8 py-6 bg-gray-100 dark:bg-gray-800 shadow-md top-0 fixed w-full z-50'>
            <div className='text-3xl font-bold text-lightning-aqua-600 dark:text-lightning-aqua-500'>
                Rameez
            </div>
            <div>
                <ul className='items-center justify-center space-x-8 hidden md:flex'>
                    <li onClick={() => handleClick('about')} className='inline-block font-semibold text-gray-500 dark:text-gray-400 nav-link'>
                        <a href="#about"
                        className={`hover:text-lightning-aqua-600 ${activeLink === 'about' ? 'text-lightning-aqua-600 font-semibold' : ''} dark:hover:text-lightning-aqua-500 transform transition duration-500`}>About</a>
                    </li>
                    <li onClick={() => handleClick('skills')} className='inline-block font-semibold text-gray-500 dark:text-gray-400 nav-link'>
                        <a href="#skills"
                         className={`hover:text-lightning-aqua-600 ${activeLink === 'skills' ? 'text-lightning-aqua-600 font-semibold' : ''} dark:hover:text-lightning-aqua-500 transform transition duration-500`}>Skills</a>
                    </li>
                    <li onClick={() => handleClick('experience')} className='inline-block font-semibold text-gray-500 dark:text-gray-400 nav-link'>
                        <a href="#experience"
                         className={`hover:text-lightning-aqua-600 ${activeLink === 'experience' ? 'text-lightning-aqua-600 font-semibold' : ''} dark:hover:text-lightning-aqua-500 transform transition duration-500`}>Experience</a>
                    </li>
                    <li onClick={() => handleClick('projects')} className='inline-block font-semibold text-gray-500 dark:text-gray-400 nav-link'>
                        <a href="#projects"
                         className={`hover:text-lightning-aqua-600 ${activeLink === 'projects' ? 'text-lightning-aqua-600 font-semibold' : ''} dark:hover:text-lightning-aqua-500 transform transition duration-500`}>Projects</a>
                    </li>
                    <li onClick={() => handleClick('contact')} className='inline-block font-semibold text-gray-500 dark:text-gray-400 nav-link'>
                        <a href="#contact" 
                        className={`hover:text-lightning-aqua-600 ${activeLink === 'contact' ? 'text-lightning-aqua-600 font-semibold' : ''} dark:hover:text-lightning-aqua-500 transform transition duration-500`}>Contact</a>
                    </li>
                </ul>
            </div>
            <div className='flex items-center'>
                <ThemeToggle />
                <button 
                    className='ml-4 p-2 rounded focus:outline-none focus:ring md:hidden'
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Menu Toggle"
                >
                    <Menu size={24} className="text-gray-800 dark:text-white" />
                </button>
                    <div className={`fixed top-0 right-0 pl-4 h-full w-64 bg-white dark:bg-gray-900 dark:text-white shadow-lg z-50 transform transition-transform duration-300 ${
                    isOpen ? 'translate-x-0' : 'translate-x-full'
                 }`}>
                      <button>
                        <X size={24} className="text-gray-800 dark:text-white absolute top-2 right-2" onClick={() => setIsOpen(false)} />
                      </button>
                        <ul className='px-2 py-4'>
                            <li onClick={() => handleClick('about')} className='py-3 nav-link'>
                                <a href="#about"
                                 className={`hover:text-lightning-aqua-600 ${activeLink === 'about' ? 'text-lightning-aqua-600 font-semibold' : ''} dark:hover:text-lightning-aqua-500 transform transition duration-500`}>About</a>
                            </li>
                            <li onClick={() => handleClick('skills')} className='py-3 nav-link'>
                                <a href="#skills"
                                className={`hover:text-lightning-aqua-600 ${activeLink === 'skills' ? 'text-lightning-aqua-600 font-semibold' : ''} dark:hover:text-lightning-aqua-500 transform transition duration-500`}>Skills</a>
                            </li>
                              <li onClick={() => handleClick('experience')} className='py-3 nav-link'>
                                <a href="#experience"
                                 className={`hover:text-lightning-aqua-600 ${activeLink === 'experience' ? 'text-lightning-aqua-600 font-semibold' : ''} dark:hover:text-lightning-aqua-500 transform transition duration-500`}>Experience</a>
                            </li>
                            <li onClick={() => handleClick('projects')} className='py-3 nav-link'>
                                <a href="#projects"
                                 className={`hover:text-lightning-aqua-600 ${activeLink === 'projects' ? 'text-lightning-aqua-600 font-semibold' : ''} dark:hover:text-lightning-aqua-500 transform transition duration-500`}>Projects</a>
                            </li>
                            <li onClick={() => handleClick('contact')} className='py-3 nav-link'>
                                <a href="#contact"
                                className={`hover:text-lightning-aqua-600 ${activeLink === 'contact' ? 'text-lightning-aqua-600 font-semibold' : ''} dark:hover:text-lightning-aqua-500 transform transition duration-500`}>Contact</a>
                            </li>
                        </ul>
                    </div>
         {isOpen && (
            <div
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black bg-opacity-40 z-40"
            />
          )} 
            </div>
        </nav>
     </div>
  )
}

export default Navbar