import React, {useState} from 'react';
import {Link} from 'react-router-dom';

import { FaSearch, FaEllipsisH, FaCaretDown, FaChevronRight, FaChevronLeft } from "react-icons/fa";

//image import

import chanProfileImg from '../../components/front/img/s1.png';
import chanProfileImg2 from '../../components/front/img/s2.png';
import chanProfileImg3 from '../../components/front/img/s3.png';
import chanProfileImg4 from '../../components/front/img/s4.png';
import chanProfileImg5 from '../../components/front/img/s5.png';
function ChannelSlider()  {
    let singleChannel = [
        <div className="category-item">
            <Link to="channel">
                <img className="img-fluid" src={chanProfileImg} alt="" />
                <h6>Your Life</h6>
                <p>74,853 views</p>
            </Link>
        </div>,

        <div className="category-item">
            <Link to="channel">
                <img className="img-fluid" src={chanProfileImg5} alt="" />
                <h6>Unboxing Cool</h6>
                <p>74,853 views</p>
            </Link>
        </div>,

        <div className="category-item">
            <Link to="channel">
                <img className="img-fluid" src={chanProfileImg} alt="" />
                <h6>Service Reviewing</h6>
                <p>74,853 views</p>
            </Link>
        </div>,

        <div className="category-item">
            <Link to="channel">
                <img className="img-fluid" src={chanProfileImg4} alt="" />
                <h6>Gaming <span title="" data-placement="top" data-toggle="tooltip" data-original-title="Verified">
                    <i className="fas fa-check-circle text-success"></i></span></h6>
                <p>74,853 views</p>
            </Link>
        </div>,

        <div className="category-item">
            <Link to="channel">
                <img className="img-fluid" src={chanProfileImg2} alt="" />
                <h6>Technology Tutorials</h6>
                <p>74,853 views</p>
            </Link>
        </div>,

        <div className="category-item">
            <Link to="channel">
                <img className="img-fluid" src={chanProfileImg3} alt="" />
                <h6>Singing</h6>
                <p>74,853 views</p>
            </Link>
        </div>,

        <div className="category-item">
            <Link to="channel">
                <img className="img-fluid" src={chanProfileImg5} alt="" />
                <h6>Cooking</h6>
                <p>74,853 views</p>
            </Link>
        </div>,

        <div className="category-item">
            <Link to="channel">
                <img className="img-fluid" src={chanProfileImg} alt="" />
                <h6>Traveling</h6>
                <p>74,853 views</p>
            </Link>
        </div>,

        <div className="category-item">
            <Link to="channel">
                <img className="img-fluid" src={chanProfileImg} alt="" />
                <h6>Education</h6>
                <p>74,853 views</p>
            </Link>
        </div>,

        <div className="category-item">
            <Link to="channel">
                <img className="img-fluid" src={chanProfileImg2} alt="" />
                <h6>Noodles, Sauces & Instant Food</h6>
                <p>74,853 views</p>
            </Link>
        </div>,

        <div className="category-item">
            <Link to="channel">
                <img className="img-fluid" src={chanProfileImg3} alt="" />
                <h6>Comedy <span title="" data-placement="top" data-toggle="tooltip" data-original-title="Verified">
                    <i className="fas fa-check-circle text-success"></i></span></h6>
                <p>74,853 views</p>
            </Link>
        </div>,

        <div className="category-item">
            <Link to="channel">
                <img className="img-fluid" src={chanProfileImg5} alt="" />
                <h6>Lifestyle Advice</h6>
                <p>74,853 views</p>
            </Link>
        </div>
    ];
    const [x, setX] = useState(0);
    const goLeft = () => {
        x === 0 ? setX( -100 * (5 - 1)) : setX(x + 100);
        console.log(x);
    }
    const goRight = () => {
        x === -100 * (5 - 1) ? setX(0) : setX(x - 100);
        console.log(x);
    }
    return ( 
        <div className="top-category section-padding mb-4">
            <div className="row">
                <div className="col-md-12">
                    <div className="main-title">
                        <div className="btn-group float-right right-action">
                            <a href="#" className="right-action-link text-gray" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <FaEllipsisH className="fa fa-ellipsis-h" aria-hidden="true" />
                            </a>
                            <div className="dropdown-menu dropdown-menu-right">
                                <a className="dropdown-item" href="#"><i className="fas fa-fw fa-star"></i> &nbsp; Top Rated</a>
                                <a className="dropdown-item" href="#"><i className="fas fa-fw fa-signal"></i> &nbsp; Viewed</a>
                                <a className="dropdown-item" href="#"><i className="fas fa-fw fa-times-circle"></i> &nbsp; Close</a>
                            </div>
                        </div>
                        <h6>Channels Categories</h6>
                    </div>
                </div>
                <div className="col-md-12" style={{ background: '#000', overflow: 'hidden', width: '99%'}}>
                    <div className="owl-carousel owl-carousel-category d-flex" style={{ overflow: 'hidden', position: 'relative', width: '100%', transition: '.5s' }}>
                        {
                           singleChannel.map((channel, index) =>{
                               return(
                                <div key={index} className="item" style={{transform: `translateX(${x}%)`}}>
                                    {channel}
                                </div>
                                
                               );
                           })
                           
                        }
                       
                    </div>
                    <div className="owl-controls clickable">
                        <div className="owl-buttons">
                            <div id="owl-prev" onClick={goLeft}>
                                <FaChevronLeft className="fa fa-chevron-left" />
                            </div>
                            <div id="owl-next" onClick={goRight}>
                                <FaChevronRight className="fa fa-chevron-right" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

 
export default ChannelSlider;