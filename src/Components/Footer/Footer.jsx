import { Link } from "react-router-dom"
import"./Footer.css"
const Footer = () => {
  return (
    <>

    <div className="container-fluid mt-5">
     <img src="images/Rectangle 23.png" className='w-100 ' alt="" />   

        <div className="row my-5 d-flex align-items-center">
          <div className="col-md-2 text-center">

            <img src="images/افق-2 2.png" alt="" className=' '  />
          </div>
          <div className="col-md-8">
          <p className=' afokFooter '>
            حان الوقت للجلوس والتفكير في نوع المحتوى الذي يجب إنشاؤه ، ووقت التوقف والكتابة ، أو التسجيل والتحرير والنشر ، ووقت التفاعل مع جمهورك للترويج للمحتوى الذي أنشأته. تابعنا للمزيد
            </p>
            <div className="m-auto text-center mt-3">
            <Link to="/" className="mx-3">
        <img src="images/Group (8).png" alt="" />
      </Link>
      <Link to="/" className="mx-3">
        <img src="images/icon whatapp.png" alt="" />
      </Link>
      <Link to="/" className="mx-3">
        <img src="images/Group (7).png" alt="" />
      </Link>
      <Link to="/" className="mx-3">
        <img src="images/facebook.png" alt="" />
      </Link>
            </div>
          </div>
        </div>
     <img src="images/Rectangle 23.png" className='w-100 ' alt="" />   

<div className="d-flex justify-content-between container endFooter mt-3">
    <p>
    © حقوق الطبع والنشر 2021. جميع الحقوق محفوظة
    </p>
    <div>
    <h6 className="d-inline">
        <a href="#contactUs">

    تواصل معنا
        </a>
    </h6>
    <span> | </span>
    <h6 className="d-inline">
        <a href="#whoWeAre">

    عن شركه افق
        </a>
    </h6>

    </div>
</div>
    </div>

    </>
  )
}

export default Footer