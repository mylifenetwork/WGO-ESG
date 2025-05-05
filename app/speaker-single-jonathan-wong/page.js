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
                  <span>Mr. Jonathan Tsuen Yip Wong</span></h2>
                  <h2 className="section-title__title" style={{fontSize:'100%'}}>
                  <p>Chief of Innovation, Enterprise and Investment, Trade, Investment and Innovation Division, UNESCAP</p>
                  </h2>
                </div>
                <div className="speaker-single__info-box">
                  <ul className="speaker-single__info-list list-unstyled" style={{fontSize:'100%'}}>
                  <p>Jonathan Wong is the Chief of Innovation, Enterprise and Investment at the United Nations Economic and Social Commission for Asia and the Pacific (ESCAP). He joined ESCAP from the UK Department for International Development (DFID), where he was the inaugural Head of Innovation. He has led the establishment of several high-profile innovation initiatives including the Global Innovation Fund, a partnership between the governments of the US, UK, Sweden, Australia and South Africa which invested in entrepreneurs around the world.</p>

                  <p>He has extensive experience in innovation and entrepreneurship, technology development, innovative financing and impact investing. He also has substantial policy expertise on these agendas, having advised governments across Europe, Africa, Asia and the Pacific, and Latin America.</p>

                  <p>Before joining DFID, he was a founding partner of a technology and innovation venture-capital fund and supported the establishment of the UK NHS Institute for Innovation and Improvement.</p>

                  <p>Mr Wong has also served on the Government of Spain’s International Advisory Council for the Social Economy, UN Task Force of Social and Solidarity Economy, APEC E-commerce Business Council and UNCDF Board for ASEAN; and was awarded a Rockefeller Foundation Policy Fellowship and the inaugural Schwab Foundation Award for Public Social Innovation and Entrepreneurship at the World Economic Forum.</p>  
                  </ul>
                </div>
            </div>
          </div>
            <div className="col-xl-6 col-lg-5">
              <div className="speaker-single__right">
                <div className="speaker-single__img-box">
                  <div className="speaker-single__img">
                    <img
                      src="assets/images/speakers/johnathan_wong.jpg"
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
