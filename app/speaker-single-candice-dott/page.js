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
                  <span>Ms. Candice Dott</span></h2>
                  <h2 className="section-title__title" style={{fontSize:'100%'}}>
                  <p>Director of Market Engagement, Taskforce on Nature‑related Financial Disclosures (TNFD)</p>
                  </h2>
                </div>
                <div className="speaker-single__info-box">
                  <ul className="speaker-single__info-list list-unstyled" style={{fontSize:'100%'}}>
                  <p>Candice is an accomplished business leader known for driving sustainable growth, with 20+ years of experience in global financial services where she has most recently worked for the London Stock Exchange Group and prior to that Bloomberg.</p>

                  <p>She has deep expertise in sustainable finance, asset management, investment banking, commercial banking, corporates, central banks, exchanges, fintech and data.</p>

                  <p>Candice has extensive global sales, business development, customer and strategy execution leadership experience across the UK, Europe, Middle East and Africa.</p>

                  <p>She is passionate about connecting ecosystem partners and stakeholders for greater impact and has established networks across financial services, developing and mature markets, and public and private sector.</p>

                  <p>Candice lives in Johannesburg and enjoys traveling, nature, trail running and trekking.</p>  
                  </ul>
                </div>
            </div>
          </div>
            <div className="col-xl-6 col-lg-5">
              <div className="speaker-single__right">
                <div className="speaker-single__img-box">
                  <div className="speaker-single__img">
                    <img
                      src="assets/images/speakers/candice_dott.jpg"
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
