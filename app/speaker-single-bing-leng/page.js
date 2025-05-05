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
                  <span>Dr. Bing Leng</span></h2>
                  <h2 className="section-title__title" style={{fontSize:'100%'}}>
                  <p>Member, International Sustainability Standards Board (ISSB)</p>
                  </h2>
                </div>
                <div className="speaker-single__info-box">
                  <ul className="speaker-single__info-list list-unstyled" style={{fontSize:'100%'}}>
                  <p>Dr. Bing Leng, a board member of International Sustainability Standards Board (ISSB) and a co-Chair of the IFRS Taxonomy Consultation Group (ITCG) . Dr. Leng served at Ministry of Finance, China and was responsible for accounting standards setting and development of digital taxonomies of financial reporting before he joined the ISSB in mid of 2022. He also used to be a member of Board of Directors of XBRL International between 2014 and 2020, an independent co-Chair of Net Zero Recognition and Accountability Framework Consultation of UNFCCC between 2023 and 2024.</p>  
                  </ul>
                </div>
            </div>
          </div>
            <div className="col-xl-6 col-lg-5">
              <div className="speaker-single__right">
                <div className="speaker-single__img-box">
                  <div className="speaker-single__img">
                    <img
                      src="assets/images/speakers/bing_leng.jpg"
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
