const SocialMediaIcons  = () => {
    return ( 
        <div className="flex justify-center md:justify-start my-10 gap-7">

            <a className="hover:opacity-50 transition duration-500"
                href="https://www.linkedin.com/in/joseph-irirwanirira/"
                target="_blank"
                rel="noreferrer"

            >
                <img src="../assets/linkedin.png" alt="linkedIn" />

            </a>

            <a className="hover:opacity-50 transition duration-500"
                href="linkedIn"
                target="_blank"
                rel="noreferrer"

            >
                <img src="../assets/twitter.png" alt="linkedIn" />

            </a>


            <a className="hover:opacity-50 transition duration-500"
                href="linkedIn"
                target="_blank"
                rel="noreferrer"

            >
                <img src="../assets/github.png" alt="linkedIn" className="w-[30px] h-[30px]" />

            </a>



        </div>
     );
}
 
export default SocialMediaIcons