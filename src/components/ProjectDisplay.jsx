import React from 'react';
import { motion } from 'framer-motion';
import LineGradient from './LineGradient';
import { darkMode } from '../assets/svgs';

const Project = ({ works }) => {
  return (
    <div>
      {works &&
        works.map((completed) => {
          return (
            <motion.div
              initial='hidden'
              whileInView='visible'
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 },
              }}
              key={completed.id}
            >
              <motion.div className='flex flex-col sm:flex-row sm:justify-between sm:items-start sm:gap-[3rem] mb-[3rem] border-b-2 transition duration-500'>
                <div className='h-[15rem] sm:w-1/2 sm:h-[23rem] hover:scale-90 duration-300'>
                  <img
                    src={completed.image}
                    alt={completed.title}
                    className='w-full h-full rounded-t-md hover:opacity-90'
                  />
                </div>

                <motion.div
                  className='sm:w-1/2'
                  initial='hidden'
                  whileInView='visible'
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                  variants={{
                    hidden: { opacity: 0, x: -50 },
                    visible: { opacity: 1, x: 0 },
                  }}
                >
                  <div className='flex flex-col justify-end gap-[1rem] font'>
                    <p className='text-2xl font-playfair text-yellow'>
                      {' '}
                      {completed.title}
                    </p>
                    <LineGradient
                      width='w-[10%]'
                      className='self-baseline'
                    />
                  </div>
                  <p className='my-7 font-semibold font-opensans'>
                    {completed.description}
                  </p>
                  <div className='flex items-center gap-5 my-4'>
                    {completed.language &&
                      completed.language.map((skill) => {
                        return (
                          <p
                            key={skill.id}
                            className='text-green bg-[#b4b0b0] p-2'
                          >
                            {skill}
                          </p>
                        );
                      })}
                  </div>

                  <div className='flex gap-[2rem]'>
                    <button className={ `${darkMode ? "text-white" : "text-black"} border-2 p-2 my-4 font-semibold font-playfair bg-green`}>
                      <a
                        href={completed.liveLink}
                        target='blank'
                        className=' '
                      >
                        On Site
                      </a>
                    </button>
                    <button className='border-2 p-2 my-4 font-semibold font-playfair'>
                      <a
                        href={completed.source}
                        target='blank'
                        className=' '
                      >
                        On GitHub
                      </a>
                    </button>
                  </div>
                </motion.div>

                <div></div>
              </motion.div>
            </motion.div>
          );
        })}
    </div>
  );
};
export default Project;
