import React, { useState, useEffect } from 'react'
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import Modal from './components/modals'
import HeroSection from './components/heroSection'
import KnowledgeDomain from './components/services'
import ProjectPage from './components/projects'
import RightCTA from './components/rightcta'
import About from './components/about'
import Technologies from './components/technologies'
import GetQuote from './components/getQuote'
import Footer from './components/footer'
import WhatCurrentlyLearning from './components/whCulearn'


function App() {
  const [theme, setTheme] = useState(null);

  useEffect(() => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  }, []);

  useEffect(() => {
    if(theme === 'dark'){
      document.documentElement.classList.add('dark');
    }else{
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const wasViewed = window.localStorage.getItem('important-information-viewed')
  const {texts} = useTypewriter({
    words : ['Developer', 'Designer', 'cooking', 'Whatever'],
    loop : {},
    typeSpeed : 120,
    deleteSpeed : 80,
    delaySpeed : 80,
  });

  const handleThemeSwitcher = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  }

  return (
    <main className='md:max-w-full lg:max-w-full sm:max-w-max mx-auto sm:px-4 lg:px-4 bg-gray-100 dark:bg-slate-800 overflow-hidden'>
      <button
      type="button"
      onClick={handleThemeSwitcher}
      className='absolute z-10 right-6 top-2 bg-gradient-to-r from-cyan-500 to-sky-700 hover:bg-bg-gradient-to-r hover:from-sky-700 hover:to-indigo-300 text-lg p-2 rounded-md drop-shadow-xl'
      >
        {theme === 'dark' ? 'Switch-light' : 'Switch-dark'}
      </button>
      <div className='flex justify-center content-center px-4 py-4 bg-gray-200 dark:bg-slate-700'>
          {
            !wasViewed && (
              <h1 className='text-3xl md:text-3xl sm:text-xl sm:max-w-sm: mb-2 md:mb-3 font-bold text-indigo-700 dark:text-sky-400'>
                Check this out{' '}
                <span style={{color: 'green'}}>
                  {texts}
                  <Cursor cursorColor='red' cursorStyle='>>'/>
                  <Modal />
                </span>
              </h1>
            )
          }
          
          {wasViewed && (
            <div className='px-4 py-4'>
            <h1 className='text-xl md:text-3xl mb-2 md:mb-3 font-semibold text-center dark:text-sky-400'>
            I understand, Sorry to see you go
            </h1>
            <p className="my-4 text-gray-500 text-lg leading-relaxed">
            I'm sorry to hear that you're not interested in my video CV. I put a bit of work into creating it, but I understand that everyone's preferences are different. If you change your mind in the future, please feel free to give it a watch but from a different browser &#128540; &#128540;.
            </p>
            </div>
            )
          }
      </div>
      <HeroSection />
      <About />

      <ProjectPage />
      <div className='max-w-5xl mx-auto w-11/12 flex flex-col justify-center items-center m-2 bg-slate-200 dark:bg-slate-700'>
        <KnowledgeDomain /> 
      </div>
      <Technologies />
      <RightCTA />
      <GetQuote />
      <WhatCurrentlyLearning />
      <Footer />
    </main>
    
  )
}

export default App