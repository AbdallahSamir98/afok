import { Link } from "react-router-dom"
import "./PrepareWork.css"
const PrepareWork = () => {
  return (
    <>
        <div className="container-fluid">
        <div className="text-center ourServicesText mt-5">
<h4 className="">
طريقه سهله للاستعداد لعملك
</h4>
</div>

<img src="images/00 1.png" alt="" className="w-100 my-5" />



<div className=" weAreInformation container  mt-5">
<div className="row workSection"  >
    <div className="col-lg-7 workText my-5">
        <h3>
        لنبدا مشروعا جديدا معا
        </h3>
        <p>
        اقتراب اكثر من اهدافك عن طريق مشروع احترافي بيد من الخبراء
        </p>
        <div className=" workButton  m-auto" > 
          <Link to="/" >
          ابدء مشروعك الان          
           </Link>
           </div>
    </div>

    <div className="col-lg-5 text-center">
        <div className="animation-container">

        <img src="images/work2.png" className="" style={{width:"500px"}} alt="" />
        </div>
    </div>
</div>
</div>
        </div>


    </>
  )
}

export default PrepareWork