import {  Tab, Tabs } from 'react-bootstrap';
import TabsComponent from './TabsComponent';

const WeAreTabs = () => {
    
  return (
    <>

    <div className="mt-5 ">
    <img src="images/Rectangle 13.png" alt="" className="border-image" style={{width:"100%"}} />
      <Tabs defaultActiveKey="tab1" id="myTabs" className="mb-3 custom-tabs  d-flex justify-content-center   ">
    
        <Tab eventKey="tab1" title="لماذا افق؟">
           <TabsComponent/>
           
        </Tab>
        <Tab eventKey="tab2" title="رؤيتنا" >
            <div className="container">

            <TabsComponent/>
            </div>
        </Tab>
        <Tab eventKey="tab3" title="اهدافنا">
        <TabsComponent/>
        </Tab>
      </Tabs>
    </div>
    
    </>
  
  )
}

export default WeAreTabs