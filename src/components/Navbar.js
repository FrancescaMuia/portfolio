import React from "react";
import { NavLink } from "react-router-dom";
import { ReactComponent as InstagramLogo } from "../icons/instagram.svg"
import { ReactComponent as LinkedinLogo } from "../icons/linkedin.svg"
import { ReactComponent as BehanceLogo } from "../icons/behance.svg"
import logo from "../images/Logo-FM-sito.png"
export function Navbar() {
    return (
        <header className="navHeader" style={{ zIndex: 1000, width: "100%" }}>
            <div className="mx-auto flex justify-between align-center">
                {/* <div className="container flex justify-between logoContainer" >
                    <a href="https://www.instagram.com/effeemme_art/"
                        className="logo" target="_blank" rel="noreferrer">
                        <InstagramLogo className="logo" fill="black" />

                    </a>
                    <a href="https://www.linkedin.com/in/francesca-mui%C3%A0-6135ba175/"
                        className="logo" target="_blank" rel="noreferrer">
                        <LinkedinLogo className="logo" fill="black" />

                    </a>
                    <a href="https://www.behance.net/francescamuia"
                        className="logo" target="_blank" rel="noreferrer">
                        <BehanceLogo className="logo" fill="black" />

                    </a>
                </div> */}

                <NavLink to="/" className="navTitle flex justify-between"> <img src={logo} className="logoSite" /></NavLink>
                <input type="checkbox" id="navcheck" role="button" title="menu" />
                <label htmlFor="navcheck" aria-hidden="true" title="menu">
                    <span className="burger">
                        <span className="bar">
                            <span className="visuallyhidden">Menu</span>
                        </span>
                    </span>
                </label>
                <nav id="menu">
                    <NavLink onClick={() => { document.getElementById("navcheck").checked = false; }} to="/" exact
                        activeClassName="text-white"
                        className="nav-link inflex-flex items-center py-6 px-3 mr-4 text-red-100  text-4xl font-bold tracking-widest">
                        Home
                    </NavLink>
                    <NavLink onClick={() => { document.getElementById("navcheck").checked = false; }} to="/about"
                        className="nav-link inline-flex items-center py-3 px-3 my-6 rounded text-red-200 ">
                        About
                    </NavLink>
                    <NavLink onClick={() => { document.getElementById("navcheck").checked = false; }} to="/contacts"
                        className="nav-link inline-flex items-center py-3 px-3 my-6 rounded text-red-200 ">
                        Contacts
                    </NavLink>
                    <NavLink onClick={() => { document.getElementById("navcheck").checked = false; }} to="/projects"
                        className="nav-link inline-flex items-center py-3 px-3 my-6 rounded text-red-200 ">
                        Projects
                    </NavLink>
                    <div className=" icone-social">
                        <a href="https://www.instagram.com/effeemme_art/"
                            className="logo " target="_blank" rel="noreferrer">
                            <InstagramLogo className="logo" fill="black" />

                        </a>
                        <a href="https://www.linkedin.com/in/francesca-mui%C3%A0-6135ba175/"
                            className="logo " target="_blank" rel="noreferrer">
                            <LinkedinLogo className="logo" fill="black" />

                        </a>
                        <a href="https://www.behance.net/francescamuia"
                            className="logo " target="_blank" rel="noreferrer">
                            <BehanceLogo className="logo" fill="black" />

                        </a>
                    </div>
                </nav>

                {/* <nav className="flex">
                    
                </nav> */}
            </div>
        </header>
    )
}