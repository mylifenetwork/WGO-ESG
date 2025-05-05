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
                  <span>Ms. Vivienne Chiu</span></h2>
                  <h2 className="section-title__title" style={{fontSize:'100%'}}>
                  <p>Chief Brand and Communications Officer, BOC Group Life Assurance Company Limited (BOC Life)</p>
                  </h2>
                </div>
                <div className="speaker-single__info-box">
                  <ul className="speaker-single__info-list list-unstyled" style={{fontSize:'100%'}}>
                  <p>Ms. Vivienne Chiu is the Chief Brand and Communications Officer of BOC Group Life Assurance Company Limited (“BOC Life”), spearheading the company’s brand marketing, corporate communications and corporate sustainability functions. </p>  

                  <p>Prior to joining the company, she has held various leadership roles in renowned MNCs and blue-chip companies spanning banking and finance, FinTech, utility, technology and media industries, focusing on Greater China, Asia Pacific and global markets. </p>

                  <p>In addition to her corporate capacity, Vivienne actively serves the Hong Kong community. She is a Committee Member of the Green Insurance Committee of the Hong Kong Federation of Insurers, the Board of Examiners of the Sustainability Awards since 2024, a member of the Marketing and Communications Advisory Board of Hong Kong Football Association, the Senior Adviser for Asia Pacific Customer Service Consortium and a Member of World Green Organization's Advisory Board.</p>

                  <p>Vivienne holds an MBA degree and a Bachelor of Social Science degree in Communication. She is also a Certified ESG Planner (CEP).</p>
                  </ul>
                </div>
            </div>
          </div>
            <div className="col-xl-6 col-lg-5">
              <div className="speaker-single__right">
                <div className="speaker-single__img-box">
                  <div className="speaker-single__img">
                    <img
                      src="assets/images/speakers/vivienne_chiu.jpeg"
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
