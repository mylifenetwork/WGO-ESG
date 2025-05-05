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
                  <span>Mr. Ken Chiu</span></h2>
                  <h2 className="section-title__title" style={{fontSize:'100%'}}>
                  <p>Head of Carbon and ESG Products Market, Hong Kong Exchanges and Clearing Limited (HKEX)</p>
                  </h2>
                </div>
                <div className="speaker-single__info-box">
                  <ul className="speaker-single__info-list list-unstyled" style={{fontSize:'100%'}}>
                  <p>Ken Chiu serves as Head of Carbon & ESG Products at HKEX since 2022, responsible for fostering the Carbon & ESG product businesses for the exchange. He has led the team to successfully establish and launch the first brand new voluntary carbon marketplace at HKEX in recent years.</p>

                  <p>Mr Chiu has more than 16 years of experience in the industry. He has worked in various functional areas including structuring and marketing positions in global markets of investment banks in both Hong Kong SAR and Mainland China. He has also been actively engaging in RMB internationalisation and cross-border business activities since 2009.</p>

                  <p>Mr Chiu joined HKEX in 2018. Prior to his current role, Mr. Chiu was Senior Vice President of Fixed Income and Currency (FIC) Development responsible for FIC derivative and bond listing businesses at HKEX. He holds an MSc in Mathematics for Finance and Actuarial Science from the Université Paris-Dauphine and a BBA in Finance from the Hong Kong University of Science and Technology.</p>  
                  </ul>
                </div>
            </div>
          </div>
            <div className="col-xl-6 col-lg-5">
              <div className="speaker-single__right">
                <div className="speaker-single__img-box">
                  <div className="speaker-single__img">
                    <img
                      src="assets/images/speakers/ken_chiu.jpg"
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
