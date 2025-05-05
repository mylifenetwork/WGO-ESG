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
                  <span>Ms. Phoebe Leung</span></h2>
                  <h2 className="section-title__title" style={{fontSize:'100%'}}>
                  <p>Senior Manager, Sustainable Development, Swire Properties Limited</p>
                  </h2>
                </div>
                <div className="speaker-single__info-box">
                  <ul className="speaker-single__info-list list-unstyled" style={{fontSize:'100%'}}>
                  <p>Phoebe Leung is the Senior Sustainable Development Manager of Swire Properties. Her work involves supporting the Company’s Sustainable Development (SD) 2030 Strategy as well as action plans and programmes to improve the company’s overall SD performance.</p>

                  <p>She leads the planning and execution of Swire Properties’ SD tenant engagement strategy and bespoke tenant programmes, such as the Green Performance Pledge and Green Kitchen Initiative, fostering landlord-tenant partnerships to incorporate sustainability throughout the design, fit-out and occupancy stages. </p>

                  <p>In addition, she drives the Company’s Resource and Circularity Taskforce, made up of representatives from portfolio teams and hotels, to regularly analyse waste performance and facilitate new initiatives. She leads the development of new partnerships and innovations to design out waste, encourage reuse and enhance resource recovery. Her recent projects include the Taikoo Place Smart Reusable Cup and Food Box Programme, and launching the Smart Waste Reduction Challenge which utilises smart scales and a digital engagement platform to gamify the Company’s collective sustainability journey with tenants. </p>

                  <p>Phoebe is a Chartered Environmentalist and also holds a Master of Public Administration from Columbia University.</p>  
                  </ul>
                </div>
            </div>
          </div>
            <div className="col-xl-6 col-lg-5">
              <div className="speaker-single__right">
                <div className="speaker-single__img-box">
                  <div className="speaker-single__img">
                    <img
                      src="assets/images/speakers/phoebe_leung.JPG"
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
