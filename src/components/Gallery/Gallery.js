import React from 'react';
import Gallery from 'react-photo-gallery';
import Lightbox from 'react-images';
import { Container } from 'reactstrap';

import './Gallery.scss'

const photos = [
  { src: 'http://bibliotekar.ru/muzeumLondon/43.files/image001.jpg', width: 4, height: 3 },
  { src: 'https://artchive.ru/res/media/img/oy800/work/108/295147.jpeg', width: 3, height: 4 },
  { src: 'https://s12.stc.all.kpcdn.net/share/i/12/6022452/inx960x640.jpg', width: 4, height: 3 },
  { src: 'https://s0.tchkcdn.com/g-opGAsPFcDQ7mI4uj9Ziqhw/13/518144/640x480/f/0/9ec_ms10.jpg', width: 4, height: 3 },
  { src: 'https://artnow.ru/img/1149000/1149612.jpg', width: 4, height: 3 },
  { src: 'http://top10a.ru/wp-content/uploads/2017/04/10%D0%9F%D0%BE%D0%BB%D0%B5-%D0%BC%D0%B0%D0%BA%D0%BE%D0%B2-%D1%83-%D0%90%D1%80%D0%B6%D0%B0%D0%BD%D1%82%D0%B5%D1%8F.jpg', width: 4, height: 3 },
  { src: 'https://artchive.ru/res/media/img/oy800/work/0f3/301604.jpg', width: 4, height: 3 },
  { src: 'https://vivareit.ru/wp-content/uploads/2015/08/soln_mone.jpg', width: 4, height: 3 },
  { src: 'https://1.bp.blogspot.com/-ZuZfRq3wDCQ/VNN2LQfbLEI/AAAAAAAALxg/kxyYlhxl7_A/s1600/d4f1856c-smush-0.jpg', width: 2, height: 3 },
  { src: 'http://procanvas.ru/image/data/blog/mone-kyvshinki.jpg', width: 2, height: 2 },
  { src: 'https://infocentereurope.ru/wp-content/uploads/2018/12/Opisanie_kartiny_kloda_mone_-vesna-_1.jpg', width: 4, height: 4 },
  { src: 'http://samie-samie.ru/wp-content/uploads/2017/04/Zhenschiny_v_sadu_mone_1.jpg', width: 4, height: 2 },
];


class Galleri extends React.Component {
  constructor() {
    super();
    this.state = { currentImage: 0 };
    this.closeLightbox = this.closeLightbox.bind(this);
    this.openLightbox = this.openLightbox.bind(this);
    this.gotoNext = this.gotoNext.bind(this);
    this.gotoPrevious = this.gotoPrevious.bind(this);
  }
  openLightbox(event, obj) {
    this.setState({
      currentImage: obj.index,
      lightboxIsOpen: true,
    });
  }
  closeLightbox() {
    this.setState({
      currentImage: 0,
      lightboxIsOpen: false,
    });
  }
  gotoPrevious() {
    this.setState({
      currentImage: this.state.currentImage - 1,
    });
  }
  gotoNext() {
    this.setState({
      currentImage: this.state.currentImage + 1,
    });
  }
  render() {
    return (
      <Container>
          <h1 className="collection-title">Галерея</h1>
        <Gallery photos={photos} onClick={this.openLightbox} />
        <Lightbox images={photos}
          onClose={this.closeLightbox}
          onClickPrev={this.gotoPrevious}
          onClickNext={this.gotoNext}
          currentImage={this.state.currentImage}
          isOpen={this.state.lightboxIsOpen}
        />
      </Container>
    )
  }
}

export default Galleri;
