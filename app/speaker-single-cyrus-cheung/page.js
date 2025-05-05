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
                  <span>Mr. Cyrus Cheung</span></h2>
                  <h2 className="section-title__title" style={{fontSize:'100%'}}>
                  <p>Partner, PwC – Sustainability Consulting & Chairperson of Sustainability Committee, Hong Kong Institute of Certified Public Accountants</p>
                  </h2>
                </div>
                <div className="speaker-single__info-box">
                  <ul className="speaker-single__info-list list-unstyled" style={{fontSize:'100%'}}>
                  <p>Cyrus is a Partner with close to 20 years of experience in the Audit and Environmental, Social and Governance (“ESG”) Services practices of PwC Hong Kong.  He has extensive experience in audit, capital market transactions, accounting advisory, internal control advisory, corporate governance advisory, risk management advisory and ESG advisory.</p>

                  <p> Cyrus has broad audit experiences with companies of different scale, from start-ups to blue-chip conglomerate listed companies. Cyrus was involved in the initial public offering for 10+ companies, including Budweiser, which was HK’s second-biggest fund-raised IPO in 2019, and multiple merger and acquisition transactions for clients in Hong Kong, Mainland China and overseas.</p>

                  <p> With close to 20 years of experience in business development, Cyrus has a proven track record in driving growth and fostering strategic partnership across diverse industries. He has delivered 100+ professional training and advice on sustainability to companies from various sectors, including real estate, infrastructure, construction, manufacturing, ports operations, logistics, conglomerates and others.</p>  
                  </ul>
                </div>
            </div>
          </div>
            <div className="col-xl-6 col-lg-5">
              <div className="speaker-single__right">
                <div className="speaker-single__img-box">
                  <div className="speaker-single__img">
                    <img
                      src="assets/images/speakers/cyrus_cheung.jpg"
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
