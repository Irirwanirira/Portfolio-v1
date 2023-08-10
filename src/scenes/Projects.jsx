import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";

const container = {
    hidden: {},
    visible: {
        transition: {staggerChildren: 0.2}
    }
};

const ProjectVariant = {
    hidden: {opacity: 0, scale: 0.8},
    visible: {opacity:1, scale:1}
}

const Project = ({title}) => {
    const overlayStyles = ` absolute h-full opacity-0 hover:opacity-90 transition duration-500 bg-grey
     z-30 flex-col justify-center items-center text-center p-16 text-deep-blue`
    const projectTitle = title.split(" ").join("-").toLowerCase();

    return (

        <motion.div variants={ProjectVariant} className="relative">
            <div className={overlayStyles}>
                <p className="text-2xl font-playfair"> {title}</p>
                <p className="mt-7">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores 
                    molestiae enim commodi pariatur possimus autem.
                </p>
            </div>
            <img src={`../assets/${projectTitle}.jpeg`} alt={projectTitle}/>

        </motion.div>

    )

}

const Projects = () => {
    return ( 

        <section id="projects" className="pt-[8rem] pb-[8rem]">
                {/* Headings */}
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
                        My <span className="text-red">Wo</span>rk
                    </p>
                    <div className="flex justify-center mt-5 mb-[3rem]">
                        <LineGradient width="w-1/3"/>
                    </div>
                 </div>


                </motion.div>
                {/* projects */}

                <div className="flex justify-center" >
                <motion.div

                className="sm:grid sm:grid-cols-3"
                    initial='hidden'
                    whileInView='visible'
                    viewport={{once:true, amount: 0.5}}
                    transition={{duration:0.5}}
                    variants={container}
                >
                    {/* ROW 1 */}

                <div className="flex justify-center text-center items-center p-10 bg-green max-w-[400px] max-h-[400]
                text-2xl font-playfair font-semibold">
                    Beautiful user interface
                </div>
                <Project title="project 1" />
                <Project title="project 2" />

                        {/* row 2 */}
                <Project title="project 3" />
                <Project title="project 4" />
                <Project title="project 5" />
                       {/* row 3 */}

                <Project title="project 6" />
                <Project title="project 7" />
                <div className="flex justify-center text-center items-center p-10 bg-blue max-w-[400px] max-h-[400]
                    text-2xl font-playfair font-semibold">
                    SMOOTH USER EXPERIENCE
                </div>

                </motion.div>
                </div>
        </section>
    );
}
 
export default Projects;