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
                  <span>Mr. Terry Yung</span></h2>
                  <h2 className="section-title__title" style={{fontSize:'100%'}}>
                  <p>Chief Investment Officer, BOC Group Life Assurance Company Limited (BOC Life)</p>
                  </h2>
                </div>
                <div className="speaker-single__info-box">
                  <ul className="speaker-single__info-list list-unstyled" style={{fontSize:'100%'}}>
                  <p>Mr. Terry Yung is the Chief Investment Officer of BOC Group Life Assurance Company Limited (“BOC Life”), responsible for corporate investment strategy and management of the company’s investment portfolios. </p>  

                  <p>Terry has over 25 years of experience in the insurance and investment banking industry. Prior to joining BOC Life, Terry was the Chief Investment Officer at Hang Seng Insurance Company Limited, spearheaded the company’s MPF business and investment portfolios.</p>

                  <p>Terry is a qualified actuary. He is a current committee member of the Actuarial Society of Hong Kong’s Pension and Employee Benefits Committee. Terry is a Fellow of the Society of Actuaries. He graduated from the University of Hong Kong with a Bachelor degree in Actuarial Science.</p>
                  </ul>
                </div>
            </div>
          </div>
            <div className="col-xl-6 col-lg-5">
              <div className="speaker-single__right">
                <div className="speaker-single__img-box">
                  <div className="speaker-single__img">
                    <img
                      src="assets/images/speakers/terry_yung.jpg"
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
