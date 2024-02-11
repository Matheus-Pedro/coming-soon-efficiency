import '../styles/socialMediaFooter.css'
import { BiLogoInstagram, BiLogoWhatsapp } from 'react-icons/bi'
import { IconContext } from 'react-icons';

export default function SocialMediaFooter () {
    return (
        <footer className = "social-media-footer">
            <IconContext.Provider value={{ color: "white", className: "global-class-name", size: "2em" }}>
            <a className = 'icons' href = 'https://www.instagram.com/efficiencygym/'>
                <BiLogoInstagram/>
            </a>
            <a className = 'icons' href = 'https://linktr.ee/efficiencygym'>
                <BiLogoWhatsapp/>
            </a>
            </IconContext.Provider>
        </footer>
    );
};
