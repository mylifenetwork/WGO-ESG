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
                  <span>Mr. TP Lim</span></h2>
                  <h2 className="section-title__title" style={{fontSize:'100%'}}>
                  <p>President, Roots & Shoots Malaysia</p>
                  </h2>
                </div>
                <div className="speaker-single__info-box">
                  <ul className="speaker-single__info-list list-unstyled" style={{fontSize:'100%'}}>
                  <p>TP is a Communications and Content Specialist with a wide range of experiences. He qualified as a Barrister in Law from Lincoln’s Inn, London, and holds a Bachelor of Law degree from the University of Bristol (UK). TP started his career in London in the field of marketing.</p>  

                  <p>Upon returning to his home country Malaysia, he pursued his passion for content creation by becoming a television host with TV Station ASTRO for 13 years, whilst running a successful Events Management company.</p>

                  <p>Since 2015, he continued expanding his creative flair as an Executive Producer through movie production, creating numerous blockbusters and award-winning movies and TV series which have been released at cinemas, and on Netflix and Disney+.</p>

                  <p>TP has a passion in Conservation, which led to his involvement with good friend Dr Jane Goodall. TP founded and remains the current President of the Jane Goodall’s Roots and Shoots chapter in Malaysia. The NGO has launched numerous initiatives to empower local youths to contribute their talents in protecting the biodiversity and nature of Malaysia.</p>

                  <p>TP is presently executive producing a life-action movie about a dog and his wolf friend, together with Dr Jane Goodall and Leonardo Di’Caprio as fellow Executive Producers. The film is slated for release in 2026.</p>
                  </ul>
                </div>
            </div>
          </div>
            <div className="col-xl-6 col-lg-5">
              <div className="speaker-single__right">
                <div className="speaker-single__img-box">
                  <div className="speaker-single__img">
                    <img
                      src="assets/images/speakers/TP_lim.png"
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
