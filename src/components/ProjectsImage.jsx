import { Component } from 'react';
import Modal from "./Modal";
import AOS from "aos";
import "aos/dist/aos.css";

import avocado from "../images/avocado.jpg"
import bowie from "../images/bowie.jpg"
import coffee from "../images/coffee.jpg"
import mille from "../images/Mille.JPG"
import girl from "../images/girl.jpg"
import treat_people_with_kindness from "../images/treat_people_with_kindness.jpg"
import rumore from "../images/Rumore.JPG"
import loki from "../images/Loki.JPG"
import do_it from "../images/Do_it.JPG"
import dancingqueen from "../images/DancingQueen.JPG"
import signora from "../images/Signora.JPG"
import me_so_rotta from "../images/me_so_rotta.jpg"


export default class ProjectsImage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            show: false,
            img: ""
        };
        this.showModal.bind(this);

    }

    componentDidMount() {
        AOS.init({
            duration: 1000
        })
    }
    showModal = (img) => {
        console.log(img);
        this.setState(prev => ({
            show: !prev.show,
            img: img,
            bool: false,
        }));
    };


    render() {
        var modal = document.getElementById("myModal");
        var test = "../images/avocado.jpg";

        return (<div className="homeClass projectClass">
            <Modal onClose={this.showModal} changeState={this.changeState}
                show={this.state.show} start={this.state.img} bool={this.state.bool} />

            <div className="responsive">
                <div className="gallery">
                    <div className="image-style" data-aos="fade-up" style={{ backgroundImage: `url(${loki})` }} >

                    </div>
                    <div class="overlay" onClick={e => {
                        this.showModal(0);
                    }}>
                        <div class="text">Loki</div>
                    </div>

                </div>
            </div>
            <div className="responsive">
                <div className="gallery">
                    <div className="image-style" data-aos="fade-up" style={{ backgroundImage: `url(${rumore})` }} >

                    </div>
                    <div class="overlay" onClick={e => {
                        this.showModal(1);
                    }}>
                        <div class="text">Rumore</div>
                    </div>

                </div>
            </div>
            <div className="responsive">
                <div className="gallery">
                    <div className="image-style" data-aos="fade-up" style={{ backgroundImage: `url(${do_it})` }} >

                    </div>
                    <div class="overlay" onClick={e => {
                        this.showModal(2);
                    }}>
                        <div class="text">Do it</div>
                    </div>

                </div>
            </div>
            <div className="responsive">
                <div className="gallery">
                    <div className="image-style" data-aos="fade-up" style={{ backgroundImage: `url(${dancingqueen})` }} >

                    </div>
                    <div class="overlay" onClick={e => {
                        this.showModal(3);
                    }}>
                        <div class="text">Dancing Queen</div>
                    </div>

                </div>
            </div>
            <div className="responsive">
                <div className="gallery">
                    <div className="image-style" data-aos="fade-up" style={{ backgroundImage: `url(${mille})` }} >

                    </div>
                    <div class="overlay" onClick={e => {
                        this.showModal(4);
                    }}>
                        <div class="text">Mille</div>
                    </div>

                </div>
            </div>
            <div className="responsive">
                <div className="gallery">
                    <div className="image-style" data-aos="fade-up" style={{ backgroundImage: `url(${signora})` }} >

                    </div>
                    <div class="overlay" onClick={e => {
                        this.showModal(5);
                    }}>
                        <div class="text">Signoraaa!</div>
                    </div>

                </div>
            </div>
            <div className="responsive">
                <div className="gallery">
                    <div className="image-style" data-aos="fade-up" style={{ backgroundImage: `url(${me_so_rotta})` }} >

                    </div>
                    <div class="overlay" onClick={e => {
                        this.showModal(6);
                    }}>
                        <div class="text">Fuori dai denti<br />"Me so rotta er ca"</div>
                    </div>

                </div>
            </div>
            <div className="responsive">
                <div className="gallery">
                    <div className="image-style" data-aos="fade-up" style={{ backgroundImage: `url(${treat_people_with_kindness})` }}>

                    </div>
                    <div class="overlay" onClick={e => {
                        this.showModal(7);
                    }}>
                        <div class="text">Treat People with Kindness</div>
                    </div>

                </div>
            </div>

            <div className="responsive">
                <div className="gallery">
                    <div className="image-style" data-aos="fade-up" style={{ backgroundImage: `url(${girl})` }} >
                    </div>
                    <div class="overlay" onClick={e => {
                        this.showModal(8);
                    }}>
                        <div class="text">Tropical Summer</div>
                    </div>

                </div>
            </div>

            <div className="responsive">
                <div className="gallery">
                    <div className="image-style" data-aos="fade-up" style={{ backgroundImage: `url(${bowie})` }}>

                    </div>
                    <div class="overlay" onClick={e => {
                        this.showModal(9);
                    }}>
                        <div class="text">Bowie</div>
                    </div>

                </div>
            </div>
            <div className="responsive">
                <div className="gallery">
                    <div className="image-style" data-aos="fade-up" style={{ backgroundImage: `url(${avocado})` }} >

                    </div>
                    <div class="overlay" onClick={e => {
                        this.showModal(10);
                    }}>
                        <div class="text">Avocado</div>
                    </div>

                </div>
            </div>

            <div className="responsive" style={{ paddingBottom: "10%" }}>
                <div className="gallery">
                    <div className="image-style" data-aos="fade-up" style={{ backgroundImage: `url(${coffee})` }} >

                    </div>
                    <div class="overlay" onClick={e => {
                        this.showModal(11);
                    }}>
                        <div class="text">Coffee</div>
                    </div>

                </div>
            </div>


        </div>)
    }
}