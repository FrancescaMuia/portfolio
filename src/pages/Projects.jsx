import React from "react"
import ProjectsImage from "../components/ProjectsImage"
export function Projects() {
    return (
        <div className="homeClass projectMain">
            <section className="homeSpacer">
                <div className="spacerOverlay"><p data-aos="fade-up">Projects</p></div>
            </section>
            <ProjectsImage />
            <div>
                <p className="projectTitle removeMarginTop">Sites</p>
                <li className="projectList">
                    <ul>
                        <span className="listBullet">&#8226;</span> <a className="siteLink" target="_blank" href="https://www.eufemistampe.com/">Eufemi Stampe Antiche</a> | A WordPress website homemade for a shop in Rome.
                    </ul>
                    <ul>
                        <span className="listBullet">&#8226;</span> <a className="siteLink" target="_blank" href="https://ecomuseinet.it/">Ecomuseinet</a> | A WordPress website made for Lazio Region.
                    </ul>{/* <ul>
                        <span className="listBullet">&#8226;</span> <a className="siteLink" target="_blank" href="https://www.eufemistampe.com/">Eufemi Stampe Antiche</a> | A WordPress website homemade for a shop in Rome.
                    </ul> <ul>
                        <span className="listBullet">&#8226;</span> <a className="siteLink" target="_blank" href="https://www.eufemistampe.com/">Eufemi Stampe Antiche</a> | A WordPress website homemade for a shop in Rome.
                    </ul> */}
                </li>
            </div>
        </div>
    )
}