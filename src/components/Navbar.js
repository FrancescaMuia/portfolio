import React from "react";
import { NavLink } from "react-router-dom";
import { ReactComponent as InstagramLogo } from "../icons/instagram.svg"
import { ReactComponent as LinkedinLogo } from "../icons/linkedin.svg"
import { ReactComponent as BehanceLogo } from "../icons/behance.svg"
export function Navbar() {
    return (
        <header style={{ backgroundColor: "#fffaf2" }}>
            <div className="mx-auto flex justify-between">
                <div className="container flex justify-between logoContainer" >
                    <InstagramLogo className="logo" fill="black" />
                    <LinkedinLogo className="logo" fill="black" />
                    <BehanceLogo className="logo" fill="black" /></div>
                <h1 className="navTitle">Francesca Muià</h1>
                <input type="checkbox" id="navcheck" role="button" title="menu" />
                <label for="navcheck" aria-hidden="true" title="menu">
                    <span class="burger">
                        <span class="bar">
                            <span class="visuallyhidden">Menu</span>
                        </span>
                    </span>
                </label>
                <nav id="menu">
                    <NavLink to="/" exact
                        activeClassName="text-white"
                        className="nav-link inflex-flex items-center py-6 px-3 mr-4 text-red-100  text-4xl font-bold tracking-widest">
                        Home
                    </NavLink>
                    <NavLink to="/about"
                        className="nav-link inline-flex items-center py-3 px-3 my-6 rounded text-red-200 ">
                        About
                    </NavLink>
                    <NavLink to="/contacts"
                        className="nav-link inline-flex items-center py-3 px-3 my-6 rounded text-red-200 ">
                        Contacts
                    </NavLink>
                    <NavLink to="/projects"
                        className="nav-link inline-flex items-center py-3 px-3 my-6 rounded text-red-200 ">
                        Projects
                    </NavLink>
                </nav>

                {/* <nav className="flex">
                    
                </nav> */}
            </div>
        </header>
    )
}