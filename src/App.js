import React from 'react';
import {connect} from 'react-redux';
import {getResultsThunk} from './store/actions/results';
import Results from './components/Results';
import Nominees from './components/Nominees'
import './App.css';

export const App = props => {
    const {nominees, results, handleGetResults} = props;
    return (
        <div>
            <form onSubmit={handleGetResults}>
              <label>Title</label>
              <input name="title" type="text"/>
              <input type="submit" value="Submit"/>
            </form>
            <p>Results</p>
            <Results results={results}/>
            <p>Nominees</p>
            <Nominees nominees={nominees}/>
            {nominees[4] && <alert>You have 5 nominees!</alert>}
        </div>
    )
}

const mapState = state => ({
    nominees: state.nominees,
    results: state.results
})

const mapDispatch = dispatch => {
    return {
        handleGetResults (evt) {
          evt.preventDefault();
          const query = evt.target.title.value;
          dispatch(getResultsThunk(query));
        }
    }
}

export default connect(mapState, mapDispatch)(App);