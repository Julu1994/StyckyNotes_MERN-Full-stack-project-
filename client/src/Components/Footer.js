import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFacebookF,
    faInstagram,
    faSnapchat,
    faTwitter,
    faYoutube,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
    return (
        <div className="iconClass">
            <span className="fIcon">
                <FontAwesomeIcon icon={faFacebookF} />
            </span>
            <span className="fIcon">
                <FontAwesomeIcon icon={faYoutube} />
            </span>
            <span className="fIcon">
                <FontAwesomeIcon icon={faSnapchat} />
            </span>
            <span className="fIcon">
                <FontAwesomeIcon icon={faInstagram} />
            </span>
            <span className="fIcon">
                <FontAwesomeIcon icon={faTwitter} />
            </span>
            <p className="copyright">
                © Copyright 2022 by Mahamudur Rahman Jewel
            </p>
        </div>
    );
}
export default Footer;
