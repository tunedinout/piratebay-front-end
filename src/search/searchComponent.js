import React from 'react';
import ReactDOM from 'react-dom';
import SearchSubComponent from './searchSubCmp.js'



const apiPort = 3000;
export default class SearchComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list: ['Shawshank Redemption', 'Once upon a time', 'Who killed kennedy?', 'Martha\'s wife', 'The one that got away']
            //why ?
            //this.addItem = this.addItem.bind(this);
            //this.removeItem = this.removeItem.bind(this);
        }
        this.onInputChange = this.onInputChange.bind(this);
        this.filterSuggestions = this.filterSuggestions.bind(this);
    }

    onInputChange(event) {
        event.preventDefault();
        console.log(event.target.value)
        if (event.target.value !== '')
            this.filterSuggestions(event.target.value);
    }

    getDataFromAPI = (inputString) => {
        console.log(this.state);
        fetch(`http://localhost:${apiPort}/api/getData?search=${inputString}`)
            .then((data) => {
                console.log(data);
                return data.json();

            })
            .then((res) => {
                console.log(res.data);
                this.setState({ list: res.data });
                console.log(this.state.list);
            });
        // .then(response => response.body)
        // .then(body => {
        //     console.log(body);
        // })
    }

    filterSuggestions(inputString) {
        this.getDataFromAPI(inputString);
    }


    render() {
        return (<SearchSubComponent searchSuggest={this.state.list} onInputChange={this.onInputChange} />)
    }

}