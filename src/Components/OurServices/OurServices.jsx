import { Link } from "react-router-dom"
import "./OurServices.css"
const OurServices = () => {
  return (
    <>
    <div id="ourServices">
    <div  className="mb-5 " >
    <div className="container ">
<div className="text-center ourServicesText mt-5">
<h4 className="">
    خدماتنا

</h4>
</div>


    </div>
    <div className="container">
      <div className="row gap-2 flex-md-nowrap cards ">
        {/* card 1 */}
        <div className="col-md-3 card1 bg-white">
            <div className="">
                <div className="cardHead">
                    <div className="row text-center">
                        <div className="col-sm-6 ">
                            <img src="images/ux 1.png" alt="" className=" my-2" />
                        </div>
                        <div className="col-sm-6">
                            <h6>
                            تصميم UI-UX
                            </h6>

                        </div>
                    </div>
                </div>
                <div className="cardBody ">
                    <img src="images/Rectangle 27.png" alt="" />
                    <p>
                    من أهم عوامل الوصول هو الحرص على توافق الأعمال مع جميع اسواق العمل والمتصفحات
                    </p>
                    <img src="images/Rectangle 27.png" alt="" />

                </div>
                <div className="cardFooter text-center">
                    <Link>
                    انظر الي المشاريع
                    </Link>
                </div>
            </div>
        </div>
{/* card2 */}
<div className="col-md-3 card2 bg-white">
            <div className="">
                <div className="cardHead">
                    <div className="row text-center">
                        <div className="col-md-6 ">
                            <img src="images/ux 1 (1).png" alt="" className=" my-2" />
                        </div>
                        <div className="col-md-6">
                            <h6>
                            Web sites                            </h6>

                        </div>
                    </div>
                </div>
                <div className="cardBody ">
                    <img src="images/Rectangle 27.png" alt="" />
                    <p>
                    الإختيار الأمثل للمنصة ولغة البرمجة المستخدمة هو من أهم عوامل نجاح الموقع                    </p>
                    <img src="images/Rectangle 27.png" alt="" />

                </div>
                <div className="cardFooter text-center">
                    <Link>
                    انظر الي المشاريع
                    </Link>
                </div>
            </div>
        </div>

        {/* card 3 */}
        <div className="col-md-3 card3 bg-white">
            <div className="">
                <div className="cardHead">
                    <div className="row text-center">
                        <div className="col-md-6 ">
                            <img src="images/ux 1 (2).png" alt="" className=" my-2" />
                        </div>
                        <div className="col-md-6">
                            <h6>
                            Mobile App
                            </h6>

                        </div>
                    </div>
                </div>
                <div className="cardBody ">
                    <img src="images/Rectangle 27.png" alt="" />
                    <p>
                    من أهم عوامل الوصول هو الحرص على توافق الأعمال مع جميع الاجهزة والمتصفحات                                </p>
                    <img src="images/Rectangle 27.png" alt="" />

                </div>
                <div className="cardFooter text-center">
                    <Link>
                    انظر الي المشاريع
                    </Link>
                </div>
            </div>
        </div>
{/* card4 */}
        <div className="col-md-3 card4 bg-white">
            <div className="">
                <div className="cardHead">
                    <div className="row text-center">
                        <div className="col-md-6 ">
                            <img src="images/ux 1 (3).png" alt="" className=" my-2" />
                        </div>
                        <div className="col-md-6">
                            <h6>
                            Marketing
                            </h6>

                        </div>
                    </div>
                </div>
                <div className="cardBody ">
                    <img src="images/Rectangle 27.png" alt="" />
                    <p>
                    من أهم عوامل الوصول هو الحرص على توافق الأعمال مع جميع اسواق العمل والمتصفحات
                    </p>
                    <img src="images/Rectangle 27.png" alt="" />

                </div>
                <div className="cardFooter text-center">
                    <Link>
                    انظر الي المشاريع
                    </Link>
                </div>
            </div>
        </div>
        </div>
      </div>
    </div>
    </div>
 
   
      
    </>
  )
}

export default OurServices