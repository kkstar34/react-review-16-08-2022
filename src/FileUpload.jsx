// import axios from 'axios';

import React,{Component} from 'react';

class FileUpload extends Component {

	state = {
    	selectedFile : ""
	};
	

	onFileChange = event => {

    const reader = new FileReader();
	const file = event.target.files[0];
	  if(file){
		reader.readAsDataURL(file);
	  }

	  reader.addEventListener("load", () => {
		//transforme en base 64
		console.log(reader.progress)
     	this.setState({selectedFile: reader.result})
      }, false);
	
	};
	

	fileData = () => {
	
	if (this.state.selectedFile) {
		
		return (
		<div className="box">
			<h2>File Details:</h2>
            <br />
            <div className="image-container">
                <img src={this.state.selectedFile} alt="" />
            </div>
            <br />
                        
            <p>File Name: </p>

            <br />
                        
            <p>File Type: </p>

                        
            <p>
                        Last Modified:{" "}
			
			</p>

		</div>
		);
	} else {
		return (
		<div>
			<br />
			
		</div>
		);
	}
	};
	
	render() {
	
	return (
		<div>
			<h1>
			Test
			</h1>

			<h3>
			File Upload !
			</h3>
            <br />
			<div>
				<input type="file" onChange={this.onFileChange} />
				<button onClick={this.onFileUpload}>
				Upload!
				</button>
			</div>
		{this.fileData()}
		</div>
	);
	}
}

export default FileUpload;
