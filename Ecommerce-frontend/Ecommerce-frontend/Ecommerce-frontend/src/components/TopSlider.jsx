import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function TopSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    cssEase: "linear",
  };

  return (
    <>
      <Slider {...settings}>
        <div className="wdt ">
          <img className="img" alt="pic1" src={"assets/Header1.1.jpg"} />
        </div>
        <div className="wdt">
          <img className="img" alt="pic1" src={"assets/Header1.2.jpg"} />
        </div>
        <div className="wdt">
          <img className="img" alt="pic1" src={"assets/Header1.3.png"} />
        </div>
        <div className="wdt">
          <img className="img" alt="pic1" src={"assets/Header1.4.jpg"} />
        </div>
      </Slider>
    </>
  );
}

export default TopSlider;
