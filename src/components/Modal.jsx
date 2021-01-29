import React from "react";
import avocado from "../images/avocado.jpg"
import bowie from "../images/bowie.jpg"
import capital_N from "../images/capital_N.jpg"
import coffee from "../images/coffee.jpg"
import desk from "../images/desk.jpg"
import dtiys_alona from "../images/dtiys_alona.jpg"
import GB from "../images/GB.jpg"
import girl from "../images/girl.jpg"

export default class Modal extends React.Component {

    constructor(props) {
        super(props);
        console.log("ciaone");
        console.log(this.props);
        console.log("ciaone after");
        this.state = {
            // clicks is called `pointer` here and initially
            // is set to the first index of the imgs array
            clicked: false,
            bool: false,
            pointer: 0,
            imgs: [
                avocado,
                bowie,
                capital_N,
                coffee,
                desk,
                dtiys_alona,
                GB,
                girl
            ]
        };

        // Bind your class method in the constructor
        this.handleClick = this.handleClick.bind(this);
    }

    // Here we get the length of the imgs array, and the current
    // pointer position. If the pointer is at the end of the array
    // set it back to zero, otherwise increase it by one.
    handleClick(start) {
        const { length } = this.state.imgs;
        const { pointer, clicked } = this.state;
        let newPointer = 0;
        console.log(`start: ${start}, boolState:${clicked}, pointer:${pointer}`);

        if (clicked === false) {
            console.log("inside if");
            newPointer = start === length - 1 ? 0 : start + 1;
        }
        else {
            console.log("inside else");

            newPointer = pointer === length - 1 ? 0 : pointer + 1;
        }
        console.log(this.props);
        console.log(newPointer);
        this.setState({ pointer: newPointer, bool: true });
    }

    clicked(click) {
        this.setState({ clicked: click, bool: click });

    }

    render() {
        if (!this.props.show) {
            return null;
        }

        const { pointer, imgs } = this.state;

        // this.setState({ pointer: this.props.start });



        return (
            <div className="modalClass flex">
                <img src={imgs[this.state.bool === false ? this.props.start : pointer]} style={{ width: "30%" }} onClick={() => {
                    this.clicked(false);

                    this.props.onClose();
                }
                } />
                <p onClick={() => {
                    this.handleClick(this.props.start);
                    this.clicked(true);

                }}>Freccia</p>
            </div>
        )
    }
}