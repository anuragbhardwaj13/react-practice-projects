import React, { useState, useRef, useEffect } from "react";
import { FaBars, FaTwitter } from "react-icons/fa";
import { links, social } from "./data";
import logo from "./logo.svg";

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(true);
  const linksContainer = useRef(null);
  const linksRef = useRef(null);
  useEffect(() => {
    const linkHeigh = linksRef.current.getBoundingClientRect().height;
    if (showLinks) {
      linksContainer.current.style.height = `${linkHeigh}px`;
    } else {
      linksContainer.current.style.height = "0px";
    }
  }, [showLinks]);
  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} alt="A logo" />
          <button
            className="nav-toggle"
            onClick={() => setShowLinks(!showLinks)}
          >
            <FaBars></FaBars>
          </button>
        </div>

        <div className="links-container" ref={linksContainer}>
          <ul className="links" ref={linksRef}>
            {links.map((link) => {
              const { url, text, id } = link;
              return (
                <li key={id}>
                  <a href={url}>{text}</a>
                </li>
              );
            })}
          </ul>
        </div>

        <ul className="social-icons">
          {social.map((social) => {
            const { id, url, icon } = social;
            return (
              <li key={id}>
                <a href={url}>{icon}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
