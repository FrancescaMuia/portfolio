import React from "react";
export default class Modal extends React.Component {
    onClose = e => {
        this.props.onClose && this.props.onClose(e)
    };
    render() {
        if (!this.props.show) {
            return null;
        }
        return <img src={this.props.img} className="modalClass" onClick={e => {
            this.onClose();
        }} />;
    }
}