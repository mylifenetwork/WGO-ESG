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
                  <span>Mr. Felix Lam</span></h2>
                  <h2 className="section-title__title" style={{fontSize:'100%'}}>
                  <p>Chairman of Communication Committee, The Institute of Purchasing and Supply of Hong Kong (IPSHK)</p>
                  </h2>
                </div>
                <div className="speaker-single__info-box">
                  <ul className="speaker-single__info-list list-unstyled" style={{fontSize:'100%'}}>
                  <p>Felix is the Director of The Institute of Purchasing and Supply of Hong Kong Limited and Institute for Supply Management Hong Kong Limited, where he is responsible for promoting professionalism in procurement and supply management.  He served as the Head of Sustainability at the Green Council for seven years, during which he advocated for corporate sustainability through various initiatives, including training courses, seminars, membership programs, corporate sustainability awards, and consultancy services. Prior to that, he had a distinguished career at Towngas for over 25 years, culminating in his role as the Head of Corporate Supplies Department, where he led the procurement and supply chain operations. Felix has also been a guest lecturer at PolyU, HKHSU, HKU SPACE, and HKMA, where he has taught supply chain sustainability.</p>  
                  </ul>
                </div>
            </div>
          </div>
            <div className="col-xl-6 col-lg-5">
              <div className="speaker-single__right">
                <div className="speaker-single__img-box">
                  <div className="speaker-single__img">
                    <img
                      src="assets/images/speakers/felix_lam.png"
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
