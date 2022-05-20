import React from "react";
import {
    FaFacebookF,
    FaYoutube,
    FaLinkedin,
    FaGithub,
    FaSnapchat,
} from "react-icons/fa";

function Footer() {
    return (
        <div className="iconClass">
            <span className="fIcon">
                <FaFacebookF />
            </span>
            <span className="fIcon">
                <FaYoutube />
            </span>
            <span className="fIcon">
                <FaLinkedin />
            </span>
            <span className="fIcon">
                <FaGithub />
            </span>
            <span className="fIcon">
                <FaSnapchat />
            </span>
            <p className="copyright">
                © Copyright 2022 by Mahamudur Rahman Jewel
            </p>
        </div>
    );
}
export default Footer;
