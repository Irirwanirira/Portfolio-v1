import { motion } from "framer-motion";
import LineGradient from "../components/LineGradient";



const Testimonials = () => {

    const TestimonialStyles = `mx-auto relative max-w-[400px] h-[350] flex flex-col justify-end
    p-16 mt-48 before:absolute before:top-[-120px] before:-ml-[110px] before:left-1/2`;

    return ( 
        <section id="testimonials" className="pt-32 pb-16">

                <motion.div
                    className="md:w-1/3 text-center md:text-left"
                    initial='hidden'
                    whileInView='visible'
                    viewport={{once:true, amount: 0.5}}
                    transition={{duration:0.5}}
                    variants={{
                        hidden:{opacity:0, x:-50},
                        visible:{opacity:1, x:0}
                    }}
                >

                    <p className="font-playfair font-semibold text-4xl mb-5 text-red">
                        TESTIMONIALS
                    </p>
                    <LineGradient width="mx-auto w-2/4" />
                    <p className="mt-10 ">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus nihil enim consequatur accusantium sint iusto accusamus voluptatem suscipit ipsum laborum.
                    </p>

                </motion.div>

                {/* TESTIMONIAL SECTION */}

                <div className="md:flex md:justify-between gap-8">

                    <motion.div
                        className={`bg-blue ${TestimonialStyles} before:content-person1`}
                        initial='hidden'
                        whileInView='visible'
                        viewport={{once:true, amount: 0.5}}
                        transition={{delay:0.2,duration:0.5}}
                        variants={{
                            hidden:{opacity:0, scale:0.8},
                            visible:{opacity:1, scale:1}
                        }}>
                            <p className="font-playfair text-6xl">"</p>
                            <p className="text-center text-xl"> I worked with Joseph Irirwanirira at Microverse. I really liked his professionalism and his intelligence.He is a very good leader and a great asset to your company. I strongly recommend Him..
                            </p>

                    </motion.div>
                    <motion.div
                        className={`bg-green ${TestimonialStyles} before:content-person2`}
                        initial='hidden'
                        whileInView='visible'
                        viewport={{once:true, amount: 0.5}}
                        transition={{delay:0.2,duration:0.5}}
                        variants={{
                            hidden:{opacity:0, scale:0.8},
                            visible:{opacity:1, scale:1}
                        }}>
                            <p className="font-playfair text-6xl">"</p>
                            <p className="text-center text-xl">Joseph is a partner and friend. I have worked with Joseph on different projects remotely and asynchronously with developers in different parts of the world and I always sense his keen desire to learn and tackle challenges as they come. Joseph also has many desirable qualities such as being a good communicator, collaborator, and very willing to give help when need arises. These professional skills in addition to his technical prowess are definitely what any team craves. He is more than ready to join the workforce..
                            </p>

                    </motion.div>
                   
                    <motion.div
                        className={`bg-yellow ${TestimonialStyles} before:content-person3`}
                        initial='hidden'
                        whileInView='visible'
                        viewport={{once:true, amount: 0.5}}
                        transition={{duration:0.5}}
                        variants={{
                            hidden:{opacity:0, x:-50},
                            visible:{opacity:1, x:0}
                        }}>
                            <p className="font-playfair text-6xl">"</p>
                            <p className="text-center text-xl">Joseph Irirwanirira is one of the best among all the people I have ever worked with. As I remember, Joseph Irirwanirira is very productive, hardworking, broad-minded, and forward-thinking. Intelligent, ambitious, energetic, and proactive perfectionist. The desire for proficiency and education makes Joseph Irirwanirira a valuable asset to the team. Working with Joseph Irirwanirira is a signature of success.
                            </p>

                    </motion.div>
                   
                </div>

        </section>
     );
}
 
export default Testimonials;