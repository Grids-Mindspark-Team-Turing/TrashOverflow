import React from 'react'
import './footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
    return (
        <footer className="footer">
            <p className="footnote">Made with <FontAwesomeIcon icon={faHeart} className="footer-heart" /> by <span>Team Turing</span></p>
        </footer>
    )
}

export default Footer