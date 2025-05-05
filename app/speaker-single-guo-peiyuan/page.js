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
                  <span>Dr. Guo Peiyuan</span></h2>
                  <h2 className="section-title__title" style={{fontSize:'100%'}}>
                  <p>Advisor, United Nations Environment Programme Finance Initiative (UNEP FI)</p>
                  </h2>
                </div>
                <div className="speaker-single__info-box">
                  <ul className="speaker-single__info-list list-unstyled" style={{fontSize:'100%'}}>
                  <p>Dr. Guo Peiyuan, who holds a Ph.D. in Management from Tsinghua University, is the Chairman of SynTao Green Finance. Dr. Guo is a renowned expert in corporate social responsibility, green finance and responsible investment. He has over two decades of research and experience in responsible investment. Dr. Guo founded China Sustainable Investment Forum (China SIF) in 2012 that aims to promote ESG development in China and facilitate international exchange. </p>  
                  
                  <p>Dr. Guo is a committee member China Green Finance Committee, a member of the China Association for Public Companies (CAPCO), a member of ESG Committee of the Insurance Asset Management Association of China (IAMAC), a member of the Energy Conservation and Emission Reduction Certification Committee of China National Accreditation Service for Conformity Assessment (CNAS), and a member of expert group in China for ISO Sustainable Finance standards. He serves as the China advisor to the UNEP Finance Initiative, a member of the advisory group on sustainability reporting for International Standards of Accounting and Reporting (ISAR) in the United Nations Conference on Trade and Development (UNCTAD), and a board member of the Asia Investor Group on Climate Change (AIGCC).</p>
                  
                  <p>Dr. Guo Peiyuan has extensive overseas ESG policy consulting experience and has been invited to provide green finance related advisory and training services to the Indonesian Ministry of Finance, the State Securities Commission of Vietnam, the Central Bank of Sri Lanka, the Reserve Bank of Fiji, the Union of Banks of Kyrgyzstan and the VEB.RF.</p>
                  </ul>
                </div>
            </div>
          </div>
            <div className="col-xl-6 col-lg-5">
              <div className="speaker-single__right">
                <div className="speaker-single__img-box">
                  <div className="speaker-single__img">
                    <img
                      src="assets/images/speakers/guo_peiyuan.jpg"
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
