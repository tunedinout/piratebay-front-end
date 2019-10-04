import React from 'react';
import ReactDOM from 'react-dom';
import './search.css';


export default class Search extends React.Component {

    onKeyChange(event) {
        //main component will pass the suggest list ?

    }
    render() {
        return <div class="dropdown">


            <div id="search-dropdown" class="dropdown__content">
                <input type="text" placeholder="Search .." id="dropdown-input" onKeyUp={event => this.props.onKeyChange(event)}></input>
                <ul class="dropdown__suggest-list">

                    {this.props.searchSuggest.map(suggestText =>
                        <li class="dropdown__suggest-list-item">
                            <span class="dropdown_suggest-list-item-text">{suggestText}</span>
                        </li>

                    )}

                </ul>

            </div>

        </div>
    }
}