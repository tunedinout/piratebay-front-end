import React from 'react';
import ReactDOM from 'react-dom';
import SearchSubComponent from './searchSubCmp.js'



const apiPort = 3000;
export default class SearchComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = { list: [] }
    }

    onInputChange = (event) => {
        event.preventDefault();
        console.log(event.target.value)
        if (event.target.value !== '')
            this.filterSuggestions(event.target.value);
    }

    getDataFromAPI = (inputString) => {
        fetch(`http://localhost:${apiPort}/api/getData?search=${inputString}`)
            .then((data) => data.json())
            .then((res) => {
                this.setState({ list: res.data });
                //console.log(this.state.list);
            });

    }

    filterSuggestions(inputString) {
        this.getDataFromAPI(inputString);
    }


    render() {
        return (<SearchSubComponent
            searchSuggest={this.state.list}
            onInputChange={this.onInputChange} />)
    }

}