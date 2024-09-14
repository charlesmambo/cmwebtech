import React from 'react';
import '../Navbar/Navbar.css';
import { MdOutlineCallEnd } from "react-icons/md";
import { RiLinkedinBoxLine } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Navbar = () => {
  return (
    <nav>
        <div className="logo-container">
            <h3>cmWebtech</h3>
        </div>
        <div className="divider"></div>

        <div className="contact-container">
            <ul>
                <li>
                    <a href=""><RiLinkedinBoxLine />
                   </a>
                </li>
                <li>
                    <a href=""><FaInstagram />
                    </a>
                </li>
                <li>
                    <a href=""><FaXTwitter />
                    </a>
                </li>
            </ul>
            <div className="contact-link">
                <a href="">
                <MdOutlineCallEnd />
                </a>
            </div>
        </div>
    </nav>
  )
}

export default Navbar