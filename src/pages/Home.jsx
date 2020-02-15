import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { FaSearch, FaEllipsisH, FaCaretDown } from "react-icons/fa";

import ChannelSlider from './components/channelSlider';
//image import
import chanProfileImg from '../components/front/img/s1.png';
import chanProfileImg2 from '../components/front/img/s2.png';
import chanProfileImg3 from '../components/front/img/s3.png';
import chanProfileImg4 from '../components/front/img/s4.png';
import chanProfileImg5 from '../components/front/img/s5.png';

import vidImg from '../components/front/img/v1.png';
import vidImg2 from '../components/front/img/v2.png';
import vidImg3 from '../components/front/img/v3.png';
import vidImg4 from '../components/front/img/v4.png';
import vidImg5 from '../components/front/img/v5.png';

// import '../components/front/vendor/bootstrap/css/bootstrap.min.css';
// import '../components/front/vendor/fontawesome-free/css/all.min.css';
// import '../components/front/vendor/owl-carousel/owl.carousel.css';
// import '../components/front/vendor/owl-carousel/owl.theme.css';


class Home extends Component {
    render() {
        return (
        <div id="content-wrapper">
            <div className="container-fluid pb-0">
                <div className="top-mobile-search">
                    <div className="row">
                        <div className="col-md-12">
                            <form className="mobile-search">
                                <div className="input-group">
                                    <input type="text" placeholder="Search for..." className="form-control" />
                                    <div className="input-group-append">
                                        <button type="button" className="btn btn-dark"><FaSearch className="fas fa-search"/></button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                < ChannelSlider />
                <hr />
                <div className="video-block section-padding">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="main-title">
                                <div className="btn-group float-right right-action">
                                    <a href="#" className="right-action-link text-gray" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Sort by <FaCaretDown className="fa fa-caret-down" aria-hidden="true"/>
                                    </a>
                                    <div className="dropdown-menu dropdown-menu-right">
                                        <a className="dropdown-item" href="#"><i className="fas fa-fw fa-star"></i> &nbsp; Top Rated</a>
                                        <a className="dropdown-item" href="#"><i className="fas fa-fw fa-signal"></i> &nbsp; Viewed</a>
                                        <a className="dropdown-item" href="#"><i className="fas fa-fw fa-times-circle"></i> &nbsp; Close</a>
                                    </div>
                                </div>
                                <h6>Featured Videos</h6>
                            </div>
                        </div>
                        <div className="col-xl-3 col-sm-6 mb-3">
                            <div className="video-card">
                                <div className="video-card-image">
                                    <Link className="play-icon" to="watch"><i className="fas fa-play-circle"></i></Link>
                                   <Link to="watch"> <img className="img-fluid" src={vidImg} alt="" /></Link>
                                    <div className="time">3:50</div>
                                </div>
                                <div className="video-card-body">
                                    <div className="video-title">
                                        <a href="#">There are many variations of passages of Lorem</a>
                                    </div>
                                    <div className="video-page text-success">
                                        Education  <a title="" data-placement="top" data-toggle="tooltip" href="#" data-original-title="Verified">
                                            <i className="fas fa-check-circle text-success"></i></a>
                                    </div>
                                    <div className="video-view">
                                        1.8M views &nbsp;<i className="fas fa-calendar-alt"></i> 11 Months ago
                                </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-sm-6 mb-3">
                            <div className="video-card">
                                <div className="video-card-image">
                                    <Link className="play-icon" to="watch"><i className="fas fa-play-circle"></i></Link>
                                   <Link to="watch"> <img className="img-fluid" src={vidImg2} alt="" /></Link>
                                    <div className="time">3:50</div>
                                </div>
                                <div className="video-card-body">
                                    <div className="video-title">
                                        <a href="#">There are many variations of passages of Lorem</a>
                                    </div>
                                    <div className="video-page text-success">
                                        Education  <a title="" data-placement="top" data-toggle="tooltip" href="#" data-original-title="Verified">
                                            <i className="fas fa-check-circle text-success"></i></a>
                                    </div>
                                    <div className="video-view">
                                        1.8M views &nbsp;<i className="fas fa-calendar-alt"></i> 11 Months ago
                                </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-sm-6 mb-3">
                            <div className="video-card">
                                <div className="video-card-image">
                                    <Link className="play-icon" to="watch"><i className="fas fa-play-circle"></i></Link>
                                   <Link to="watch"> <img className="img-fluid" src={vidImg5} alt="" /></Link>
                                    <div className="time">3:50</div>
                                </div>
                                <div className="video-card-body">
                                    <div className="video-title">
                                        <a href="#">There are many variations of passages of Lorem</a>
                                    </div>
                                    <div className="video-page text-danger">
                                        Education  <a title="" data-placement="top" data-toggle="tooltip" href="#" data-original-title="Unverified">
                                            <i className="fas fa-frown text-danger"></i></a>
                                    </div>
                                    <div className="video-view">
                                        1.8M views &nbsp;<i className="fas fa-calendar-alt"></i> 11 Months ago
                                </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-sm-6 mb-3">
                            <div className="video-card">
                                <div className="video-card-image">
                                    <Link className="play-icon" to="watch"><i className="fas fa-play-circle"></i></Link>
                                   <Link to="watch"> <img className="img-fluid" src={vidImg4} alt="" /></Link>
                                    <div className="time">3:50</div>
                                </div>
                                <div className="video-card-body">
                                    <div className="video-title">
                                        <a href="#">There are many variations of passages of Lorem</a>
                                    </div>
                                    <div className="video-page text-success">
                                        Education  <a title="" data-placement="top" data-toggle="tooltip" href="#" data-original-title="Verified">
                                            <i className="fas fa-check-circle text-success"></i></a>
                                    </div>
                                    <div className="video-view">
                                        1.8M views &nbsp;<i className="fas fa-calendar-alt"></i> 11 Months ago
                                </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-sm-6 mb-3">
                            <div className="video-card">
                                <div className="video-card-image">
                                    <Link className="play-icon" to="watch"><i className="fas fa-play-circle"></i></Link>
                                   <Link to="watch"> <img className="img-fluid" src={vidImg2} alt="" /></Link>
                                    <div className="time">3:50</div>
                                </div>
                                <div className="video-card-body">
                                    <div className="video-title">
                                        <a href="#">There are many variations of passages of Lorem</a>
                                    </div>
                                    <div className="video-page text-success">
                                        Education  <a title="" data-placement="top" data-toggle="tooltip" href="#" data-original-title="Verified">
                                            <i className="fas fa-check-circle text-success"></i></a>
                                    </div>
                                    <div className="video-view">
                                        1.8M views &nbsp;<i className="fas fa-calendar-alt"></i> 11 Months ago
                                </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-sm-6 mb-3">
                            <div className="video-card">
                                <div className="video-card-image">
                                    <Link className="play-icon" to="watch"><i className="fas fa-play-circle"></i></Link>
                                   <Link to="watch"> <img className="img-fluid" src={vidImg3} alt="" /></Link>
                                    <div className="time">3:50</div>
                                </div>
                                <div className="video-card-body">
                                    <div className="video-title">
                                        <a href="#">There are many variations of passages of Lorem</a>
                                    </div>
                                    <div className="video-page text-danger">
                                        Education  <a title="" data-placement="top" data-toggle="tooltip" href="#" data-original-title="Unverified">
                                            <i className="fas fa-frown text-danger"></i></a>
                                    </div>
                                    <div className="video-view">
                                        1.8M views &nbsp;<i className="fas fa-calendar-alt"></i> 11 Months ago
                                </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-sm-6 mb-3">
                            <div className="video-card">
                                <div className="video-card-image">
                                    <Link className="play-icon" to="watch"><i className="fas fa-play-circle"></i></Link>
                                   <Link to="watch"> <img className="img-fluid" src={vidImg} alt="" /></Link>
                                    <div className="time">3:50</div>
                                </div>
                                <div className="video-card-body">
                                    <div className="video-title">
                                        <a href="#">There are many variations of passages of Lorem</a>
                                    </div>
                                    <div className="video-page text-success">
                                        Education  <a title="" data-placement="top" data-toggle="tooltip" href="#" data-original-title="Verified">
                                            <i className="fas fa-check-circle text-success"></i></a>
                                    </div>
                                    <div className="video-view">
                                        1.8M views &nbsp;<i className="fas fa-calendar-alt"></i> 11 Months ago
                                </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-sm-6 mb-3">
                            <div className="video-card">
                                <div className="video-card-image">
                                    <Link className="play-icon" to="watch"><i className="fas fa-play-circle"></i></Link>
                                   <Link to="watch"> <img className="img-fluid" src={vidImg5} alt="" /></Link>
                                    <div className="time">3:50</div>
                                </div>
                                <div className="video-card-body">
                                    <div className="video-title">
                                        <a href="#">There are many variations of passages of Lorem</a>
                                    </div>
                                    <div className="video-page text-success">
                                        Education  <a title="" data-placement="top" data-toggle="tooltip" href="#" data-original-title="Verified">
                                            <i className="fas fa-check-circle text-success"></i></a>
                                    </div>
                                    <div className="video-view">
                                        1.8M views &nbsp;<i className="fas fa-calendar-alt"></i> 11 Months ago
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <hr className="mt-0" />
                <div className="video-block section-padding">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="main-title">
                                <div className="btn-group float-right right-action">
                                    <a href="#" className="right-action-link text-gray" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Sort by <FaCaretDown className="fa fa-caret-down" aria-hidden="true"/>
                                    </a>
                                    <div className="dropdown-menu dropdown-menu-right">
                                        <a className="dropdown-item" href="{{ route('home')}}"><i className="fas fa-fw fa-star"></i> &nbsp; Top Rated</a>
                                        <a className="dropdown-item" href="{{ route('home')}}"><i className="fas fa-fw fa-signal"></i> &nbsp; Viewed</a>
                                        <a className="dropdown-item" href="{{ route('home')}}"><i className="fas fa-fw fa-times-circle"></i> &nbsp; Close</a>
                                    </div>
                                </div>
                                <h6>Popular Channels</h6>
                            </div>
                        </div>
                        <div className="col-xl-3 col-sm-6 mb-3">
                            <div className="channels-card">
                                <div className="channels-card-image">
                                    <Link to="channel"><img className="img-fluid" src={chanProfileImg} alt="" /></Link>
                                    <div className="channels-card-image-btn"><button type="button" className="btn btn-outline-danger btn-sm">Subscribe <strong>1.4M</strong></button></div>
                                </div>
                                <div className="channels-card-body">
                                    <div className="channels-title">
                                        <Link to="channel">Channels Name</Link>
                                    </div>
                                    <div className="channels-view">
                                        382,323 subscribers
                                </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-sm-6 mb-3">
                            <div className="channels-card">
                                <div className="channels-card-image">
                                    <Link to="channel"><img className="img-fluid" src={chanProfileImg2} alt="" /></Link>
                                    <div className="channels-card-image-btn"><button type="button" className="btn btn-outline-danger btn-sm">Subscribe <strong>1.4M</strong></button></div>
                                </div>
                                <div className="channels-card-body">
                                    <div className="channels-title">
                                        <Link to="channel">Channels Name</Link>
                                    </div>
                                    <div className="channels-view">
                                        382,323 subscribers
                                </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-sm-6 mb-3">
                            <div className="channels-card">
                                <div className="channels-card-image">
                                    <Link to="channel"><img className="img-fluid" src={chanProfileImg3} alt="" /></Link>
                                    <div className="channels-card-image-btn"><button type="button" className="btn btn-outline-secondary btn-sm">Subscribed <strong>1.4M</strong></button></div>
                                </div>
                                <div className="channels-card-body">
                                    <div className="channels-title">
                                        <Link to="channel">Channels Name <span title="" data-placement="top" data-toggle="tooltip" data-original-title="Verified"><i className="fas fa-check-circle"></i></span></Link>
                                    </div>
                                    <div className="channels-view">
                                        382,323 subscribers
                                </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-sm-6 mb-3">
                            <div className="channels-card">
                                <div className="channels-card-image">
                                    <Link to="channel"><img className="img-fluid" src={chanProfileImg4} alt="" /></Link>
                                    <div className="channels-card-image-btn"><button type="button" className="btn btn-outline-danger btn-sm">Subscribe <strong>1.4M</strong></button></div>
                                </div>
                                <div className="channels-card-body">
                                    <div className="channels-title">
                                        <Link to="channel">Channels Name</Link>
                                    </div>
                                    <div className="channels-view">
                                        382,323 subscribers
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}

export default Home;
