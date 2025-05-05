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
                  <span>Dr. Toa Charm</span></h2>
                  <h2 className="section-title__title" style={{fontSize:'100%'}}>
                  <p>Founding Chairman, Data Literacy & AI Association</p>
                  </h2>
                </div>
                <div className="speaker-single__info-box">
                  <ul className="speaker-single__info-list list-unstyled" style={{fontSize:'100%'}}>
                  <p>Dr. Charm is a seasoned professional with over thirty years of expertise in the innovation and technology industry. He has extensive knowledge in digital transformation, corporate innovation, intrapreneurship, startup incubation, big data, AI, fintech, blockchain, and e-commerce. Dr. Charm has held key positions at IBM, Oracle, HSBC, Jardine, and Kingdee. He was the former Chief Public Mission Officer at Cyberport, nurturing tech startups. Currently, he serves as Chairman and Chief Advisor for several top startups in Asia, and is an Associate Professor at the Chinese University of Hong Kong Business School and an Independent Non-Executive Director at TransUnion.</p>

                  <p>Dr. Charm's influence extends beyond individual companies. He is the founding chairman of the Data & AI Literacy Association and holds significant roles in various industry organizations. These include being a member of the Advisory Committee of the Cyberport Entrepreneurship Centre, a mentor at Hong Kong Science Park, Chairman of the IoT Industry Advisory Committee at GS1 Hong Kong, a fellow of Hong Kong Institute of Marketing, an executive committee member of the Startup Committee at the Federation of Hong Kong Industries, a member of the Technical Expert Group at the Hong Kong Applied Science and Technology Research Institute, a member of the Digital Economy Expert Group at the Hong Kong Consumer Council, and a member of the Technical Committee of the Macau SAR Government. Additionally, he provides consulting and training services to leading multinational and local companies. Dr. Charm has published a book titled "Boost Your Digital Power." In recognition of his contributions, he received the Distinguished Alumni Award from the City University of Hong Kong Business School in 2019.</p>  
                  </ul>
                </div>
            </div>
          </div>
            <div className="col-xl-6 col-lg-5">
              <div className="speaker-single__right">
                <div className="speaker-single__img-box">
                  <div className="speaker-single__img">
                    <img
                      src="assets/images/speakers/toa_charm.jpg"
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
