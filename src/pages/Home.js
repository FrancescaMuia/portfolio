import React from "react"
import { NavLink } from "react-router-dom";
import ImageGallery from "../components/ImageGallery"

export function Home() {
    return (
        <main className="homeClass">
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