import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import javascript from '../image/javascript.png';
import react from '../image/30_days1.jpg';
import portfolyo from '../image/portfolyo.png';
import coming from '../image/30_days1.jpg';

function Gallery() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 2000,
    cssEase: "linear"
  };
  return (
    <div>
    <h3 className="mt-5 text-center fs-1">My Works</h3><hr/>
    <br/>
    <div className="slider-container">
      <Slider {...settings}>
         <div className="card m-5"  style="width: 18rem;">
      <img src={javascript} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">30 Days Of JavaScript</h5>
        <p className="card-text">Kodlama hayatına adım attigim ilk proje olan 30 Days Of JavaScript projesinin exersiz sonuçları. Iceriginde bir sürü görev ve 7 tane proje vardır.</p>
        <a href="https://github.com/nvzt13/JavaScript-Exercise" className="btn btn-primary">Go somewhere</a>
      </div>
    </div>
            <div className="card m-5" style="width: 18rem;">
      <img src={react} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">React öğrenmek ve geliştirmek için 30 Days Of React projesinin yaptığım exersiz sonuçları.</p>
        <a href="#" className="btn btn-primary">Go somewhere</a>
      </div>
    </div>
            <div className="card m-5" style="width: 18rem;">
      <img src={portfolyo} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">30 Days Of React</h5>
        <p className="card-text">React öğrenmek ve geliştirmek için 30 Days Of React projesinin yaptığım exersiz sonuçları.</p>
        <a href="#" className="btn btn-primary">Go somewhere</a>
      </div>
    </div>
            <div className="card m-5" style="width: 18rem;">
      <img src="..." className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" className="btn btn-primary">Go somewhere</a>
      </div>
    </div>
      </Slider>
    </div>
  </div>
  );
}

export default Gallery;
