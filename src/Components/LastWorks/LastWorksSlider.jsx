import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./LastWorks.css"; 
import { Link } from "react-router-dom";
import { useMediaQuery } from "@mui/material";


function LastWorkSlider() {
    const isSmallScreen = useMediaQuery('(max-width:760px)');
    const isMediumScreen = useMediaQuery('(min-width:761px) and (max-width:980px)');
    const isLargeScreen = useMediaQuery('(min-width:981px) and (max-width:1200px)');
    const isExtraLargeScreen = useMediaQuery('(min-width:1201px)');
    let slidesToShow = 4;
  
    if (isSmallScreen) {
      slidesToShow = 2;
    } else if (isMediumScreen) {
      slidesToShow = 3;
    } else if (isLargeScreen) {
      slidesToShow = 4;
    } else if (isExtraLargeScreen) {
      slidesToShow = 4;
    }
  const settings = {
    infinite: true,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear"
  };
  const data = [

    { imageUrl: 'images/mobile 1.png', name: 'Soical media' },
    { imageUrl: 'images/mobile 1 (1).png', name: 'Marketing' },
    { imageUrl: 'images/mobile 1 (2).png', name: 'Graphic' },
    { imageUrl: 'images/mobile 1 (3).png', name: 'ux/ui Design' },
    { imageUrl: 'images/mobile 1 (2).png', name: 'Graphic' },
    { imageUrl: 'images/mobile 1 (1).png', name: 'Marketing' },


  ];
  return (
    <div className="container mt-5">
      <Slider className=" " {...settings}>
        
        {data.map((item, index) => (

          <div key={index} className="sliderCard position-relative " >
            <div className="tika"></div>
            <div className=" d-flex justify-content-center p-5 " >

            <img src={item.imageUrl} alt={item.name} className="w-75 " />
            </div>
            <div className="footerSlider">
              <h4>{item.name}</h4>
            </div>
          </div>
        ))}
      </Slider>
      <p className="text-start mt-5 mx-5">
        <Link to="/" className="moreSlider">
        المزيد...
        </Link>
      </p>
    </div>
  );
}

export default LastWorkSlider;
