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
                  <span>Dr. Allinnettes Go Adigue</span></h2>
                  <h2 className="section-title__title" style={{fontSize:'100%'}}>
                  <p>Head of ASEAN Regional Hub, Global Reporting Initiative</p>
                  </h2>
                </div>
                <div className="speaker-single__info-box">
                  <ul className="speaker-single__info-list list-unstyled" style={{fontSize:'100%'}}>
                  <p>Dr. Allinnettes Go Adigue is the Head of the ASEAN Regional Hub of the Global Reporting Initiative. As Head of GRI’s ASEAN Hub, Ally is tasked to promote the practice of sustainability reporting across Southeast Asia by working with relevant stakeholders to create a conducive policy environment for sustainable business practices, promote wider adoption of sustainability reporting and build the capacity of organizations in sustainability reporting. A lifelong learner and a global citizen, Ally has lived in 3 continents in the past 19 years. Prior to GRI, Ally has previously worked for the academe, and both the public and private sectors. While working on her PhD, she worked as a graduate research assistant in the field of Climate Change Policy and Economics. She also worked in a retail electricity company in Singapore and for the Office of the President of the Philippines. Ally earned her PhD on Public Policy from the Crawford School of Public Policy at the Australian National University in 2017. She has two Masters degrees: one in Development Studies from the Institute of Social Studies, Erasmus University, The Netherlands; and another in Public Administration from the Lee Kuan Yew School of Public Policy in Singapore. She also has Bachelor’s degrees in Law and Political Science.</p>  
                  </ul>
                </div>
            </div>
          </div>
            <div className="col-xl-6 col-lg-5">
              <div className="speaker-single__right">
                <div className="speaker-single__img-box">
                  <div className="speaker-single__img">
                    <img
                      src="assets/images/speakers/allinnettes_go_adigue.jpg"
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
