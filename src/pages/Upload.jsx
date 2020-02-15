import React, { Component } from 'react';
import { FaFileVideo } from "react-icons/fa";
class Upload extends Component {
    state = {  }
    render() { 
        return ( 
            <div id="content-wrapper">
                <div class="container-fluid pt-5 pb-5">
                    <div class="row" style={{height: '70vh'}}>
                        <div class="col-md-8 mx-auto text-center upload-video  pb-5">
                            <h1><FaFileVideo class="fas fa-file-upload text-primary"/></h1>
                            <h4 class="mt-5">Select Video files to upload</h4>
                            <p class="land">or drag and drop video files</p>
                            <div class="mt-4">
                            <a class="btn btn-outline-primary" href="upload-video.html">Upload Video</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default Upload;