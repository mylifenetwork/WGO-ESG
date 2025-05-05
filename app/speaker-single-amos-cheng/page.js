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
                  <span>Mr. Amos Cheng</span></h2>
                  <h2 className="section-title__title" style={{fontSize:'100%'}}>
                  <p>Founder and President, Eco-Humanitarian Advocate (EHA)</p>
                  </h2>
                </div>
                <div className="speaker-single__info-box">
                  <ul className="speaker-single__info-list list-unstyled" style={{fontSize:'100%'}}>
                  <p>Amos is a dedicated sustainability advocate and the founder and president of Eco-Humanitarian Advocate (EHA), a student-led organization committed to promoting environmental protection and supporting the sustainable well-being of underprivileged communities locally and globally, in alignment with the United Nations' Sustainable Development Goals (SDGs). In 2025, Amos received the Hong Kong Outstanding Sustainability Volunteer Award from HKFYG.</p>
                  <p>His sustainability journey began after witnessing the bleaching of Australia’s Great Barrier Reef, inspiring him to promote environmental change. After his sustainability club assisted in implementing sustainability measures at school, including the installation of solar panels, which contributed to achieving the CLP Smart Energy Innovation Award, he developed a passion for renewable solar energy in underserved regions. Since then, he has launched several projects focused on solar energy.</p>  
                  </ul>
                </div>
            </div>
          </div>
            <div className="col-xl-6 col-lg-5">
              <div className="speaker-single__right">
                <div className="speaker-single__img-box">
                  <div className="speaker-single__img">
                    <img
                      src="assets/images/speakers/amos_cheng.jpeg"
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
