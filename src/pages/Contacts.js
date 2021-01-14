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
                    target="_blank" rel="noreferrer" className="contactParagraph flex"><InstagramLogo className="contactLogo" fill="black" /> <p className="contactSocial">Instagram</p> </a> </p>
            <p className="contactParagraph flex">
                <a href="https://www.linkedin.com/in/francesca-mui%C3%A0-6135ba175/"
                    target="_blank" rel="noreferrer" className="contactParagraph flex"> <LinkedinLogo className="contactLogo" fill="black" /> <p className="contactSocial">LinkedIn</p> </a> </p>
            <p className="contactParagraph flex">
                <a href=""
                    target="_blank" rel="noreferrer" className="contactParagraph flex"> <BehanceLogo className="contactLogo" fill="black" /> <p className="contactSocial">Behance</p> </a>

            </p>
        </section>






            <h2>Send me an e-mail</h2>

            <form action="../email.php">
                <fieldset>
                    <label>
                        <p>Name</p>
                        <input name="name" type="text" placeholder="ciao" id="1" />
                    </label>
                </fieldset>
                <button type="submit">Submit</button>
            </form>
            <input name="name" type="text" placeholder="ciao" id="1" />

        </div>
    </main>
    )
}