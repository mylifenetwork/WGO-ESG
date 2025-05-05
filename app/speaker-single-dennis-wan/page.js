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
                  <span>Mr. Dennis Wan</span></h2>
                  <h2 className="section-title__title" style={{fontSize:'100%'}}>
                  <p>Head of Capital Markets APAC, CDP</p>
                  </h2>
                </div>
                <div className="speaker-single__info-box">
                  <ul className="speaker-single__info-list list-unstyled" style={{fontSize:'100%'}}>
                  <p>Dennis Wan heads the front-line team engaging with regional financial markets actors and stakeholders for CDP, an NGO running the world’s largest repository of climate change, water security and forestation environmental data. Founded on transparency, CDP has produced scoring and research to catalyse sustainable investment, procurement and policy decisions across the globe for over two decades.</p> 

                  <p>After personally witnessing USA forest fires in 2021, Mr. Wan left a career in banking to drive environmental transparency by joining CDP. Immediately prior, he spent 22 years with Credit Suisse across Tokyo, New York and Singapore, rising from junior accountant to Chief Operating Officer of Hong Kong. In this final role, he ran the Board of Directors and locational governance for all banking business lines and support functions, interacting regularly with international regulators and authorities. Mr. Wan studied with the Cambridge Institute of Sustainability Leadership, graduated from Imperial College and is a Fellow of the Institute of Chartered Accountants of England & Wales.</p>
                  </ul>
                </div>
            </div>
          </div>
            <div className="col-xl-6 col-lg-5">
              <div className="speaker-single__right">
                <div className="speaker-single__img-box">
                  <div className="speaker-single__img">
                    <img
                      src="assets/images/speakers/dennis_wan.jpg"
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
