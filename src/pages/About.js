import React from "react"
import profilo from "../images/IMG_ABOUT.jpg"
export function About() {
    return (
        <main className="homeClass">
            <section className="homeSpacer">
                <div className="spacerOverlay"><p data-aos="fade-up">About</p></div>
            </section>
            <div style={{ display: "flex", justifyContent: "space-between", margin: "5% 14%" }}>

                <div className="aboutPhoto" style={{ width: "49%" }}>
                    <img style={{ width: "100%" }} src={profilo} />
                </div>
                <div style={{ width: "49%", borderStyle: "solid", borderWidth: "3px", marginLeft: "30px" }}>
                    ciao
                </div>
            </div>
        </main>
    )
}