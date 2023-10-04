import SocialMediaIcons from "../components/SocialMediaIcon";

const date = new Date()
const toDate = date.getFullYear()

const Footer = () => {
    return ( 

        <footer className="h-[10rem] bg-green pt-6">
            <div className="w-5/6 mx-auto md:flex justify-center items-center md:justify-between text-center">
                <SocialMediaIcons />
                <p className="font-playfair text-md">&copy; irijoseph@gmail.com &<span>{toDate}</span>. All Rights Reserved</p>
            </div>
        </footer>
     );
}

export default Footer;