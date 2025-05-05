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
                  <span>Mr. Nick Zhong</span></h2>
                  <h2 className="section-title__title" style={{fontSize:'100%'}}>
                  <p>Chief Operating Officer, Smart Zeroing Ltd</p>
                  </h2>
                </div>
                <div className="speaker-single__info-box">
                  <ul className="speaker-single__info-list list-unstyled" style={{fontSize:'100%'}}>
                  <p>1.More than 20 years of work experience in MNCs;</p>

                  <p>2.Currently in charge of operations, ESG and carbon project management for Smartzeroing;</p>

                  <p>3.Over 6 years in QA and organization excellence projects roles for automobile & electronics manufacturing(Bosch, Midcom QA System Lead);</p>

                  <p>4.16 years management positions in global sourcing environment, managing global or FE Asia’s supply chain, sustainability projects and financial/operational audits (Walmart Ethical Standard Project Manager; Bata Audit & Compliance Manager);</p>

                  <p>5.Proven track records and management expertise in cross industry’s supply chain & sustainability project management, sourcing KPIs, internal control, ESG & carbon projects.</p>  
                  </ul>
                </div>
            </div>
          </div>
            <div className="col-xl-6 col-lg-5">
              <div className="speaker-single__right">
                <div className="speaker-single__img-box">
                  <div className="speaker-single__img">
                    <img
                      src="assets/images/speakers/nick_zhong.jpg"
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
