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
                  <span>Mr. Felix Lee</span></h2>
                  <h2 className="section-title__title" style={{fontSize:'100%'}}>
                  <p>Head of Group Corporate Affairs & Sustainability, The Hong Kong and China Gas Company Ltd (Towngas)</p>
                  </h2>
                </div>
                <div className="speaker-single__info-box">
                  <ul className="speaker-single__info-list list-unstyled" style={{fontSize:'100%'}}>
                  <p>Having served at The Hong Kong and China Gas Company Limited (Towngas) for over 30 years, Felix Lee’s extensive experience spans ESG, corporate communications, supply chain management, procurement, and logistics.</p>  

                  <p>Mr. Lee has led the Group in formulating strategies to address climate and nature-related risks and opportunities. He has also organised Hong Kong's first nationwide biodiversity forum, responding to the determination of the Chinese government and the Hong Kong government to achieve a low-carbon economy and environmental conservation. Under Mr. Lee's leadership, Towngas and Towngas Smart Energy have continued to improve their performance in various international ESG ratings, placing them at the forefront of the industry.</p>
                 
                  <p>Mr. Lee is a member of the Steering Committee of the Climate Governance Initiative HK Chapter. He is also an Appointed Director of The Hong Kong Federation of Journalists, and a member of professional associations such as the Chartered Institute of Procurement & Supply and the Chartered Institute of Logistics and Transport in the UK.</p>

                  <p>Additionally, Mr. Lee holds a Master of Business Administration degree and a Bachelor of Social Sciences degree from the University of Hong Kong.</p>
                  </ul>
                </div>
            </div>
          </div>
            <div className="col-xl-6 col-lg-5">
              <div className="speaker-single__right">
                <div className="speaker-single__img-box">
                  <div className="speaker-single__img">
                    <img
                      src="assets/images/speakers/felix_lee.jpg"
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
