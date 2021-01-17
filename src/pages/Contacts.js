import React from "react"
import { ReactComponent as InstagramLogo } from "../icons/instagram.svg"
import { ReactComponent as LinkedinLogo } from "../icons/linkedin.svg"
import { ReactComponent as BehanceLogo } from "../icons/behance.svg"

export function Contacts() {
    return (<main className="contactClass">
        <hr></hr>
        <p className="contactTitle">
            Contact Me
        </p>
        <div className="flex contacts"> <section className="contactSection">
            <div className="socialBox">

                <p className="contactParagraph flex">
                    <a href="https://www.instagram.com/effeemme_art/"
                        target="_blank" rel="noreferrer" className="contactParagraph flex">
                        <InstagramLogo className="contactLogo" fill="black" />
                        <p className="contactSocial"><b className="socialTitle">Instagram</b><br />effeemme_art </p> </a> </p>
                <p className="contactParagraph flex">
                    <a href="https://www.linkedin.com/in/francesca-mui%C3%A0-6135ba175/"
                        target="_blank" rel="noreferrer" className="contactParagraph flex">
                        <LinkedinLogo className="contactLogo" fill="black" />
                        <p className="contactSocial"><b className="socialTitle">LinkedIn</b><br /> Francesca Muià</p> </a> </p>
                <p className="contactParagraph flex">
                    <a href="https://www.behance.net/francescamuia"
                        target="_blank" rel="noreferrer" className="contactParagraph flex">
                        <BehanceLogo className="contactLogo" fill="black" />
                        <p className="contactSocial"><b className="socialTitle">Behance</b><br /> Francesca Muià</p> </a> </p>

            </div>
        </section>
            <div className="Email-Form">






                <form action="./email.php" method="POST" target="_blank" onsubmit="inviata()" id="mail_form" >

                    <input className="contactInput" type="text" name="name" style={{ opacity: 1 }} required placeholder="Name" /><br />


                    <input className="contactInput" type="email" name="mail" style={{ opacity: 1 }} required placeholder="Email" /><br />


                    <textarea rows="10" name="comment" className="boxForm" required placeholder="Message"></textarea><br /><br />
                    <input className="inputButton" type="submit" value="Send" style={{ opacity: 1 }} />
                </form>

            </div>
        </div>

    </main>
    )
}