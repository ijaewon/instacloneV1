import React from 'react';
import './styles.scss';

const Footer = (props, context) => (
    <footer className="Footer">
        <div className="footer-column">
            <nav className="footer-nav">
                <ul className="footer-list"> 
                    <li className="footer-list-item">About Us</li>
                    <li className="footer-list-item">Support</li>
                    <li className="footer-list-item">Blog</li>
                    <li className="footer-list-item">Press</li>
                    <li className="footer-list-item">API</li>
                    <li className="footer-list-item">Jobs</li>
                    <li className="footer-list-item">Privacy</li>
                    <li className="footer-list-item">Terms</li>
                    <li className="footer-list-item">Directory</li>
                    <li className="footer-list-item">Language</li>
                </ul>
            </nav>
        </div>
        <div className="footer-column">
            <span className="footer-copyright">@Instagram</span>
        </div>
    </footer>
)

export default Footer;