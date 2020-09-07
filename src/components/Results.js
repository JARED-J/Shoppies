import React from 'react';
import {connect} from 'react-redux';
import {addNominee} from '../store/actions/nominees';

const Results = props => {
    const {results, handleClick} = props;
    return results.map( item => (
        <div>
            <li key={item.imdbid}>{item.Title} {item.year}</li>
            <button onClick={() => handleClick(item)}> Nominate </button>
        </div>
    ))
}

const mapDispatch = dispatch => {
    return {
        handleClick: item => dispatch(addNominee(item))
    }
}

export default connect(null, mapDispatch)(Results);