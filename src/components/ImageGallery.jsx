import { Component } from 'react';
import Gallery from 'react-photo-gallery';
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
import ResponsiveGallery from 'react-responsive-gallery';

const PHOTO_SET = [
  {
    src: avocado,
    imgClassName: "test"
  }, {
    src: bowie,
    imgClassName: "testBowie"
  }, {
    src: capital_N,
    width: 4,
    height: 3
  }, {
    src: coffee,
    width: 4,
    height: 3
  }, {
    src: desk,
    width: 4,
    height: 3
  }, {
    src: dtiys_alona,
    width: 4,
    height: 3
  }, {
    src: GB,
    width: 4,
    height: 3
  }, {
    src: girl,
    width: 4,
    height: 3
  }, {
    src: lhascrittounafemmina,
    width: 4,
    height: 3
  }, {
    src: sfondo,
    width: 4,
    height: 3
  }, {
    src: treat_people_with_kindness,
    width: 4,
    height: 3
  },
]

export default class ImageGallery extends Component {
  render() {
    return (
      <div style={{ margin: "5%" }}>
        <div className="flex justify-between" style={{ width: "98%", marginBottom: "1%" }}>
          <img src={capital_N} style={{ width: "56%", height: "200%", marginRight: "1%" }} />
          <img src={bowie} style={{ width: "45.1%", height: "200%", marginRight: "1%" }} />
        </div>
        <div className="flex justify-between" style={{ width: "100%", marginBottom: "1%" }}>
          <div >
            <img src={avocado} style={{ width: "95%", height: "49%", marginBottom: "5%" }} />
            <img src={coffee} style={{ width: "95%", height: "49%", marginTop: "5%" }} />
          </div>
          <img src={girl} style={{ width: "40%", height: "50%", marginRight: "1%" }} />
          <img src={treat_people_with_kindness} style={{ width: "40%", height: "50%", }} />
        </div>
        <div className="flex justify-between" style={{ width: "100%" }}>
          <div style={{ width: "32%" }}>
            <img src={sfondo} style={{ width: "95%", height: "46.8%", marginBottom: "5%" }} />
            <img src={GB} style={{ width: "95%", height: "46.8%", marginTop: "5%" }} />
          </div>
          <img src={dtiys_alona} style={{ width: "40%", height: "50%", }} />
          <img src={lhascrittounafemmina} style={{ width: "50.7%", height: "100%", marginLeft: "1%" }} />
        </div>


      </div>

    );
  }
}
