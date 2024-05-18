import TestimonialSlider from "./TestimonialSlider"
import "./Testimonials.css"
const Testimonials = () => {
  return (
    <>
    <img src="images/Rectangle 47.png" alt="" className="w-100 pt-5 mt-5" />

     <div className="container">
     <div className="text-center ourServicesText mt-5">
<h4 className="">
ماذا يقول العميل عنا ؟</h4>

<div className=" lastWorks">
      
        <p>
        رضا العملاء هو أولويتنا الأساسية. تحقق من ما يقوله عملاؤنا عن تجربتهم مع Infosysta.        </p>
    </div>
</div>
        

        <div className="row ">

            <div className="col-lg-6 ">
{/* <div className="testimonialsTexts position-relative">
    <div className="testemonialAfter"></div>
    <div className="testimonialsCard">
        <div className="">

        <img src="images/010 1.png" className="" style={{height:"100px"}} alt="" />
        </div>
        <div className="w-75 m-auto "> 
        <p >
        خبره واسعة في مجال البرمجيات والتسويق الالكتروني
أسعار تنافسه حيث أن لدينا عملاء وثقوا بنا
لدينا متخصصين يتمتعون بمستوي عالي من الخبرة والمهارة الفنية لدينا جميع الافكار الحديثه
        </p>
        </div>
        <div className="   text-start d-flex justify-content-between align-items-center">
        <div></div>
        <p className="testimonialsPerson ">
        ماهر بن  عفيف
        </p>
        <img src="images/011 (1) 1.png" className="" style={{height:"100px"}} alt="" />
        </div>
      
    </div>



</div> */}
<TestimonialSlider/>
            </div>

            <div className="col-lg-6 text-center">
                <div>
                    <img src="images/Rectangle 46.png" alt="" className="w-75" />
                </div>
            </div>
        </div>
        
        </div>   


        <img src="images/Rectangle 47.png" alt="" className="w-100 pt-5 mt-5" />

    </>
  )
}

export default Testimonials