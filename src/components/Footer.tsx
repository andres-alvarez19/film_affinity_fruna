import { FaXTwitter, FaTiktok, FaInstagram, FaYoutube, FaFacebookF } from "react-icons/fa6";
import React from "react";

const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-800">
            <div className="flex flex-col container mx-auto items-center">

                <div className="container flex-col space-x-8 py-4 text-center text-white font-normal">
                    <a className="hover:shadow-lg hover:bg-gray-600 transition duration-300 ease-in-out p-2 rounded-lg" href="/About">Sobre nosotros</a>
                    <a className="hover:shadow-lg hover:bg-gray-600 transition duration-300 ease-in-out p-2 rounded-lg" href="/Contact">Contactenos</a>
                    <a className="hover:shadow-lg hover:bg-gray-600 transition duration-300 ease-in-out p-2 rounded-lg" href="/TermsConditions">Terminos y condiciones</a>
                </div>


                <div className="container flex justify-center space-x-2">
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer nofollow"
                       aria-label="Twitter">
                        <FaXTwitter className="w-6 h-6 text-customText hover:text-customText"/>
                    </a>
                    <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer nofollow" aria-label="Tiktok">
                        <FaTiktok className="w-6 h-6 text-customText hover:text-customText"/>
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer nofollow"
                       aria-label="Instagram">
                        <FaInstagram className="w-6 h-6 text-customText hover:text-customText"/>
                    </a>
                    <a href="https://youtube.com" target="_blank" rel="noopener noreferrer nofollow"
                       aria-label="Youtube">
                        <FaYoutube className="w-6 h-6 text-customText hover:text-customText"/>
                    </a>
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer nofollow"
                       aria-label="Facebook">
                        <FaFacebookF className="w-6 h-6 text-customText hover:text-customText"/>
                    </a>
                </div>

                <div className="container py-4 text-center text-white text-sm font-extralight">
                    &copy; 2024 Film Affinity Fruna
                </div>

            </div>
        </footer>
    );
}

export default Footer;