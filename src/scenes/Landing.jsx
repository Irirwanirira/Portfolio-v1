import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";
import SocialMediaIcons from "../components/SocialMediaIcon";
import { HiArrowNarrowRight } from "react-icons/hi";

const Landing = ({ setSelectedPage, isDarkMode }) => {
  return (
    <section
      id="home"
      className="flex flex-col md:flex-row items-center md:items-start justify-center md:justify-between min-h-screen gap-16  md:pt-[15rem]"
    >
      {/* Profile image for mobile */}
      <div className="w-full flex justify-center md:hidden">
        <div className="relative w-40 h-40 rounded-full overflow-hidden shadow-2xl border-4 border-green mx-auto xs:mb-0">
          <img
            src="/assets/profileImage.jpeg"
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Main content */}
      <div className="z-30 md:mt-[5rem] w-full md:w-1/2">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="text-2xl font-playfair z-10 text-center md:text-start mb-[3rem]">
            Hi, I'm{" "}
            <span className="text-4xl font-playfair z-10 text-green">
              Joseph
            </span>
          </p>

          <h2 className="font-playfair font-semibold text-center md:text-start text-4xl md:text-4xl">
            I'm a Fullstack Developer.
          </h2>

          <p className="mt-10 mb-7 text-sm text-center md:text-start ">
            I can help you build a product, feature, or website. Look through
            some of my work and experience, and if you like what you see, don't
            hesitate to contact me.
          </p>
        </motion.div>

        {/* Call to action */}
        <motion.div
          className="flex mt-5 items-center justify-center md:justify-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <AnchorLink
            className="border-2 group flex items-center rounded-sm py-3 px-7 font-semibold hover:bg-green hover:text-white transition duration-500"
            onClick={() => setSelectedPage("contacts")}
            href="#contacts"
          >
            Contact Me
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-3" />
            </span>
          </AnchorLink>
        </motion.div>

        <motion.div
          className="flex mt-5 justify-center md:justify-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <SocialMediaIcons isDarkMode={isDarkMode} />
        </motion.div>
      </div>

      {/* Desktop image */}
      <div className="hidden md:flex md:w-1/2 justify-center">
        <div className="relative w-full max-w-[24rem] rounded-[2rem] overflow-hidden shadow-2xl border-4 border-green">
          <img
            src="/assets/profileImage.jpeg"
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Landing;