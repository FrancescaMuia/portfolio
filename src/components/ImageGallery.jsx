import { Component } from 'react';
import avocado from "../images/avocado.jpg"
import bowie from "../images/bowie.jpg"
import capital_N from "../images/capital_N.jpg"
import coffee from "../images/coffee.jpg"
import dtiys_alona from "../images/dtiys_alona.jpg"
import GB from "../images/GB.jpg"
import girl from "../images/girl.jpg"
import lhascrittounafemmina from "../images/lhascrittounafemmina.jpg"
import sfondo from "../images/sfondo.jpg"
import treat_people_with_kindness from "../images/treat_people_with_kindness.jpg"

export default class ImageGallery extends Component {
  render() {
    return (
      <div style={{ margin: "5%" }}>
        <div className="flex justify-between" style={{ width: "98%", marginBottom: "1%" }}>
          <img src={capital_N} style={{ width: "56%", height: "200%", marginRight: "1%" }} alt="capitalN" />
          <img src={bowie} style={{ width: "45.1%", height: "200%", marginRight: "1%" }} alt="Bowie" />
        </div>
        <div className="flex justify-between" style={{ width: "100%", marginBottom: "1%" }}>
          <div >
            <img src={avocado} style={{ width: "95%", height: "49%", marginBottom: "5%" }} alt="Bowie" />
            <img src={coffee} style={{ width: "95%", height: "49%", marginTop: "5%" }} alt="Bowie" />
          </div>
          <img src={girl} style={{ width: "40%", height: "50%", marginRight: "1%" }} alt="Bowie" />
          <img src={treat_people_with_kindness} style={{ width: "40%", height: "50%", }} alt="Bowie" />
        </div>
        <div className="flex justify-between" style={{ width: "100%" }}>
          <div style={{ width: "32%" }}>
            <img src={sfondo} style={{ width: "95%", height: "46.8%", marginBottom: "5%" }} alt="Bowie" />
            <img src={GB} style={{ width: "95%", height: "46.8%", marginTop: "5%" }} alt="Bowie" />
          </div>
          <img src={dtiys_alona} style={{ width: "40%", height: "50%", }} alt="Bowie" />
          <img src={lhascrittounafemmina} style={{ width: "36.2%", height: "100%", marginLeft: "1%" }} alt="Bowie" />
        </div>


      </div>

    );
  }
}
