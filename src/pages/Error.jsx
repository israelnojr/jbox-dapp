import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import errorImg from '../components/front/img/404.png';
class Error extends Component {
    state = {  }
    render() { 
        return ( 
            <div id="content-wrapper">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-md-8 mx-auto text-center  pt-4 pb-5">
                            <h1><img alt="404" src={errorImg} class="img-fluid"/></h1>
                            <h1>Sorry! Page not found.</h1>
                            <p class="land">Unfortunately the page you are looking for has been moved or deleted.</p>
                            <div class="mt-5">
                                <Link class="btn btn-outline-primary" to="/home"><i class="mdi mdi-home"></i> GO TO HOME PAGE</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default Error;