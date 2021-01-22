import { Component } from 'react';

import avocado from "../images/avocado.jpg"
import bowie from "../images/bowie.jpg"


export default class ProjectsImage extends Component {


    render() {

        return (<div className="homeClass projectClass">
            <div className="responsive">
                <div className="gallery">
                    <a target="_blank" href={avocado}>
                        <img src={avocado} alt="avocado" width="600" height="400" />
                    </a>
                    <div className="desc">Add a description of the image here</div>
                </div>
            </div>
            <div className="responsive">
                <div className="gallery">
                    <a target="_blank" href={avocado}>
                        <img src={avocado} alt="avocado" width="600" height="400" />
                    </a>
                    <div className="desc">Add a description of the image here</div>
                </div>
            </div>
            <div className="responsive">
                <div className="gallery">
                    <a target="_blank" href={avocado}>
                        <img src={avocado} alt="avocado" width="600" height="400" />
                    </a>
                    <div className="desc">Add a description of the image here</div>
                </div>
            </div>
            <div className="responsive">
                <div className="gallery">
                    <a target="_blank" href={avocado}>
                        <img src={avocado} alt="avocado" width="600" height="400" />
                    </a>
                    <div className="desc">Add a description of the image here</div>
                </div>
            </div>
            <div className="responsive">
                <div className="gallery">
                    <a target="_blank" href={avocado}>
                        <img src={avocado} alt="avocado" width="600" height="400" />
                    </a>
                    <div className="desc">Add a description of the image here</div>
                </div>
            </div>
            <div className="responsive">
                <div className="gallery">
                    <a target="_blank" href={avocado}>
                        <img src={avocado} alt="avocado" width="600" height="400" />
                    </a>
                    <div className="desc">Add a description of the image here</div>
                </div>
            </div>
            <div className="responsive">
                <div className="gallery">
                    <a target="_blank" href={avocado}>
                        <img src={avocado} alt="avocado" width="600" height="400" />
                    </a>
                    <div className="desc">Add a description of the image here</div>
                </div>
            </div>
            <div className="responsive">
                <div className="gallery">
                    <a target="_blank" href={avocado}>
                        <img src={avocado} alt="avocado" width="600" height="400" />
                    </a>
                    <div className="desc">Add a description of the image here</div>
                </div>
            </div>
        </div>)
    }
}