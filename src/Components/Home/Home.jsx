import "./Home.css"
const Home = () => {
  return (
    <>
    <div id="home" className="home pt-5">
        <div className="container mt-2 pt-1">
            <div className="row ">
                <div className="col-md-6">
                    <div>
                        <h1>
                        افق النهضه للتقنيه والمعلومات
                        </h1>
                        <h5>
                        شعارنا؛ واقعنا تطبيق حلمك
                        </h5>
                        <div className="homeSquare  bg-white ">
                            <img src="images/Vector (8).png" alt="" />
                            <h6>
                            فريق عمل <br /> ومبرمجين محترفين 

                            </h6>
                        </div>
                        <div className="homeSquare  bg-white " style={{marginRight:"150px"}}>
                            <img src="images/Vector (9).png" alt="" />
                            <h6>
                             لا حدود لأفكارك <br /> ولا حدود لبرمجتنا


                            </h6>
                        </div>
                        <div className="homeSquare  bg-white " style={{marginRight:"300px"}}>
                            <img src="images/Vector (10).png" alt="" />
                            <h6>
                            جودة وإتقان <br /> وسرعة بالتنفيذ


                            </h6>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 ">
                    <div className=" text-start">
                        <img src="images/Dashboard.png" alt="" className="w-75" />
                    </div>
                </div>
            </div>
        </div>
    </div>
{/* whats app icon */}
    <a href="https://wa.me/201032290323" target="_blank" className="whatsapp-icon">
      <img src="images/icon whatapp.png" alt="WhatsApp Chatbot" />
    </a>
    </>
  )
}

export default Home