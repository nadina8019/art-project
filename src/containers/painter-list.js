import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {selectPainter} from '../actions/index';

class PainterList extends Component {

    createListItems() {
        return this.props.painters.map((painter) => {
            return (
                <li className="painter-name"
                    key={painter.id}                     
                    onClick={() => this.props.selectPainter(painter)}          
                >
                    {painter.first} {painter.last}
                </li>
            );
        });
    }

    render() {
        return (
            <ul className="painter-block">
                 {this.createListItems()}
            </ul>
        );
    }
}

function mapStateToProps(state) {
    return {
        painters: state.painters
    };
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({selectPainter: selectPainter}, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(PainterList);