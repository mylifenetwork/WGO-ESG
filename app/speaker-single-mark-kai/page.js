import PageBanner from "@/components/PageBanner";
import EnvensLayouts from "@/layouts/EnvensLayouts";
const page = () => {
  return (
    <EnvensLayouts>
      <PageBanner pageName={"Speaker Single"} />
      <section className="speaker-single">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-7">
              <div className="speaker-single__left">
                <div className="section-title text-left">
                  <div className="section-title__tagline-box">
                    <p className="section-title__tagline section-title__tagline--two">
                      <span>//</span> Our Speaker
                    </p>
                  </div>
                  <h2 className="section-title__title">
                  <span>Mr. Mark Kai</span></h2>
                  <h2 className="section-title__title" style={{fontSize:'100%'}}>
                  <p>Chief Financial Officer, BOC Group Life Assurance Company Limited (BOC Life)</p>
                  </h2>
                </div>
                <div className="speaker-single__info-box">
                  <ul className="speaker-single__info-list list-unstyled" style={{fontSize:'100%'}}>
                  <p>Mr. Mark Kai is currently the Chief Financial Officer of BOC Group Life Assurance Company Limited (“BOC Life”), leading the finance, accounting and actuarial functions of the company. He has over 20 years of life insurance experience, with expertise in actuarial, financial management, business planning and asset liability management. Prior to the current role, he was the Chief Actuary and Appointed Actuary of BOC Life. Mark is a Fellow of the Society of Actuaries (FSA), Fellow of the Actuarial Society of HK (FASHK), and CFA.</p>  
                  </ul>
                </div>
            </div>
          </div>
            <div className="col-xl-6 col-lg-5">
              <div className="speaker-single__right">
                <div className="speaker-single__img-box">
                  <div className="speaker-single__img">
                    <img
                      src="assets/images/speakers/mark_kai.jpg"
                      alt
                    />
                  </div>
                  <div className="speaker-single__img-shape" />
                  <div className="speaker-single__share-and-social">
                    <div className="speaker-single__share">
                      <a href="#">
                        <span className="fas fa-share-alt" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </EnvensLayouts>
  );
};
export default page;
