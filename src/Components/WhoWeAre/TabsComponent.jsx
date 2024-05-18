import { Link } from 'react-router-dom'

const TabsComponent = () => {
  return (
    <>
        


        <div className='container'>
            <div className="row ">
                <div className="col-md-6 ">
                    <div>
                        <img src="images/Directing .png" alt="Directing image" className='w-100' />
                    </div>
                </div>
                <div className="col-md-6 mt-5">
                    <div>
                        <h2 className='afok me-4'>  لماذا  <span className='m-0'> افق النهضه ؟   </span> </h2>
                   
                        <ul className='afok-ul'>
  <li>الخبرة الطويلة في سوق العمل والتي تزيد عن 20 عاماً، وبعدد عملاء يتجاوز 5000 عميل.</li>
  <li>السعي الدائم لتطوير الخدمات والمهارات وإدخال أحدث الأدوات الرقمية العالمية.</li>
  <li>نقدم منتجات تلبي جميع احتياجات السوق العالمي بجودة ومعايير عالمية.</li>
  <li>ميكروتيك يدعم بشكل كامل ضريبة القيمة المضافة VAT ومعتمد من هيئة الزكاة والضريبة والجمارك.</li>
  <li>يدعم جميع النشاطات ويقدم الخدمات في مختلف المجالات والقطاعات.</li>
  <li>إمكانية التعامل مع عدد غير محدود من الشركات وفروعها، وربطها بأنظمة محاسبية تناسب كلاً منها.</li>
  <li>أسعار تنافسية مقابل خدمات ذات قيمة أعلى.</li>
</ul>
<div className=" navButton m-auto"> 
          <Link >
          نبذه عنا           </Link>
           </div>
                    </div>
                </div>

            </div>
            </div>
    </>
  )
}

export default TabsComponent