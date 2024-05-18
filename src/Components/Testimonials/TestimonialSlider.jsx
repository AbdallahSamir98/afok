import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Testimonials.css"; // Import your CSS file for styling

const TestimonialSlider = () => {
  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    dots: true,
    speed: 2000,
    autoplaySpeed: 1500,
    cssEase: "linear"
  };

  const data = [
    { 
      text: 'خبره واسعة في مجال البرمجيات والتسويق الالكتروني\nأسعار تنافسه حيث أن لدينا عملاء وثقوا بنا\nلدينا متخصصين يتمتعون بمستوي عالي من الخبرة والمهارة الفنية لدينا جميع الافكار الحديثه',
      name: 'ماهر بن عفيف'
    },
    { 
      text: 'خبره واسعة في مجال البرمجيات والتسويق الالكتروني\nأسعار تنافسه حيث أن لدينا عملاء وثقوا بنا\nلدينا متخصصين يتمتعون بمستوي عالي من الخبرة والمهارة الفنية لدينا جميع الافكار الحديثه',
      name: 'عبدالله سمير'
    },
    { 
      text: 'خبره واسعة في مجال البرمجيات والتسويق الالكتروني\nأسعار تنافسه حيث أن لدينا عملاء وثقوا بنا\nلدينا متخصصين يتمتعون بمستوي عالي من الخبرة والمهارة الفنية لدينا جميع الافكار الحديثه',
      name: 'فهد العتيبي'
    },
  ];

  return (
    <div className="container mt-5">
      <div className="testimonialsTexts position-relative">
       
        <div className="testemonialAfter"></div>
       <div className="testimonialsCard mb-5">
       <div className="d-flex justify-content-start">
                <img src="images/010 1.png" className="" style={{ height: "100px" }} alt="" />
              </div>
       <Slider {...settings}>
          {data.map((item, index) => (
            <div key={index} className="">
            
              <div>
                
              </div>
              <div className="w-75 m-auto">
                <p>{item.text.split('\n').map((line, i) => <span key={i}>{line}<br /></span>)}</p>
              </div>
              <div className="d-flex justify-content-between align-items-center flex-row-reverse">
                <div></div>
                <p className="testimonialsPerson">{item.name}</p>

                
                <div className="">
                  <img src="images/011 (1) 1.png" className="" style={{ height: "100px" }} alt="" />
                </div>
              </div>
            </div>
          ))}
        </Slider>
       </div>
   
      </div>
    </div>
  );
}

export default TestimonialSlider;
