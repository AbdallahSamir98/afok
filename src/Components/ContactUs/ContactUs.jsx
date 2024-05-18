import { Link } from "react-router-dom";
import "./ContactUs.css";
const ContactUs = () => {
  const data = [
    {
      src: "images/Vector (11).png",
      location: "مقر الشركة ",
      fullLocation: "الرياض - ابها - طريق العروبة",
    },
    {
      src: "images/Vector (12).png",
      location: " رقم الجوال ",
      fullLocation: "+955-555-987",
    },
    {
      src: "images/Vector (13).png",
      location: " البريد الإلكتروني ",
      fullLocation: " info@afok.com.sa ",
    },
  ];

  return (
    <>
      <div id="contactUs" className="container pt-5">
        <div className="row pt-5">
          <div className="col-lg-6 ">
            <div className=" lastWorks">
              <h4>تواصل معنا</h4>
            </div>
            {data.map((data, idx) => (
              <div key={idx}>
                <ul className="">
                  <li className="my-5">
                    <div className="contactDetails d-flex align-items-center ">
                      <img src={data.src} alt="" />
                      <h6>{data.location}</h6>
                    </div>
                    <p className="contactAllDetails">{data.fullLocation}</p>
                  </li>
                </ul>
              </div>
            ))}
          </div>

          <div className="col-lg-6 ">
            <div className="testimonialsCard p-5">
              <div className="contactCard position-relative">
                <div className="contactCardPostion"></div>
                <h5>يسعدنا في افق أن نبني جسر تواصل دائم مع عملائنا</h5>
                <div className="position-relative formData  text-center">
                  <label htmlFor="mobile" className="mobileLabel">
                    {" "}
                    الجوال
                  </label>
                  <input id="mobile" type="text" className="" />
                </div>
                <div className="position-relative formData  text-center">
                  <label htmlFor="message" className="textAreaLabel">
                    {" "}
                    رسالتك
                  </label>
                  <textarea
                    id="message"
                    type="text"
                    className=""
                    style={{ height: "200px" }}
                  />
                </div>
                <div className=" navButton m-auto mt-5">
                  <Link>ارسال </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
