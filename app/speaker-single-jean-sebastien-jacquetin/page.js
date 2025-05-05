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
                  <span>Mr. Jean-Sebastien Jacquetin</span></h2>
                  <h2 className="section-title__title" style={{fontSize:'100%'}}>
                  <p>Managing Partner, Cavendish Investment Corp</p>
                  </h2>
                </div>
                <div className="speaker-single__info-box">
                  <ul className="speaker-single__info-list list-unstyled" style={{fontSize:'100%'}}>
                  <p>Jean-Sébastien Jacquetin is a seasoned family office and investment professional with over 25 years of experience spanning Europe, North America, and Asia. As Managing Partner of Cavendish Investment Corp. Group of Companies, he specializes in private equity transactions, ESG investments, trade and commodity finance and cross-border advisory services.</p>  

                  <p>Prior to joining Cavendish, Mr. Jacquetin held senior positions at prominent financial institutions including CITIC Hyperion in Hong Kong, Meredith Financial Group and Aegis Capital in New York and Natixis (Banques Populaires Group) in Paris, where he demonstrated expertise in deal sourcing, transaction structuring, and relationship management across international markets. His broad sector experience encompasses resources, biotech healthcare, IT, renewable energy, and real estate.</p>

                  <p>Mr. Jacquetin holds an MBA from Sciences Po Paris, complemented by a Master's degree in Political Science from the University of Montreal. His multilingual capabilities - fluent in French and English, with conversational Spanish - have proven invaluable in facilitating complex international transactions. </p>
                  </ul>
                </div>
            </div>
          </div>
            <div className="col-xl-6 col-lg-5">
              <div className="speaker-single__right">
                <div className="speaker-single__img-box">
                  <div className="speaker-single__img">
                    <img
                      src="assets/images/speakers/jean_sebastien_jacquetin.jpg"
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
