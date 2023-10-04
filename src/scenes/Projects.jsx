import LineGradient from '../components/LineGradient';
import { motion } from 'framer-motion';
import Project from '../components/ProjectDisplay';

const works = [
  {
    id: 1,
    image: '../assets/rockets.png',
    title: 'Space Traveler',
    description:
      'This is a react project that renders rocket data as well as mission data from an API onto the UI. This SPA allows users to reserve rockets and join missions, once that is done their data will be rendered onto a profile page showing what has been reserved and/or joined.',
    language: ['JavaScript', 'CSS', 'React'],
    liveLink:
      'https://deploy-preview-32--strong-heliotrope-adde83.netlify.app/',
    source: 'https://github.com/Irirwanirira/space-x-react-project',
  },
  {
    id: 2,
    image: '../assets/netFlix.png',
    title: 'Netflix Clone',
    description:
      "The interface of this React application is designed to display a list of movies sourced from TMD. However, the user needs to register and log in to access the app. Firebase stores all user details for authentication purposes. Unfortunately, the TMD database doesn't provide us with links to stream the entire movie collection. Therefore, we have only incorporated a single video for all the movies available in the app.",
    language: ['React', 'FireBase', 'StyleComponent'],
    liveLink: 'https://i-joseph-dev.netlify.app/',
    source: 'https://github.com/Irirwanirira/Netflix-clone',
  },
  {
    id: 3,
    image: '../assets/calculator.png',
    title: 'Math magician',
    description:
      'This is a simple app calculator, which helps to operate different basic mathematical operations like addition, multiplication, subtraction, and division.',
    language: ['HTML', 'CSS', 'JavaScript'],
    liveLink: 'https://magical-torte-c172f0.netlify.app/',
    source: 'https://github.com/Irirwanirira/math-magician',
  },

  {
    id: 4,
    image: '../assets/library.png',
    title: 'Library',
    description:
      'This is a library app that helps to control the library activities, it helps users to add books of their own and reserve books for reading if they want, all the library operations are saved on the database which is built with ruby on rails, it is simple to use for everyone.',
    language: ['React', 'CSS', 'Ruby-on-Rails'],
    liveLink: 'https://frontend-libba.onrender.com/signin',
    source: 'https://github.com/Irirwanirira/FinalCapstone-Back-End',
  },
];

const Projects = () => {
  return (
    <section
      id='projects'
      className='pt-[8rem] pb-[8rem]'
    >
      {/* Headings */}
      <motion.div
        className='md:w-2/4 mx-auto text-center'
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div>
          <p className='font-playfair font-semibold text-4xl mb-5'>
            My <span className='text-green'>Wo</span>rk
          </p>
          <div className='flex justify-center mt-5 mb-[3rem]'>
            <LineGradient width='w-1/3' />
          </div>
        </div>
      </motion.div>

      <Project works={works} />
    </section>
  );
};

export default Projects;
