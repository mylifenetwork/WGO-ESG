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
                  <span>Ms. Wendy M.Y. Chan</span></h2>
                  <h2 className="section-title__title" style={{fontSize:'100%'}}>
                  <p>Chairlady, Activities & Events Committee, The Institute of Purchasing & Supply of Hong Kong (IPSHK)</p>
                  </h2>
                </div>
                <div className="speaker-single__info-box">
                  <ul className="speaker-single__info-list list-unstyled" style={{fontSize:'100%'}}>
                  <p>Ms. Chan serves as the Chairlady of the Activities & Events Committee for the Institute of Purchasing & Supply of Hong Kong, where she promotes professionalism within the purchasing and supply chain sectors through organizing sharing of experiences and best practices. With over a decade of experience in strategic procurement, she has made significant contributions during her tenure at CLP Power Hong Kong Limited. Notably, she successfully spearheaded the implementation of a sustainable procurement policy and developed a comprehensive supply chain sustainability program, engaging both internal stakeholders and external suppliers.</p>

                  <p>Prior to her role at CLP, Ms. Chan held a key position at ExxonMobil Hong Kong Limited, where she led procurement operations across the Asia Pacific region for the fuels and lubricants markets. Under her leadership, the team effectively developed and executed cross-regional sourcing strategies and consolidated procurement activities in low-cost countries, resulting in enhanced operational efficiencies.</p>

                  <p>Ms. Chan holds both a Bachelor of Science and a Master of Business Administration from The Chinese University of Hong Kong.</p>  
                  </ul>
                </div>
            </div>
          </div>
            <div className="col-xl-6 col-lg-5">
              <div className="speaker-single__right">
                <div className="speaker-single__img-box">
                  <div className="speaker-single__img">
                    <img
                      src="assets/images/speakers/wendy_chan.png"
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
