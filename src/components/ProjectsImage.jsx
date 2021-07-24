import { Component } from 'react';
import Modal from "./Modal";

import sito_avocado from "../images/sito_avocado.jpg"
import avocado from "../images/avocado.jpg"
import bowie from "../images/bowie.jpg"
import capital_N from "../images/capital_N.jpg"
import coffee from "../images/coffee.jpg"
import mille from "../images/Mille.JPG"
import dtiys_alona from "../images/dtiys_alona.jpg"
import gb from "../images/GB.jpg"
import girl from "../images/girl.jpg"
import lhascrittounafemmina from "../images/lhascrittounafemmina.jpg"
import sfondo from "../images/sfondo.jpg"
import treat_people_with_kindness from "../images/treat_people_with_kindness.jpg"
import rumore from "../images/Rumore.JPG"
import loki from "../images/Loki.JPG"


export default class ProjectsImage extends Component {
    constructor() {
        super()
        this.state = {
            show: false,
            img: ""
        };
        this.showModal.bind(this);

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
                    <div className="image-style" style={{ backgroundImage: `url(${loki})` }} onClick={e => {
                        this.showModal(0);
                    }}>

                    </div>

                </div>
            </div>
            <div className="responsive">
                <div className="gallery">
                    <div className="image-style" style={{ backgroundImage: `url(${rumore})` }} onClick={e => {
                        this.showModal(1);
                    }}>

                    </div>

                </div>
            </div>
            <div className="responsive">
                <div className="gallery">
                    <div className="image-style" style={{ backgroundImage: `url(${avocado})` }} onClick={e => {
                        this.showModal(2);
                    }}>

                    </div>

                </div>
            </div>
            <div className="responsive">
                <div className="gallery">
                    <div className="image-style" style={{ backgroundImage: `url(${bowie})` }} onClick={e => {
                        this.showModal(3);
                    }}>

                    </div>

                </div>
            </div>
            <div className="responsive">
                <div className="gallery">
                    <div className="image-style" style={{ backgroundImage: `url(${capital_N})` }} onClick={e => {
                        this.showModal(4);
                    }}>

                    </div>

                </div>
            </div>
            <div className="responsive">
                <div className="gallery">
                    <div className="image-style" style={{ backgroundImage: `url(${coffee})` }} onClick={e => {
                        this.showModal(5);
                    }}>

                    </div>

                </div>
            </div>
            <div className="responsive">
                <div className="gallery">
                    <div className="image-style" style={{ backgroundImage: `url(${mille})` }} onClick={e => {
                        this.showModal(6);
                    }}>
                    </div>

                </div>
            </div>
            <div className="responsive">
                <div className="gallery">
                    <div className="image-style" style={{ backgroundImage: `url(${dtiys_alona})` }} onClick={e => {
                        this.showModal(7);
                    }}>
                    </div>

                </div>
            </div>
            <div className="responsive">
                <div className="gallery">
                    <div className="image-style" style={{ backgroundImage: `url(${gb})` }} onClick={e => {
                        this.showModal(8);
                    }}>
                    </div>

                </div>
            </div>
            <div className="responsive" style={{ paddingBottom: "10%" }}>
                <div className="gallery">
                    <div className="image-style" style={{ backgroundImage: `url(${girl})` }} onClick={e => {
                        this.showModal(9);
                    }}>
                    </div>

                </div>
            </div>
        </div>)
    }
}