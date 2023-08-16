const SocialMediaIcons = () => {
  return (
    <div className='flex justify-center md:justify-start my-10 gap-7'>
      <a
        className='hover:opacity-50 transition duration-500'
        href='https://www.linkedin.com/in/joseph-irirwanirira/'
        target='_blank'
        rel='noreferrer'
      >
        <img
          src='../assets/linkedin.png'
          alt='linkedIn'
        />
      </a>

      <a
        className='hover:opacity-50 transition duration-500'
        href='https://twitter.com/Iri_joseph'
        target='_blank'
        rel='noreferrer'
      >
        <img
          src='../assets/twitter.png'
          alt='Twitter'
        />
      </a>

      <a
        className='hover:opacity-50 transition duration-500'
        href='https://github.com/Irirwanirira'
        target='_blank'
        rel='noreferrer'
      >
        <img
          src='../assets/github.png'
          alt='gitHub'
          className='w-[30px] h-[30px]'
        />
      </a>
    </div>
  );
};

export default SocialMediaIcons;
