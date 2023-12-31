import { useEffect, useState } from 'react';
import useMediaQuery from './hooks/useMediaQuery';
import Navbar from './scenes/Navbar';
import DotGroup from './scenes/DotGroup';
import Landing from './scenes/Landing';
import MySkills from './scenes/MySkills'
import Projects from './scenes/Projects'
// import Testimonials from './scenes/Testimonials'
import Contact from './scenes/Contact'
import Footer from './scenes/Footer'


// import LineGradient from './components/LineGradient';

function App() {
  const [selectedPage, setSelectedPage] = useState('home');
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)")
  const [isTopOfPage, setIsTopOfPage] = useState(true)
  const [isDarkMode, setIsDarkMode]= useState(false)

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  useEffect(()=> {
    const handleScroll = () => {
      if(window.scrollY === 0) setIsTopOfPage(true);
      if(window.scrollY !== 0) setIsTopOfPage(false);
    }

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  },[]);

  return (
    <div className={isDarkMode ? "app bg-deep-blue flex flex-col": "bg-white text-black"}>
      <Navbar 
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
        isDarkMode={isDarkMode}
        toggleDarkMode={toggleDarkMode}
      />

            <div className='w-5/6 mx-auto md:h-full'>
        {isAboveMediumScreens && (
          <DotGroup
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
          />
        )}
        <Landing  setSelectedPage={setSelectedPage}/>
      </div>
      
      <div  className='w-5/6 mx-auto'>
        <MySkills isDarkMode={isDarkMode}
/>
      </div>

      <div  className='w-5/6 mx-auto'>
        <Projects />
      </div>

      <div  className='w-5/6 mx-auto mb-[2rem]'>
        <Contact />
      </div>

      <div className='content-end'>
      <Footer />
      </div>

      </div>
  );
}

export default App;
