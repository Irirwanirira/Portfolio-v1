import { motion } from 'framer-motion';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import SocialMediaIcons from "../components/SocialMediaIcon";
import {HiArrowNarrowRight} from 'react-icons/hi'

const Landing = ({ setSelectedPage }) => {

    return (
        <section id='home' className="flex justify-start items-start md:justify-between md:items-center gap-16 py-10">

            {/* main section */}
            <div className="z-30 mt-[5rem] ms:mt-32">
                <motion.div
                    initial='hidden'
                    whileInView='visible'
                    viewport={{once:true, amount: 0.5}}
                    transition={{duration:0.5}}
                    variants={{
                        hidden:{opacity:0, x:-50},
                        visible:{opacity:1, x:0}
                    }}
                >

                    <p className="text-4xl font-playfair z-10 text-center sm:text-start mb-[3rem]">
                        Hi, I'm {""}
                        <span
                        className="text-6xl font-playfair z-10 sm:text-start text-green"
                        >
                                Joseph
                            
                        </span>
                    </p>
                    <h2 className='font-playfair font-semibold text-center sm:text-start text-4xl sm:text-7xl'>
                        I'm a Full Stack Developer.
                    </h2>
                    <p className="mt-10 mb-7 text-sm text-center sm:text-start sm:w-[70%]">
                    I can help you build a product, feature or a website. look through 
                    some of my work and experience! if you like what you see 
                    and have a project you need coded, don't hesitate to contact me.                    </p>

                </motion.div>

                {/* call to action  */}

                <motion.div
                      className="flex mt-5 items-center justify-center md:justify-start"
                      initial='hidden'
                      whileInView='visible'
                      viewport={{once:true, amount: 0.5}}
                      transition={{ delay:0.2, duration:0.5}}
                      variants={{
                          hidden:{opacity:0, x:-50},
                          visible:{opacity:1, x:0}
                      }}>

                    <AnchorLink
                        className='group border-2 flex items-center rounded-sm py-3 px-7 font-semibold hover:bg-green
                        hover:text-white transition duration-500'
                        onClick={()=> setSelectedPage('contact')}
                        href="#contacts"
                    >
                        Contact Me 
                        <span className='group-hover:rotate-90 duration-300'>
                        <HiArrowNarrowRight className='ml-3 ' />
                        </span>
                    </AnchorLink>

                </motion.div>

                <motion.div
                className="flex mt-5 justify-center md:justify-start"
                  initial='hidden'
                  whileInView='visible'
                  viewport={{once:true, amount: 0.5}}
                  transition={{ delay:0.4, duration:0.5}}
                  variants={{
                      hidden:{opacity:0, x:-50},
                      visible:{opacity:1, x:0}
                  }}
                >
                    
                <SocialMediaIcons />
                    
                </motion.div>

            </div>
        </section>
    );
}
 
export default Landing;