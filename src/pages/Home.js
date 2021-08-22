import React from "react"
import { NavLink } from "react-router-dom";
import ImageGallery from "../components/ImageGallery"
import AOS from "aos";
import "aos/dist/aos.css";
import { Component } from 'react';

export default class Home extends Component {
    constructor(props) {
        super(props)

    }

    componentDidMount() {
        AOS.init({
            duration: 500
        })
    }
    render() {
        return (
            <main className="homeClass">
                <section className="homeSpacer">
                    <div className="spacerOverlay"><p data-aos="fade-up">Home</p></div>
                </section>
                <ImageGallery />
                <NavLink to="/projects"
                    className="projectsButton">
                    Projects
                </NavLink>
                <section className="paragraphSection">


                    <p className="homeParagraph"><p className="homeTitle">Hello!</p>
                        I'm Francesca, a freelance illustrator and graphic designer based in Italy.
                    </p>

                </section>
            </main>
        )
    }
}