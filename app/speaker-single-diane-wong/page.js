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
                  <span>Miss Diane Wong Shuk Han</span></h2>
                  <h2 className="section-title__title" style={{fontSize:'100%'}}>
                  <p>JP, Under Secy for Env & Ecology, Environment and Ecology Bureau</p>
                  </h2>
                </div>
                <div className="speaker-single__info-box">
                  <ul className="speaker-single__info-list list-unstyled" style={{fontSize:'100%'}}>
                  <p>Miss Wong joined the Administrative Service in 1985.  Throughout the service with the Government, Miss Wong had taken up a wide range of duties at different Bureaux and Departments, including the former City and New Territories Administration, the former Education and Manpower Branch, the Tsuen Wan District Office, the former Transport Branch, the former Housing Branch, the Wong Tai Sin District Office, the former  Health and Welfare Branch (subsequently reorganised to become the former Health, Welfare and Food Bureau), the former Housing, Planning and Lands Bureau (subsequently reorganised to become the Development Bureau), and the former Food and Health Bureau.  She was appointed as a Deputy Director of Food and Environmental Hygiene Department in 2018 and subsequently as the Under Secretary for Environment and Ecology in August 2022.</p>

                  <p>Miss Wong possesses a broad spectrum of experience in various areas of public administration, including food and environmental hygiene, land development, home affairs and social welfare.  During her tenure as the Under Secretary for the Environment, she helped support the formulation of policies on air quality, waste management, climate actions and conservation.</p>  
                  </ul>
                </div>
            </div>
          </div>
            <div className="col-xl-6 col-lg-5">
              <div className="speaker-single__right">
                <div className="speaker-single__img-box">
                  <div className="speaker-single__img">
                    <img
                      src="assets/images/speakers/diane_wong.jpg"
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
