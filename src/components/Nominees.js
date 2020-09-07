import React from 'react';
import {connect} from 'react-redux';
import {deleteNominee} from '../store/actions/nominees';

const Nominees = props => {
    const {nominees, handleClick} = props;
    return nominees.map( item => (
        <div>
            <li key={item.imdbid}>{item.Title} {item.year}</li>
            <button onClick={() => handleClick(item)}> Remove </button>
        </div>
    ))
}

const mapDispatch = dispatch => {
    return {
        handleClick: item => dispatch(deleteNominee(item))
    }
}

export default connect(null, mapDispatch)(Nominees);