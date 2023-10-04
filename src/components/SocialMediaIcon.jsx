import React from 'react';
import {  GithubSvg, LinkedinSvg, TwitterSvg } from '../assets/svgs';

const SocialMediaIcons = ({ isDarkMode }) => {
  return (
    <div className={`flex justify-center md:justify-start my-10 gap-7`}>
      <a 
        className='hover:opacity-50 transition duration-500 bg-white p-2 rounded-full'
        href='https://www.linkedin.com/in/joseph-irirwanirira/'
        target='_blank'
        rel='noreferrer'
      >
        < LinkedinSvg isDarkMode={isDarkMode}/>
      </a>

      <a
        className={`hover:opacity-50 transition duration-500  bg-white p-2 rounded-full`}
        href='https://twitter.com/Iri_joseph'
        target='_blank'
        rel='noreferrer'
      >
        < TwitterSvg isDarkMode={isDarkMode}/>

      </a>

      <a
        className='hover:opacity-50 transition duration-500  bg-white p-2 rounded-full '
        href='https://github.com/Irirwanirira'
        target='_blank'
        rel='noreferrer'
      >
       < GithubSvg  isDarkMode={isDarkMode}/>
      </a>
    </div>
  );
};

export default SocialMediaIcons;

