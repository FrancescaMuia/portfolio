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

const PHOTO_SET = [
  {
    src: avocado,
    width: 4,
    height: 3
  }, {
    src: bowie,
    width: 4,
    height: 3
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
      <div>
        <Gallery photos={PHOTO_SET} />
      </div>

    );
  }
}
