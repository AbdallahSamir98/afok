const WeAreInformation = () => {
    const data = [
      { src: "images/Rectangle 18.png", paragraph: "عميل", number: "+80" },
      { src: "images/Rectangle 17.png", paragraph: "الخبره", number: "+1" },
      { src: "images/Rectangle 19.png", paragraph: "سنة التاسيس", number: "2020" },
      { src: "images/Rectangle 20.png", paragraph: "عميل", number: "+40" }
    ];
  
    return (
      <>
        <div className="weAreInformation py-5">
          <div className="container">
            <div className="row">
              {data.map((data, idx) => (
                <div key={idx} className="col-md-3  text-center">
                <div className="weAreData">
                    <img src={data.src} className="w-50 my-3" alt="" />
                    <p className="">{data.paragraph}</p>
                    <p>{data.number}</p>
                </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </>
    );
  };
  
  export default WeAreInformation;
  