import {useForm} from 'react-hook-form'
import { motion } from 'framer-motion';
import LineGradient from '../components/LineGradient';

const Contact = () => {

    const {register, trigger, formState:{errors} } = useForm();

    const onSubmit = async(e)=> {
        const isValid = await trigger()
        if(!isValid){
            e.preventDefault()
        }
    }
  return (
    <section
        id='contacts'
      className='py-48'
    >
      {/* Headings */}
      <motion.div
        className='flex justify-start w-full'
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
          <p className='font-playfair font-semibold text-4xl'>
            CONTACT <span className='text-blue'>ME</span></p>
          <div className='flex md:justify-start my-5'>
            <LineGradient width='w-1/2' />
          </div>
        </div>
      </motion.div>

        {/* form and image */}

        <div className='md:flex md:justify-between gap-16 mt-5'>
       

            <motion.div 
                  className='basis-2/3 mt-10 md:mt-0'
                  initial='hidden'
                  whileInView='visible'
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{delay:0.2, duration: 0.5 }}
                  variants={{
                    hidden: { opacity:0, y: -50 },
                    visible: { opacity: 1, y: 0 },
                  }}
            >
                <form 
                target='_blank'
                onSubmit={onSubmit}
                action="https://formsubmit.co/a96f568d6294b8867987549d1239033a"
                method='POST'
                >
                    <input 
                        className='w-full bg-grey font-semibold placeholder-opaque-black p-3 text-green'
                        type='text'
                        placeholder='NAME'
                        {...register("name", {
                            required:true,
                            maxLength:100,
                        })}
                    />
                    {errors.name && (
                        <p className='text-red mt-1'>
                            {errors.name.type === "required" && "Ths field is required"}
                            {errors.name.type === "maxLength" && "Max length is 100"}
                        </p>
                    )}

                    <input 
                        className='w-full bg-grey font-semibold placeholder-opaque-black p-3 mt-5 text-green'
                        type='text'
                        placeholder='EMAIL'
                        {...register("email", {
                            required:true,
                            pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        })}
                    />
                    {errors.email && (
                        <p className='text-red mt-1'>
                            {errors.email.type === "required" && "Ths field is required"}
                            {errors.email.type === "pattern" && "Invalid Email"}
                        </p>
                    )}



                    <textarea
                        className='w-full bg-grey font-semibold placeholder-opaque-black p-3 mt-5 text-green'
                        type='text'
                        rows="4"
                        cols="50"
                        placeholder='MESSAGE'
                        {...register("message", {
                            required:true,
                            maxLength:2000,
                        })}
                    />
                        {errors.message && (
                        <p className='text-red mt-1'>
                            {errors.message.type === "required" && "Ths field is required"}
                            {errors.message.type === "maLength" && "Max length is 2000 char."}
                        </p>
                    )}

                    <button
                        type='submit'
                        className="p-5 bg-blue font-semibold text-deep-blue mt-5 hover:bg-red
                        hover:text-white transition duration-500"
                    >
                        LET'S COLLABORATE

                    </button>


                </form>

            </motion.div>
        </div>

    </section>
  );
};

export default Contact;
