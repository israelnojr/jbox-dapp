import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import gImg from '../../components/front/img/google.png';
import aImg from '../../components/front/img/apple.png';

export default class Footer extends Component {
    render() {
       return (
        <footer className="sticky-footer">
            <div className="container">
                <div className="row no-gutters">
                    <div className="col-lg-6 col-sm-6">
                    <p className="mt-1 mb-0"><strong className="text-dark mr-1">JBOXCOIN</strong> <br/>
                        <small className="mt-0 mb-0"><a className="text-primary" target="_blank" href="https://www.jboxcoin.org/">Jbox Inc.</a></small>
                    </p>
                    </div>
                    <div className="col-lg-6 col-sm-6 text-right">
                    <div className="app">
                        <Link className="mr-2" to="#"><img alt="" src={gImg}/></Link>
                        <Link to="#"><img alt="" src={aImg}/></Link>
                    </div>
                    </div>
                </div>
            </div>
        </footer>
       );
    }
}
