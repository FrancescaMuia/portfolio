import React from "react"
import ImageGallery from "../components/ImageGallery"

export function Home() {
    return (
        <main className="homeClass">
            <ImageGallery />
            <section>
                <hr className="accessory"></hr>

                <p className="homeParagraph"><p className="homeTitle">Hello!</p>
                I'm Francesca, a freelance illustrator and graphic designer based in Italy.
                </p>
                <hr className="accessory"></hr>
            </section>
        </main>
    )
}