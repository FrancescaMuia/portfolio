import React from "react"
import profilo from "../images/Img profilo.jpg"
export function About() {
    return (
        <main style={{ display: "flex", justifyContent: "space-between", margin: "5% 14%" }} className="homeClass">
            <div style={{ width: "49%", borderStyle: "solid", borderWidth: "3px" }}>
                <img style={{ width: "100%" }} src={profilo} />
            </div>
            <div style={{ width: "49%", borderStyle: "solid", borderWidth: "3px" }}>
                ciao
            </div>
        </main>
    )
}