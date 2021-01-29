import React from "react";

export default class Modal extends React.Component {

    render() {
        if (!this.props.show) {
            return null;
        }
        console.log(this.props);
        return (
            <div className="modalClass flex">
                <img src={this.props.name} style={{ width: "30%" }} onClick={
                    this.props.onClose
                } />
            </div>
        )
    }
}