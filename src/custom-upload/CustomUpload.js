import React from 'react';
import './index.css'

class CustomUpload extends React.Component {
    constructor() {
        super();
        this.handleInputChange = this.handleInputChange.bind(this);
    }
    state = {
        selectedFiles: null
    }
    handleInputChange(e) {
        console.log(e.target.files);
    }
    render() {
        return (
            <div className="choose-file-container">
                <input type="file" className="choose-file" id="chooseFile" onChange={this.handleInputChange} />
            </div>
        );
    }
}

export default CustomUpload;