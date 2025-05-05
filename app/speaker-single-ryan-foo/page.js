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
                  <span>Mr. Ryan Foo</span></h2>
                  <h2 className="section-title__title" style={{fontSize:'100%'}}>
                  <p>Senior Technology Manager, TÜV Rheinland Hong Kong Limited</p>
                  </h2>
                </div>
                <div className="speaker-single__info-box">
                  <ul className="speaker-single__info-list list-unstyled" style={{fontSize:'100%'}}>
                  <p>Ryan has over 12 years of relevant professional experience, specializing in consulting and assurance services for the HKEx‘s ESG Reporting Guide. </p>  

                  <p>Ryan is the Senior Technical Manager of TÜV Rheinland, responsible for the development and management of the ESG projects. Prior to joining TÜV Rheinland, Ryan was engaged in the ESG management and reporting at the Big Four. He is familiar with the relevant standards and requirements of the GRI ("Global Reporting Initiative"), MSCI Global ESG Rating, TCFD ("Task Force on Climate-Related Financial Disclosure") reporting framework, and the GRESB ("Global Real Estate Sustainability Benchmark"). Ryan is also a GRI training instructor. He was involved in the translation of GRI3.1 Chinese version.</p>

                  <p>Ryan is familiar with various corporate sustainability and carbon footprint data management software and has practical application experience. He has successfully implemented the corporate sustainability development reporting data management system for HK Electric, HK MTR, HK CLP, Li & Fung, and CDL Singapore. </p>
                  </ul>
                </div>
            </div>
          </div>
            <div className="col-xl-6 col-lg-5">
              <div className="speaker-single__right">
                <div className="speaker-single__img-box">
                  <div className="speaker-single__img">
                    <img
                      src="assets/images/speakers/ryan_foo.jpeg"
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
