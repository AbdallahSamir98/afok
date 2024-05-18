import ContactUs from '../ContactUs/ContactUs'
import LastWorks from '../LastWorks/LastWorks'
import OurServices from '../OurServices/OurServices'
import PrepareWork from '../PrepareWork/PrepareWork'
import Testimonials from '../Testimonials/Testimonials'
import WeAreInformation from '../WhoWeAre/WeAreInformation'
import WhoWeAre from '../WhoWeAre/WhoWeAre'
import Home from './Home'

const HomeDisplay = () => {
  return (
    <>
        
<Home/>
<div className="bg-white">
<WhoWeAre/>
<WeAreInformation/>
<OurServices/>
<LastWorks/>
<PrepareWork/>
<Testimonials/>
<ContactUs/>


</div>
    </>
  )
}

export default HomeDisplay