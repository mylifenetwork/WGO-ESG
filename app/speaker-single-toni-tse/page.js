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
                  <span>Mr. Toni Tse </span></h2>
                  <h2 className="section-title__title" style={{fontSize:'100%'}}>
                  <p>Head of Digital Innovation and Growth, BOC Group Life Assurance Company Limited (BOC Life)</p>
                  </h2>
                </div>
                <div className="speaker-single__info-box">
                  <ul className="speaker-single__info-list list-unstyled" style={{fontSize:'100%'}}>
                  <p>Mr. Toni Tse is the Head of Digital Innovation and Growth of BOC Group Life Assurance Company Limited ("BOC LIFE").</p>

                  <p>Toni is a "user-centric" innovator with extensive design thinking experience, taking lead in BOC LIFE’s digital channel development, ecosystem projects, big data development, and digital transformation projects.</p>

                  <p>Toni holds a Degree in Business Administration (Marketing) from the City University of Hong Kong and has more than 15 years of experience in consumer insight, strategic planning and digital innovation. Prior to joining BOC LIFE in 2019, he worked in HSBC’s APAC digital innovation function, and was a core founding team member of an InsurTech startup.</p>  
                  </ul>
                </div>
            </div>
          </div>
            <div className="col-xl-6 col-lg-5">
              <div className="speaker-single__right">
                <div className="speaker-single__img-box">
                  <div className="speaker-single__img">
                    <img
                      src="assets/images/speakers/toni_tse.jpg"
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
