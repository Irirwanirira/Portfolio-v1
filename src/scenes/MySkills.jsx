// import { element } from "prop-types";
import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";
// import { link } from "fs";
// import HTML from '../assets/html.png';
// import CSS from '../assets/css.png';
// import JavaScript from '../assets/javascript.png';
// import ReactImg from '../assets/react.png';
// import Node from '../assets/node.png';
// import FireBase from '../assets/firebase.png';
// import GitHub from '../assets/github.png';
// import Tailwind from '../assets/tailwind.png';
// import Mongo from '../assets/mongo.png';



const MySkills = () => {
   
    const  frontend = ["HTML", "CSS", "JavaScript", "React.js"]
    const  backend = ["HTML", "CSS", "JavaScript", "React.js"]
    const  tools = ["HTML", "CSS", "JavaScript", "React.js"]




    return ( 

        <section id='skills' className="mt-10 mb-24">
            <div className="md:flex md:justify-center md:gap-16 mt:32">
            <motion.div
                className="md:w-2/4 mx-auto text-center"
                       initial='hidden'
                       whileInView='visible'
                       viewport={{once:true, amount: 0.5}}
                       transition={{duration:0.5}}
                       variants={{
                           hidden:{opacity:0, y:-50},
                           visible:{opacity:1, y:0}
                       }}
                >

                 <div>
                    <p className="font-playfair font-semibold text-4xl mb-5">
                        My <span className="text-green">SKILLS</span>
                    </p>
                    <div className="flex justify-center mt-5 mb-[3rem]">
                        <LineGradient width="w-1/3"/>
                    </div>
                 </div>


                </motion.div>

                
            </div>

            {/* Skills */}

           <div className="md:flex md: justify-around mt-16">
                <div>
                <h1 className="text-green font-playfair font-semibold text-4xl mb-5">Front-End</h1>
                    <ul className="flex flex-col gap-[0.5rem] mt-[0.5rem]">
                     {frontend.map(skill=> <li>{skill}</li>) }
                    
                    </ul>
                </div>
                <div>
                    <h1 className="text-green font-playfair font-semibold text-4xl mb-5">Back-End</h1>
                    <ul className="flex flex-col gap-[0.5rem] mt-[0.5rem]">
                     {backend.map(skill=> <li className="">{skill}</li>) }
                    </ul>
                </div>
                <div>
                <h1 className="text-green font-playfair font-semibold text-4xl mb-5">Tools</h1>
                    <ul className="flex flex-col gap-[0.5rem] mt-[0.5rem]">
                        {
                            tools.map(tool => <li>{tool}</li>)  
                        }
                    </ul>
                </div>           
            </div>


            {/* <div className="md:grid md:grid-cols-4 md:justify-between mt-16 gap-1">

                <motion.div
                    className="md:w-2/3 mt-10"
                    initial='hidden'
                    whileInView='visible'
                    viewport={{once:true, amount: 0.5}}
                    transition={{duration:0.5}}
                    variants={{
                        hidden:{opacity:0, y:50},
                        visible:{opacity:1, y:0}
                    }}
                >
                       <div className='shadow-md shadow-green hover:scale-110 duration-500 flex flex-col items-center '>
                    <img className='w-20 mx-auto' src={HTML} alt="HTML icon" />
                    <p className='my-4'>HTML</p>
                </div>

                </motion.div>

                <motion.div
                    className="md:w-2/3 mt-10"
                    initial='hidden'
                    whileInView='visible'
                    viewport={{once:true, amount: 0.5}}
                    transition={{delay:0.2, duration:0.5}}
                    variants={{
                        hidden:{opacity:0, y:50},
                        visible:{opacity:1, y:0}
                    }}
                >

                <div className='shadow-md  shadow-green  hover:scale-110 duration-500 flex flex-col items-center '>
                    <img className='w-20 mx-auto' src={CSS} alt="HTML icon" />
                    <p className='my-4'>CSS</p>
                </div>

                </motion.div>

                <motion.div
                    className="md:w-2/3 mt-10"
                    initial='hidden'
                    whileInView='visible'
                    viewport={{once:true, amount: 0.5}}
                    transition={{delay:0.4, duration:0.5}}
                    variants={{
                        hidden:{opacity:0, y:50},
                        visible:{opacity:1, y:0}
                    }}
                >

                <div className='shadow-md  shadow-green  hover:scale-110 duration-500 flex flex-col items-center '>
                    <img className='w-20 mx-auto' src={JavaScript} alt="HTML icon" />
                    <p className='my-4'>JAVASCRIPT</p>
                </div>

                </motion.div>
                <motion.div
                    className="md:w-2/3 mt-10"
                    initial='hidden'
                    whileInView='visible'
                    viewport={{once:true, amount: 0.5}}
                    transition={{delay:0.6, duration:0.5}}
                    variants={{
                        hidden:{opacity:0, y:50},
                        visible:{opacity:1, y:0}
                    }}
                >

                <div className='shadow-md  shadow-green  hover:scale-110 duration-500 flex flex-col items-center '>
                    <img className='w-20 mx-auto' src={ReactImg} alt="HTML icon" />
                    <p className='my-4'>React</p>
                </div>

                </motion.div>
                <motion.div
                    className="md:w-2/3 mt-10"
                    initial='hidden'
                    whileInView='visible'
                    viewport={{once:true, amount: 0.5}}
                    transition={{delay:0.8, duration:0.5}}
                    variants={{
                        hidden:{opacity:0, y:50},
                        visible:{opacity:1, y:0}
                    }}
                >

                <div className='shadow-md  shadow-green  hover:scale-110 duration-500 flex flex-col items-center '>
                    <img className='w-20 mx-auto' src={FireBase} alt="HTML icon" />
                    <p className='my-4'>FIREBASE</p>
                </div>

                </motion.div>
                <motion.div
                    className="md:w-2/3 mt-10"
                    initial='hidden'
                    whileInView='visible'
                    viewport={{once:true, amount: 0.5}}
                    transition={{delay:0.9, duration:0.5}}
                    variants={{
                        hidden:{opacity:0, y:50},
                        visible:{opacity:1, y:0}
                    }}
                >

                <div className='shadow-md  shadow-green hover:scale-110 duration-500 flex flex-col items-center '>
                    <img className='w-20 mx-auto' src={GitHub} alt="HTML icon" />
                    <p className='my-4'>GITHUB</p>
                </div>

                </motion.div>
                <motion.div
                    className="md:w-2/3 mt-10"
                    initial='hidden'
                    whileInView='visible'
                    viewport={{once:true, amount: 0.5}}
                    transition={{delay:0.9, duration:0.5}}
                    variants={{
                        hidden:{opacity:0, y:50},
                        visible:{opacity:1, y:0}
                    }}
                >

                <div className='shadow-md  shadow-green hover:scale-110 duration-500 flex flex-col items-center '>
                    <img className='w-20 mx-auto' src={Tailwind} alt="HTML icon" />
                    <p className='my-4'>TAILWIND</p>
                </div>

                </motion.div>
                <motion.div
                    className="md:w-2/3 mt-10"
                    initial='hidden'
                    whileInView='visible'
                    viewport={{once:true, amount: 0.5}}
                    transition={{delay:0.9, duration:0.5}}
                    variants={{
                        hidden:{opacity:0, y:50},
                        visible:{opacity:1, y:0}
                    }}
                >

                <div className='shadow-md  shadow-green hover:scale-110 duration-500 flex flex-col items-center '>
                    <img className='w-20 mx-auto' src={Node} alt="HTML icon" />
                    <p className='my-4'>NODE</p>
                </div>

                </motion.div>

                <motion.div
                    className="md:w-2/3 mt-10"
                    initial='hidden'
                    whileInView='visible'
                    viewport={{once:true, amount: 0.5}}
                    transition={{delay:0.9, duration:0.5}}
                    variants={{
                        hidden:{opacity:0, y:50},
                        visible:{opacity:1, y:0}
                    }}
                >

                <div className='shadow-md  shadow-green hover:scale-110 duration-500 flex flex-col items-center '>
                    <img className='w-20 mx-auto' src={Mongo} alt="HTML icon" />
                    <p className='my-4'>MongoDb</p>
                </div>

                </motion.div> */}
            {/* </div> */}
        </section>
     );
}
 
export default MySkills;