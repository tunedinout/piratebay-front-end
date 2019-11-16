import React from 'react'
import './index.css'
import Axios from 'axios';
// component html and css from https://codepen.io/sazzad/pen/antDJ
class Upload extends React.Component {
    constructor() {
        super();
        this.handleInputChange = this.handleInputChange.bind(this);
        this.uploadHandler = this.uploadHandler.bind(this);
    }
    state = {
        selectedFile: null
    }
    uploadHandler() {
        if (!this.state.selectedFile)
            return;
        const data = new FormData();
        data.append('file', this.state.selectedFile)
        Axios.post("http://localhost:8000/upload", data)
            .then(res => { // then print response status
                console.log(res.statusText)
                console.log(res)
            })

    }
    handleInputChange(e) {
        if (!e.target.files)
            return;
        //console.log(e.target.files[0]);
        this.setState({ selectedFile: e.target.files[0] });

    }
    render() {
        let fileSelectClass = this.state.selectedFile ? 'file-upload active' : 'file-upload'
        let uploadSelectClass = this.state.selectedFile ? 'file-upload-button active' : 'file-upload-button'
        return (
            <div className="upload-container">
                <div className={fileSelectClass} >
                    <div className="file-select" >
                        <div className="file-select-button" id="fileName">{this.state.selectedFile ? 'Change File' : 'Choose File'}</div>
                        <div className="file-select-name" id="noFile">{this.state.selectedFile ? this.state.selectedFile.name + '' : 'No file chosen...'}</div>
                        <input type="file" name="file" id="chooseFile" onChange={this.handleInputChange} />
                    </div>

                </div>
                <div className="file-upload-button-container">
                    <button className={uploadSelectClass} onClick={this.uploadHandler}>Upload</button>
                </div>

            </div>

        )
    }
}
export default Upload;