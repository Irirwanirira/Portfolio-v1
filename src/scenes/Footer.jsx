import SocialMediaIcons from "../components/SocialMediaIcon";

const date = new Date()
const toDate = date.getFullYear()

const Footer = () => {
    return ( 

        <footer className="bg-green pt-[0.5rem]">
            <div className="w-5/6 mx-auto md:flex justify-center items-center md:justify-between text-center ">
                <SocialMediaIcons />
                <p className="font-playfair text-md text-white">&copy; irijoseph@gmail.com <span>{toDate}</span>. All Rights Reserved</p>
            </div>
        </footer>
     );
}

export default Footer;