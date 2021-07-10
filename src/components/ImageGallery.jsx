import { Component } from 'react';
import avocado from "../images/avocado.jpg"
import bowie from "../images/bowie.jpg"
import DancingQueen from "../images/DancingQueen.JPG"
import coffee from "../images/coffee.jpg"
import Do_it from "../images/Do it.JPG"
import GB from "../images/GB.jpg"
import girl from "../images/girl.jpg"
import lhascrittounafemmina from "../images/lhascrittounafemmina.jpg"
import Signora from "../images/Signora.JPG"
import treat_people_with_kindness from "../images/treat_people_with_kindness.jpg"
import Mille from "../images/Mille.JPG"

export default class ImageGallery extends Component {
  render() {
    return (
      <div style={{ margin: "5%" }}>
        <div className="flex justify-between" style={{ width: "98%", marginBottom: "1%" }}>
          <img src={DancingQueen} style={{ width: "56%", height: "200%", marginRight: "1%" }} alt="capitalN" />
          <img src={girl} style={{ width: "44.9%", height: "200%", marginRight: "1%" }} alt="Bowie" />
        </div>
        <div className="flex justify-between" style={{ width: "100%" }}>
          <div >
            <img src={avocado} style={{ width: "95%", height: "46%", marginBottom: "5%" }} alt="Bowie" />
            <img src={coffee} style={{ width: "95%", height: "49.5%" }} alt="Bowie" />
          </div>
          <img src={bowie} style={{ width: "39.25%", height: "50%", marginRight: "1%" }} alt="Bowie" />
          <img src={treat_people_with_kindness} style={{ width: "39.15%", height: "50%", }} alt="Bowie" />
        </div>
        <div className="flex justify-between" style={{ width: "100%" }}>
          <img src={Mille} style={{ width: "72%", height: "50%", }} alt="Bowie" />
          <div style={{ width: "27%" }}>
            <img src={Signora} style={{ width: "100%", height: "47%", marginBottom: "4%" }} alt="Bowie" />
            <img src={Do_it} style={{ width: "100%", height: "47%" }} alt="Bowie" />
          </div>
        </div>


      </div>

    );
  }
}
