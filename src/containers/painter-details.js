import React, {Component} from 'react';
import Gallery from "react-photo-gallery";
import { Container, Row, Col } from 'reactstrap';
import {connect} from 'react-redux';

const paints = [
    {
      src: "http://центркультуры.рф/wp-content/uploads/2016/02/165502901.jpg",
      width: 4,
      height: 3
    },
    {
        src: "https://www.buro247.ru/local/images/buro/_repetitsija_baleta_jpg_1348606229.jpg",
        width: 4,
        height: 3
      },
      {
        src: "https://s12.stc.all.kpcdn.net/share/i/12/6022452/inx960x640.jpg",
        width: 4,
        height: 3
      },
      {
        src: "http://www.rulez-t.info/uploads/posts/2008-01/16/dali_13.jpg",
        width: 4,
        height: 3
      },
      {
        src: "https://shkolazhizni.ru/img/content/i160/160000_big.jpg",
        width: 4,
        height: 3
      },
      {
        src: "https://regnum.ru/uploads/pictures/news/2017/01/08/regnum_picture_1483863687149432_normal.jpg",
        width: 4,
        height: 3
      },
    ]

const BasicRows = () => <Gallery photos={paints} />;

class PainterDetail extends Component {

    render() {
        if(!this.props.painter) {
            return (<Container   style={{ marginTop:"150px" }}>
                        <BasicRows />
                    </Container>);
        }
        return (
            <Container style={{marginTop: "100px"}}>
                <Row className="painter-description">
                    <Col className="painter-description-left">
                        <img src={this.props.painter.portrait} 
                        style={{width: '300px',
                                height: '350px',
                                }}/>
                    </Col>
                    <Col className="painter-description-right">
                        <h2 className="name-p"> {this.props.painter.first} {this.props.painter.last}</h2>                
                        <p className="description">{this.props.painter.description}</p>
                    </Col>
                </Row>
                <Row className="paint-container">
                    <Col lg={4} md={6} sm={10} >
                        <img src={this.props.painter.paint1} />
                    </Col>
                    <Col lg={4} md={6} sm={10}>
                        <img src={this.props.painter.paint2} />
                    </Col>
                    <Col lg={4} md={6} sm={10}  className="justify-content-center">
                        <img src={this.props.painter.paint3} />    
                    </Col>
               </Row>
            </Container>
        );
    }

}

function mapStateToProps(state) {
    return {
        painter: state.activePainter
    };
}

export default connect(mapStateToProps)(PainterDetail);