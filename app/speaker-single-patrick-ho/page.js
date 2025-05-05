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
                  <span>Mr. Patrick Ho</span></h2>
                  <h2 className="section-title__title" style={{fontSize:'100%'}}>
                  <p>Head of Sustainable Development, Swire Properties Limited</p>
                  </h2>
                </div>
                <div className="speaker-single__info-box">
                  <ul className="speaker-single__info-list list-unstyled" style={{fontSize:'100%'}}>
                  <p>Mr Patrick Ho is responsible for formulating and executing a corporate sustainability strategy for Swire Properties’ global operations across Hong Kong, Chinese Mainland and U.S.A. portfolios. Through engaging stakeholders, setting targets and developing action plans, he leads a team to manage the full spectrum of the Company’s environmental, social and economic impact and to integrate ESG considerations into every facet of Swire Properties’ business.</p>

                  <p>In his role, Patrick works with senior leaders to establish the 1.5°C Science-Based Targets (SBT) to align with the pathway of limiting global warming to 1.5°C, and to reach net-zero emissions by 2050. He also worked on developing the Green Finance Framework for Swire Properties’ first US$500 million green bond and HK$500 million sustainability-linked loan, responding to emerging areas of sustainability such as Climate & Nature-related Financial Disclosures aligned with IFRS S2 & TNFD, embodied carbon emissions analysis for new development projects, and a strategic assessment of the climate-related physical and transition risks and opportunities under various future climate scenarios. In addition, he leads the team for the curation and execution of bespoke sustainability-focused tenant engagement programmes, such as the Green Performance Pledge, Green Kitchen Initiative & Green Retail Partnership, as well as supply chain ESG assessment & engagement programmes.</p>

                  <p>Patrick also led Swire Properties maintains its top listings on several global and regional sustainability indices and ratings, including the Dow Jones Sustainability World Index (ranked 1st globally in 2024), Global Real Estate Sustainability Benchmark (GRESB, Global Sector Leader in Mixed Use Developments for 8th consecutive year), and Hang Seng Corporate Sustainability Index (No. 1 in Hong Kong for 7th consecutive year).  </p>

                  <p>Patrick is a Chartered Environmentalist, a Chartered Member of the Chartered Institution of Water and Environmental Management (CIWEM) and a Certified Carbon Auditor Professional. He sits on the Board of Business Environment Council and Corporate Advisory Board of World Green Building Council, and is a Member to the Taskforce on Nature-related Financial Disclosures (TNFD), Science Based Targets initiative (SBTi) Expert Advisory Group for Building Sector, and a Steering Committee Member of Climate Change Business Forum of the Business Environment Council.</p>  
                  </ul>
                </div>
            </div>
          </div>
            <div className="col-xl-6 col-lg-5">
              <div className="speaker-single__right">
                <div className="speaker-single__img-box">
                  <div className="speaker-single__img">
                    <img
                      src="assets/images/speakers/patrick_ho.JPG"
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
