import React from "react";

export default class Modal extends React.Component {

    render() {
        if (!this.props.show) {
            return null;
        }
        console.log(this.props);
        return (
            <div className="modalClass flex" style={{ width: "100%", height: "100%", backgroundColor: "#fffaf2", justifyContent: "center", alignItems: "center" }}>
                <img src={this.props.name} style={{ width: "30%" }} onClick={
                    this.props.onClose
                } />
            </div>
        )
    }
}