import { Component } from 'react';
import Modal from "./Modal";

import sito_avocado from "../images/sito_avocado.jpg"
import avocado from "../images/avocado.jpg"
import bowie from "../images/bowie.jpg"
import capital_N from "../images/capital_N.jpg"
import coffee from "../images/coffee.jpg"
import desk from "../images/desk.jpg"
import dtiys_alona from "../images/dtiys_alona.jpg"
import GB from "../images/GB.jpg"
import girl from "../images/girl.jpg"
import lhascrittounafemmina from "../images/lhascrittounafemmina.jpg"
import sfondo from "../images/sfondo.jpg"
import treat_people_with_kindness from "../images/treat_people_with_kindness.jpg"



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
                    <div className="image-style" onClick={e => {
                        this.showModal(0);
                    }}>
                        <img src={sito_avocado} alt="avocado" className="image-border" style={{ height: "100%" }} />
                    </div>
                    <div className="desc">Add a description of the image here</div>
                </div>
            </div>
            <div className="responsive">
                <div className="gallery">
                    <div className="image-style" onClick={e => {
                        this.showModal(1);
                    }}>
                        <img src={bowie} alt="bowie" className="image-border" style={{ height: "100%" }} />
                    </div>
                    <div className="desc">Add a description of the image here</div>
                </div>
            </div>
            <div className="responsive">
                <div className="gallery">
                    <div className="image-style" onClick={e => {
                        this.showModal(2);
                    }}>
                        <img src={capital_N} alt="capital_N" className="image-border" style={{ height: "100%" }} />
                    </div>
                    <div className="desc">Add a description of the image here</div>
                </div>
            </div>
            <div className="responsive">
                <div className="gallery">
                    <div className="image-style" onClick={e => {
                        this.showModal(3);
                    }}>
                        <img src={coffee} alt="coffee" className="image-border" style={{ height: "100%" }} />
                    </div>
                    <div className="desc">Add a description of the image here</div>
                </div>
            </div>
            <div className="responsive">
                <div className="gallery">
                    <div className="image-style" onClick={e => {
                        this.showModal(4);
                    }}>                        <img src={desk} alt="desk" className="image-border" style={{ height: "100%" }} />
                    </div>
                    <div className="desc">Add a description of the image here</div>
                </div>
            </div>
            <div className="responsive">
                <div className="gallery">
                    <div className="image-style" onClick={e => {
                        this.showModal(5);
                    }}>                        <img src={dtiys_alona} alt="dtiys_alona" className="image-border" style={{ height: "100%" }} />
                    </div>
                    <div className="desc">Add a description of the image here</div>
                </div>
            </div>
            <div className="responsive">
                <div className="gallery">
                    <div className="image-style" onClick={e => {
                        this.showModal(6);
                    }}>                        <img src={GB} alt="GB" className="image-border" style={{ height: "100%" }} />
                    </div>
                    <div className="desc">Add a description of the image here</div>
                </div>
            </div>
            <div className="responsive" style={{ paddingBottom: "10%" }}>
                <div className="gallery">
                    <div className="image-style" onClick={e => {
                        this.showModal(7);
                    }}>                        <img src={girl} alt="girl" className="image-border" style={{ height: "100%" }} />
                    </div>
                    <div className="desc">Add a description of the image here</div>
                </div>
            </div>
        </div>)
    }
}