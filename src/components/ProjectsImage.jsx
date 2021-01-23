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

    state = {
        show: false,
        img: avocado
    };
    showModal(img) {
        this.setState({
            show: !this.state.show,
            img: img
        });
    };


    render() {
        var modal = document.getElementById("myModal");

        return (<div className="homeClass projectClass">
            <Modal onClose={this.showModal}
                show={this.state.show} />

            <div className="responsive">
                <div className="gallery">
                    <div onClick={e => {
                        this.showModal(avocado);
                    }}>
                        <img src={sito_avocado} alt="avocado" width="600" height="400" />
                    </div>
                    <div className="desc">Add a description of the image here</div>
                </div>
            </div>
            <div className="responsive">
                <div className="gallery">
                    <a target="_blank" href={bowie}>
                        <img src={bowie} alt="bowie" width="600" height="400" />
                    </a>
                    <div className="desc">Add a description of the image here</div>
                </div>
            </div>
            <div className="responsive">
                <div className="gallery">
                    <a target="_blank" href={capital_N}>
                        <img src={capital_N} alt="capital_N" width="600" height="400" />
                    </a>
                    <div className="desc">Add a description of the image here</div>
                </div>
            </div>
            <div className="responsive">
                <div className="gallery">
                    <a target="_blank" href={coffee}>
                        <img src={coffee} alt="coffee" width="600" height="400" />
                    </a>
                    <div className="desc">Add a description of the image here</div>
                </div>
            </div>
            <div className="responsive">
                <div className="gallery">
                    <a target="_blank" href={desk}>
                        <img src={desk} alt="desk" width="600" height="400" />
                    </a>
                    <div className="desc">Add a description of the image here</div>
                </div>
            </div>
            <div className="responsive">
                <div className="gallery">
                    <a target="_blank" href={dtiys_alona}>
                        <img src={dtiys_alona} alt="dtiys_alona" width="600" height="400" />
                    </a>
                    <div className="desc">Add a description of the image here</div>
                </div>
            </div>
            <div className="responsive">
                <div className="gallery">
                    <a target="_blank" href={GB}>
                        <img src={GB} alt="GB" width="600" height="400" />
                    </a>
                    <div className="desc">Add a description of the image here</div>
                </div>
            </div>
            <div className="responsive" style={{ paddingBottom: "10%" }}>
                <div className="gallery">
                    <a target="_blank" href={girl}>
                        <img src={girl} alt="girl" width="600" height="400" />
                    </a>
                    <div className="desc">Add a description of the image here</div>
                </div>
            </div>
        </div>)
    }
}