import React from "react"
import { ReactComponent as InstagramLogo } from "../icons/instagram.svg"
import { ReactComponent as LinkedinLogo } from "../icons/linkedin.svg"
import { ReactComponent as BehanceLogo } from "../icons/behance.svg"
import { Form, Field } from 'react-final-form'



export function Contacts() {
    return (<main className="contactClass">
        <hr></hr>
        <p className="contactTitle">
            Contact Me
        </p>
        <div className="flex"> <section className="contactSection">

            <p className="contactParagraph flex">
                <a href="https://www.instagram.com/effeemme_art/"
                    target="_blank" rel="noreferrer" className="contactParagraph flex">
                    <InstagramLogo className="contactLogo" fill="black" />
                    <p className="contactSocial"><b style={{ fontWeight: 500 }}>Instagram</b><br />effeemme_art </p> </a> </p>
            <p className="contactParagraph flex">
                <a href="https://www.linkedin.com/in/francesca-mui%C3%A0-6135ba175/"
                    target="_blank" rel="noreferrer" className="contactParagraph flex"> <LinkedinLogo className="contactLogo" fill="black" /> <p className="contactSocial">LinkedIn</p> </a> </p>
            <p className="contactParagraph flex">
                <a href=""
                    target="_blank" rel="noreferrer" className="contactParagraph flex"> <BehanceLogo className="contactLogo" fill="black" /> <p className="contactSocial">Behance</p> </a>

            </p>
        </section>
            <div className="Email-Form">



                <div className="Email-Form-Description">


                    <form action="./email.php" method="POST" target="_blank" onsubmit="inviata()" id="mail_form" >

                        <input className="contactInput" type="text" name="name" size="55" style={{ opacity: 1 }} required placeholder="Name" /><br />
                        <br />

                        <input className="contactInput" type="email" name="mail" size="55" style={{ opacity: 1 }} required placeholder="Email" /><br />
                        <br />

                        <textarea rows="10" cols="55" name="comment" style={{ padding: "2%" }} required placeholder="Message"></textarea><br /><br />
                        <input className="inputButton" type="submit" value="Send" style={{ opacity: 1 }} />
                    </form>

                </div>
            </div>
        </div>
    </main>
    )
}