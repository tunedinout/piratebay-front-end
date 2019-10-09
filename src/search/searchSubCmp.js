import React from 'react';
import ReactDOM from 'react-dom';
import './searchSubCmp.css';
import SearchIcon from '@material-ui/icons/SearchSharp';


export default class SearchSubComponent extends React.Component {

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

    onListItemClick(e, index) {
        console.log(e.target);
        //change the input text of dropdown-input
        //console.log(document.getElementById('dropdown-input').value);
        //document.getElementById('dropdown-input').children[0].textContent = e.target.value;
        document.getElementById('dropdown-input').value =
            document.getElementById(`dropdown-txt-${index}`).childNodes[0].data;
        //console.log(document.getElementById(`dropdown-txt-${index}`).childNodes[0].data);
    }
    render() {
        return <div className="dropdown">


            <div id="search-dropdown" className="dropdown__content">
                <div className="dropdown__input-container">
                    <SearchIcon />
                    <input type="text" id="dropdown-input" onChange={this.props.onInputChange} onClick={e => this.onClick(e)} onMouseOut={this.onFocusOut} />
                </div>

                <ul className="dropdown__suggest-list">

                    {this.props.searchSuggest.map((suggestText, index, arr) =>
                        <li key={index} className="dropdown__suggest-list-item" >
                            <span id={`dropdown-txt-${index}`} className="dropdown_suggest-list-item-text" onClick={e => this.onListItemClick(e, index)}>{suggestText}</span>
                        </li>

                    )}

                </ul>

            </div>

        </div >
    }
}