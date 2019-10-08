import React from 'react';
import ReactDOM from 'react-dom';
import './search.css';
import SearchIcon from '@material-ui/icons/SearchSharp';


export default class Search extends React.Component {

    onClick() {
        // console.log(event);
        //make it darker
        let dom = document.getElementsByClassName('dropdown__input-container');
        dom = dom[0];
        dom.classList.add('dropdown__input-container-dark');


    }
    onFocusOut() {
        let dom = document.getElementsByClassName('dropdown__input-container');
        dom = dom[0];
        dom.classList.remove('dropdown__input-container-dark');
    }


    render() {
        return <div className="dropdown">


            <div id="search-dropdown" className="dropdown__content">
                <div className="dropdown__input-container">
                    <SearchIcon />
                    <input type="text" id="dropdown-input" onChange={this.props.onInputChange} onClick={e => this.onClick(e)} onMouseOut={this.onFocusOut} />
                </div>

                <ul className="dropdown__suggest-list">

                    {this.props.searchSuggest.map(suggestText =>
                        <li className="dropdown__suggest-list-item">
                            <span className="dropdown_suggest-list-item-text">{suggestText}</span>
                        </li>

                    )}

                </ul>

            </div>

        </div >
    }
}