import React from 'react';
import ReactDOM from 'react-dom';
import Search from '../search/search'



const apiPort = 3000;
export default class App extends React.Component {
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
        if (event.target.value !== '')
            this.filterSuggestions(event.target.value);
    }

    getDataFromAPI = () => {
        console.log(this.state);
        fetch(`http://localhost:${apiPort}/api/getData`)
            .then((data) => data.json())
            .then((res) => {
                this.setState({ list: res.data });
                console.log(res.data);
            });
    }

    filterSuggestions(inputString) {
        this.getDataFromAPI();
    }


    render() {
        return (<Search searchSuggest={this.state.list} onInputChange={this.onInputChange} />)
    }

}