import React from 'react';
import SearchSubComponent from './searchSubCmp.js'



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
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=85f25ffa5ab3017b7273d2a1d0018133&language=en-US&query=${inputString}&page=1&include_adult=${false}`)
            .then((data) => data.json())
            .then((data) => {
                let listOfTitles = [];
                data.results.forEach(element => {
                    listOfTitles.push(element.title)
                });
                this.setState({ list: listOfTitles })
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