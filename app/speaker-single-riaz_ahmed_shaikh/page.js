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
                  <span>Mr. Riaz Ahmed Shaikh</span></h2>
                  <h2 className="section-title__title" style={{fontSize:'100%'}}>
                  <p>Consul General of the Islamic Republic of Pakistan, Hong Kong</p>
                  </h2>
                </div>
                <div className="speaker-single__info-box">
                  <ul className="speaker-single__info-list list-unstyled" style={{fontSize:'100%'}}>
                  <p>Mr. Riaz Ahmed Shaikh has assumed the responsibilities of Pakistan’s Consul General in Hong Kong SAR and Macao SAR in June 2024.</p> 

                  <p>Prior to joining this mission, he served at various Economic and Trade Diplomatic positions abroad. While in Pakistan, he has diversified experience of Trade promotion, Trade facilitation, Event Organization, Investment Promotion, Insurance Sector and State Trading.</p>

                  <p>CG Shaikh’s diplomatic experience includes serving as the Commercial Counsellor in Embassy of Pakistan Beijing, China and at the High Commission of Pakistan Kuala Lumpur Malaysia, where he was responsible for enhancement of bilateral trade and investment. In Trade Development Authority of Pakistan, he was looking after trade promotion, trade facilitation, market access issues and event organization.</p>

                  <p>In State Life Insurance Company, he was managing the prime real estate of the organization. In Export Processing Zones Authority, he was assigned to manage finance, engineering and legal matters. In Trading Corporation of Pakistan, he was responsible for managing the commodity imports such as wheat, sugar and urea for Pakistan’s strategic reserves.</p>

                  <p>He holds Master’s Degree in International Trade Law and Economics from World Trade Institute, Switzerland.</p>
                  </ul>
                </div>
            </div>
          </div>
            <div className="col-xl-6 col-lg-5">
              <div className="speaker-single__right">
                <div className="speaker-single__img-box">
                  <div className="speaker-single__img">
                    <img
                      src="assets/images/speakers/riaz_ahmed_shaikh.jpeg"
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
