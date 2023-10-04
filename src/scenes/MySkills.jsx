import LineGradient from '../components/LineGradient';
import { motion } from 'framer-motion';

const MySkills = ({isDarkMode}) => {
  const frontend = ['React.js', 'JavaScript', 'CSS', 'HTML'];
  const backend = ['Express', 'NodeJs', 'Ruby', 'Postgres'];
  const tools = [
    'Figma',
    'UI/UX',
    'Version Control',
    'Sass',
    'Tailwind CSS',
    'Testing',
    'npm',
    'AJAX',
    'JSON',
    'Docker',
    'Database',
    'Firebase'
  ];

  return (
    <section
      id='skills'
      className='mt-10 mb-24'
    >
      <div className='md:flex md:justify-center md:gap-16 mt:32'>
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
              My <span className='text-green'>SKILLS</span>
            </p>
            <div className='flex justify-center mt-5 mb-[3rem]'>
              <LineGradient width='w-1/3' />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Skills */}

      <div className='md:flex md: justify-around mt-16'>
        <motion.div
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.3 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <h1 className='text-yellow font-playfair font-semibold text-4xl mb-5'>
            Front-End
          </h1>
          <ul className='flex flex-col gap-[0.5rem] mt-[0.5rem]'>
            {frontend.map((skill) => (
              <li key={skill.id} className={`
              ${isDarkMode ? 'text-#fff': 'text-white'}  bg-green  border-1 p-2 font-semibold font-playfair text-center hover:scale-110 duration-500`}>
              {skill}
              </li>
            ))}
          </ul>
        </motion.div>
        <motion.div
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <h1 className='text-yellow font-playfair font-semibold text-4xl mb-5'>
            Back-End
          </h1>
          <ul className='flex flex-col gap-[0.5rem] mt-[0.5rem]'>
            {backend.map((skill) => (
              <li key={skill.id} className={`
              ${isDarkMode ? 'text-#fff': 'text-white'}  bg-green  border-1 p-2 font-semibold font-playfair text-center hover:scale-110 duration-500`}>
              {skill}
              </li>
            ))}
          </ul>
        </motion.div>
        <motion.div
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.9 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <h1 className='text-yellow font-playfair font-semibold text-4xl mb-5'>
            Tools
          </h1>
          <ul className='grid grid-cols-3 gap-[0.5rem] mt-[0.5rem] justify-between'>
            {tools.map((tool) => (
              <li key={tool.id} className={`
                ${isDarkMode ? 'text-#fff': 'text-white'}  bg-green  border-1 p-2 font-semibold font-playfair text-center hover:scale-110 duration-500`}>
                {tool}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default MySkills;
