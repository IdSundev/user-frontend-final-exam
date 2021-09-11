import React, { Component } from 'react'
import Footer from '../components/Footer'
import HeaderBottom from '../components/HeaderBottom'
import HeaderTop from '../components/HeaderTop'


export default class Homepage extends Component {
    render() {
        return (
            <div>
                <HeaderTop />
                <HeaderBottom />
                <div className="index-banner">
                    <div className="wmuSlider example1" style={{ height: '560px' }}>
                        <div className="wmuSliderWrapper">
                            <article style={{ position: 'relative', width: '100%', opacity: 1 }}>
                                <div className="banner-wrap">
                                    <div className="slider-left">
                                        <img src="images/banner1.jpg" alt="" />
                                    </div>
                                    <div className="slider-right">
                                        <h1>Classic</h1>
                                        <h2>White</h2>
                                        <p>Lorem ipsum dolor sit amet</p>
                                        <div className="btn"><a href="shop.html">Shop Now</a></div>
                                    </div>
                                    <div className="clear" />
                                </div>
                            </article>
                            <article style={{ position: 'absolute', width: '100%', opacity: 0 }}>
                                <div className="banner-wrap">
                                    <div className="slider-left">
                                        <img src="images/banner2.jpg" alt="" />
                                    </div>
                                    <div className="slider-right">
                                        <h1>Classic</h1>
                                        <h2>White</h2>
                                        <p>Lorem ipsum dolor sit amet</p>
                                        <div className="btn"><a href="shop.html">Shop Now</a></div>
                                    </div>
                                    <div className="clear" />
                                </div>
                            </article>
                            <article style={{ position: 'absolute', width: '100%', opacity: 0 }}>
                                <div className="banner-wrap">
                                    <div className="slider-left">
                                        <img src="images/banner1.jpg" alt="" />
                                    </div>
                                    <div className="slider-right">
                                        <h1>Classic</h1>
                                        <h2>White</h2>
                                        <p>Lorem ipsum dolor sit amet</p>
                                        <div className="btn"><a href="shop.html">Shop Now</a></div>
                                    </div>
                                    <div className="clear" />
                                </div>
                            </article>
                            <article style={{ position: 'absolute', width: '100%', opacity: 0 }}>
                                <div className="banner-wrap">
                                    <div className="slider-left">
                                        <img src="images/banner2.jpg" alt="" />
                                    </div>
                                    <div className="slider-right">
                                        <h1>Classic</h1>
                                        <h2>White</h2>
                                        <p>Lorem ipsum dolor sit amet</p>
                                        <div className="btn"><a href="shop.html">Shop Now</a></div>
                                    </div>
                                    <div className="clear" />
                                </div>
                            </article>
                            <article style={{ position: 'absolute', width: '100%', opacity: 0 }}>
                                <div className="banner-wrap">
                                    <div className="slider-left">
                                        <img src="images/banner1.jpg" alt="" />
                                    </div>
                                    <div className="slider-right">
                                        <h1>Classic</h1>
                                        <h2>White</h2>
                                        <p>Lorem ipsum dolor sit amet</p>
                                        <div className="btn"><a href="shop.html">Shop Now</a></div>
                                    </div>
                                    <div className="clear" />
                                </div>
                            </article>
                        </div>
                        <a className="wmuSliderPrev">Previous</a><a className="wmuSliderNext">Next</a>
                        <ul className="wmuSliderPagination">
                            <li><a href="#" className>0</a></li>
                            <li><a href="#" className>1</a></li>
                            <li><a href="#" className="wmuActive">2</a></li>
                            <li><a href="#">3</a></li>
                            <li><a href="#">4</a></li>
                        </ul>
                        <a className="wmuSliderPrev">Previous</a><a className="wmuSliderNext">Next</a><ul className="wmuSliderPagination"><li><a href="#" className="wmuActive">0</a></li><li><a href="#" className>1</a></li><li><a href="#" className>2</a></li><li><a href="#" className>3</a></li><li><a href="#" className>4</a></li></ul></div>
                </div>
                <div className="main">
                    <div className="wrap">
                        <div className="content-top">
                            <div className="lsidebar span_1_of_c1">
                                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing</p>
                            </div>
                            <div className="cont span_2_of_c1">
                                <div className="social">
                                    <ul>
                                        <li className="facebook"><a href="#"><span> </span></a><div className="radius"> <img src="images/radius.png" /><a href="#"> </a></div><div className="border hide"><p className="num">1.51K</p></div></li>
                                    </ul>
                                </div>
                                <div className="social">
                                    <ul>
                                        <li className="twitter"><a href="#"><span> </span></a><div className="radius"> <img src="images/radius.png" /></div><div className="border hide"><p className="num">1.51K</p></div></li>
                                    </ul>
                                </div>
                                <div className="social">
                                    <ul>
                                        <li className="google"><a href="#"><span> </span></a><div className="radius"> <img src="images/radius.png" /></div><div className="border hide"><p className="num">1.51K</p></div></li>
                                    </ul>
                                </div>
                                <div className="social">
                                    <ul>
                                        <li className="dot"><a href="#"><span> </span></a><div className="radius"> <img src="images/radius.png" /></div><div className="border hide"><p className="num">1.51K</p></div></li>
                                    </ul>
                                </div>
                                <div className="clear"> </div>
                            </div>
                            <div className="clear" />
                        </div>
                        <div className="content-bottom">
                            <div className="box1">
                                <div className="col_1_of_3 span_1_of_3"><a href="single.html">
                                    <div className="view view-fifth">
                                        <div className="top_box">
                                            <h3 className="m_1">Lorem ipsum dolor sit amet</h3>
                                            <p className="m_2">Lorem ipsum</p>
                                            <div className="grid_img">
                                                <div className="css3"><img src="images/pic.jpg" alt="" /></div>
                                                <div className="mask">
                                                    <div className="info">Quick View</div>
                                                </div>
                                            </div>
                                            <div className="price">£480</div>
                                        </div>
                                    </div>
                                    <span className="rating">
                                        <input type="radio" className="rating-input" id="rating-input-1-5" name="rating-input-1" />
                                        <label htmlFor="rating-input-1-5" className="rating-star1" />
                                        <input type="radio" className="rating-input" id="rating-input-1-4" name="rating-input-1" />
                                        <label htmlFor="rating-input-1-4" className="rating-star1" />
                                        <input type="radio" className="rating-input" id="rating-input-1-3" name="rating-input-1" />
                                        <label htmlFor="rating-input-1-3" className="rating-star1" />
                                        <input type="radio" className="rating-input" id="rating-input-1-2" name="rating-input-1" />
                                        <label htmlFor="rating-input-1-2" className="rating-star" />
                                        <input type="radio" className="rating-input" id="rating-input-1-1" name="rating-input-1" />
                                        <label htmlFor="rating-input-1-1" className="rating-star" />&nbsp;
                                        (45)
                                    </span>
                                </a><ul className="list"><a href="single.html">
                                </a><li><a href="single.html">
                                    <img src="images/plus.png" alt="" />
                                </a><ul className="icon1 sub-icon1 profile_img"><a href="single.html">
                                </a><li><a href="single.html" /><a className="active-icon c1" href="#">Add To Bag </a>
                                                    <ul className="sub-icon1 list">
                                                        <li><h3>sed diam nonummy</h3><a href /></li>
                                                        <li><p>Lorem ipsum dolor sit amet, consectetuer  <a href>adipiscing elit, sed diam</a></p></li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                    <div className="clear" />
                                </div>
                                <div className="col_1_of_3 span_1_of_3"><a href="single.html">
                                    <div className="view view-fifth">
                                        <div className="top_box">
                                            <h3 className="m_1">Lorem ipsum dolor sit amet</h3>
                                            <p className="m_2">Lorem ipsum</p>
                                            <div className="grid_img">
                                                <div className="css3"><img src="images/pic1.jpg" alt="" /></div>
                                                <div className="mask">
                                                    <div className="info">Quick View</div>
                                                </div>
                                            </div>
                                            <div className="price">£480</div>
                                        </div>
                                    </div>
                                    <span className="rating">
                                        <input type="radio" className="rating-input" id="rating-input-1-5" name="rating-input-1" />
                                        <label htmlFor="rating-input-1-5" className="rating-star1" />
                                        <input type="radio" className="rating-input" id="rating-input-1-4" name="rating-input-1" />
                                        <label htmlFor="rating-input-1-4" className="rating-star1" />
                                        <input type="radio" className="rating-input" id="rating-input-1-3" name="rating-input-1" />
                                        <label htmlFor="rating-input-1-3" className="rating-star1" />
                                        <input type="radio" className="rating-input" id="rating-input-1-2" name="rating-input-1" />
                                        <label htmlFor="rating-input-1-2" className="rating-star" />
                                        <input type="radio" className="rating-input" id="rating-input-1-1" name="rating-input-1" />
                                        <label htmlFor="rating-input-1-1" className="rating-star" />&nbsp;
                                        (45)
                                    </span>
                                </a><ul className="list"><a href="single.html">
                                </a><li><a href="single.html">
                                    <img src="images/plus.png" alt="" />
                                </a><ul className="icon1 sub-icon1 profile_img"><a href="single.html">
                                </a><li><a href="single.html" /><a className="active-icon c1" href="#">Add To Bag </a>
                                                    <ul className="sub-icon1 list">
                                                        <li><h3>sed diam nonummy</h3><a href /></li>
                                                        <li><p>Lorem ipsum dolor sit amet, consectetuer  <a href>adipiscing elit, sed diam</a></p></li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                    <div className="clear" />
                                </div>
                                <div className="col_1_of_3 span_1_of_3"><a href="single.html">
                                    <div className="view view-fifth">
                                        <div className="top_box">
                                            <h3 className="m_1">Lorem ipsum dolor sit amet</h3>
                                            <p className="m_2">Lorem ipsum</p>
                                            <div className="grid_img">
                                                <div className="css3"><img src="images/pic2.jpg" alt="" /></div>
                                                <div className="mask">
                                                    <div className="info">Quick View</div>
                                                </div>
                                            </div>
                                            <div className="price">£480</div>
                                        </div>
                                    </div>
                                    <span className="rating">
                                        <input type="radio" className="rating-input" id="rating-input-1-5" name="rating-input-1" />
                                        <label htmlFor="rating-input-1-5" className="rating-star1" />
                                        <input type="radio" className="rating-input" id="rating-input-1-4" name="rating-input-1" />
                                        <label htmlFor="rating-input-1-4" className="rating-star1" />
                                        <input type="radio" className="rating-input" id="rating-input-1-3" name="rating-input-1" />
                                        <label htmlFor="rating-input-1-3" className="rating-star1" />
                                        <input type="radio" className="rating-input" id="rating-input-1-2" name="rating-input-1" />
                                        <label htmlFor="rating-input-1-2" className="rating-star" />
                                        <input type="radio" className="rating-input" id="rating-input-1-1" name="rating-input-1" />
                                        <label htmlFor="rating-input-1-1" className="rating-star" />&nbsp;
                                        (45)
                                    </span>
                                </a><ul className="list"><a href="single.html">
                                </a><li><a href="single.html">
                                    <img src="images/plus.png" alt="" />
                                </a><ul className="icon1 sub-icon1 profile_img"><a href="single.html">
                                </a><li><a href="single.html" /><a className="active-icon c1" href="#">Add To Bag </a>
                                                    <ul className="sub-icon1 list">
                                                        <li><h3>sed diam nonummy</h3><a href /></li>
                                                        <li><p>Lorem ipsum dolor sit amet, consectetuer  <a href>adipiscing elit, sed diam</a></p></li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                    <div className="clear" />
                                </div>
                                <div className="clear" />
                            </div>
                            <div className="box1">
                                <div className="col_1_of_3 span_1_of_3"><a href="single.html">
                                    <div className="view view-fifth">
                                        <div className="top_box">
                                            <h3 className="m_1">Lorem ipsum dolor sit amet</h3>
                                            <p className="m_2">Lorem ipsum</p>
                                            <div className="grid_img">
                                                <div className="css3"><img src="images/pic3.jpg" alt="" /></div>
                                                <div className="mask">
                                                    <div className="info">Quick View</div>
                                                </div>
                                            </div>
                                            <div className="price">£480</div>
                                        </div>
                                    </div>
                                    <span className="rating">
                                        <input type="radio" className="rating-input" id="rating-input-1-5" name="rating-input-1" />
                                        <label htmlFor="rating-input-1-5" className="rating-star1" />
                                        <input type="radio" className="rating-input" id="rating-input-1-4" name="rating-input-1" />
                                        <label htmlFor="rating-input-1-4" className="rating-star1" />
                                        <input type="radio" className="rating-input" id="rating-input-1-3" name="rating-input-1" />
                                        <label htmlFor="rating-input-1-3" className="rating-star1" />
                                        <input type="radio" className="rating-input" id="rating-input-1-2" name="rating-input-1" />
                                        <label htmlFor="rating-input-1-2" className="rating-star" />
                                        <input type="radio" className="rating-input" id="rating-input-1-1" name="rating-input-1" />
                                        <label htmlFor="rating-input-1-1" className="rating-star" />&nbsp;
                                        (45)
                                    </span>
                                </a><ul className="list"><a href="single.html">
                                </a><li><a href="single.html">
                                    <img src="images/plus.png" alt="" />
                                </a><ul className="icon1 sub-icon1 profile_img"><a href="single.html">
                                </a><li><a href="single.html" /><a className="active-icon c1" href="#">Add To Bag </a>
                                                    <ul className="sub-icon1 list">
                                                        <li><h3>sed diam nonummy</h3><a href /></li>
                                                        <li><p>Lorem ipsum dolor sit amet, consectetuer  <a href>adipiscing elit, sed diam</a></p></li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                    <div className="clear" />
                                </div>
                                <div className="col_1_of_3 span_1_of_3"><a href="single.html">
                                    <div className="view view-fifth">
                                        <div className="top_box">
                                            <h3 className="m_1">Lorem ipsum dolor sit amet</h3>
                                            <p className="m_2">Lorem ipsum</p>
                                            <div className="grid_img">
                                                <div className="css3"><img src="images/pic4.jpg" alt="" /></div>
                                                <div className="mask">
                                                    <div className="info">Quick View</div>
                                                </div>
                                            </div>
                                            <div className="price">£480</div>
                                        </div>
                                    </div>
                                    <span className="rating">
                                        <input type="radio" className="rating-input" id="rating-input-1-5" name="rating-input-1" />
                                        <label htmlFor="rating-input-1-5" className="rating-star1" />
                                        <input type="radio" className="rating-input" id="rating-input-1-4" name="rating-input-1" />
                                        <label htmlFor="rating-input-1-4" className="rating-star1" />
                                        <input type="radio" className="rating-input" id="rating-input-1-3" name="rating-input-1" />
                                        <label htmlFor="rating-input-1-3" className="rating-star1" />
                                        <input type="radio" className="rating-input" id="rating-input-1-2" name="rating-input-1" />
                                        <label htmlFor="rating-input-1-2" className="rating-star" />
                                        <input type="radio" className="rating-input" id="rating-input-1-1" name="rating-input-1" />
                                        <label htmlFor="rating-input-1-1" className="rating-star" />&nbsp;
                                        (45)
                                    </span>
                                </a><ul className="list"><a href="single.html">
                                </a><li><a href="single.html">
                                    <img src="images/plus.png" alt="" />
                                </a><ul className="icon1 sub-icon1 profile_img"><a href="single.html">
                                </a><li><a href="single.html" /><a className="active-icon c1" href="#">Add To Bag </a>
                                                    <ul className="sub-icon1 list">
                                                        <li><h3>sed diam nonummy</h3><a href /></li>
                                                        <li><p>Lorem ipsum dolor sit amet, consectetuer  <a href>adipiscing elit, sed diam</a></p></li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                    <div className="clear" />
                                </div>
                                <div className="col_1_of_3 span_1_of_3"><a href="single.html">
                                    <div className="view view-fifth">
                                        <div className="top_box">
                                            <h3 className="m_1">Lorem ipsum dolor sit amet</h3>
                                            <p className="m_2">Lorem ipsum</p>
                                            <div className="grid_img">
                                                <div className="css3"><img src="images/pic5.jpg" alt="" /></div>
                                                <div className="mask">
                                                    <div className="info">Quick View</div>
                                                </div>
                                            </div>
                                            <div className="price">£480</div>
                                        </div>
                                    </div>
                                    <span className="rating">
                                        <input type="radio" className="rating-input" id="rating-input-1-5" name="rating-input-1" />
                                        <label htmlFor="rating-input-1-5" className="rating-star1" />
                                        <input type="radio" className="rating-input" id="rating-input-1-4" name="rating-input-1" />
                                        <label htmlFor="rating-input-1-4" className="rating-star1" />
                                        <input type="radio" className="rating-input" id="rating-input-1-3" name="rating-input-1" />
                                        <label htmlFor="rating-input-1-3" className="rating-star1" />
                                        <input type="radio" className="rating-input" id="rating-input-1-2" name="rating-input-1" />
                                        <label htmlFor="rating-input-1-2" className="rating-star" />
                                        <input type="radio" className="rating-input" id="rating-input-1-1" name="rating-input-1" />
                                        <label htmlFor="rating-input-1-1" className="rating-star" />&nbsp;
                                        (45)
                                    </span>
                                </a><ul className="list"><a href="single.html">
                                </a><li><a href="single.html">
                                    <img src="images/plus.png" alt="" />
                                </a><ul className="icon1 sub-icon1 profile_img"><a href="single.html">
                                </a><li><a href="single.html" /><a className="active-icon c1" href="#">Add To Bag </a>
                                                    <ul className="sub-icon1 list">
                                                        <li><h3>sed diam nonummy</h3><a href /></li>
                                                        <li><p>Lorem ipsum dolor sit amet, consectetuer  <a href>adipiscing elit, sed diam</a></p></li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                    <div className="clear" />
                                </div>
                                <div className="clear" />
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
                <a href="#" id="toTop" style={{ display: 'block' }}><span id="toTopHover" style={{ opacity: 1 }} /></a>
            </div>

        )
    }
}
