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
                  <span>Dr. William Yu</span></h2>
                  <h2 className="section-title__title" style={{fontSize:'100%'}}>
                  <p>Founder & Chief Executive Officer, World Green Organization</p>
                  </h2>
                </div>
                <div className="speaker-single__info-box">
                  <ul className="speaker-single__info-list list-unstyled" style={{fontSize:'100%'}}>
                  <p>Dr. William Yu is the Founder and Chief Executive Officer of World Green Organisation. Dr. Yu is an energy economist and climate professional by training and completed his PhD at the University of Cambridge. He earned an Executive MBA from the Thunderbird Global Management School, U.S. Dr. Yu also completed a Sustainable Finance Programme at Cambridge. Additionally, Dr. Yu is the scholarship recipient of the Executive Education in non-profit strategic management at the Harvard Business School. He had gained valuable regional management experience by working at the US multinationals and a financial banking institution.</p>

                  <p>Dr. Yu is ESBN Task Force Member, The Economic and Social Commission for Asia and the Pacific, the United Nations. Dr. Yu is a registered Consultant of the Asia Development Bank (ADB). In Hong Kong, he serves as member in Advisory Council on the Environment (ACE), Environment and Ecology Bureau and member in newly established Council for Carbon Neutrality and Sustainable Development, HKSAR Government. Dr. Yu belongs to Green Tech Fund Assessment Committee, EPD and Appeal Board Panel, Town Planning Board, HKSAR. He has been appointed as member of the Aviation Development and Three-runway System Advisory Committee (ADTAC) under the Transport and Housing Bureau.</p>

                  <p>Dr. Yu serves as Deputy Chairman of the Judging Panel of Smart Living Award, The Hong Kong ICT Awards. He has established an ESG-focused Accelerator Programme with Cyberport Hong Kong for its start-up. Dr. Yu also provides mentorship support to HKSTP (HK Science Park) incubation programme. He also coaches several green tech companies and serves as advisor of Smart City Sustainable Lighting, Federal Group Global Ltd located in Hong Kong Science and Technology Park, IP licensee and recipient of Geneva Invention Prize.</p>

                  <p>Dr. Yu is currently Director of Studies of University of Wales Trinity Saint David, supervising doctoral research on ESG disclosure quality of listed companies. His academic publication can be found in different international peer reviewed international journal. He is the Accredited Trainer, SDG Impact Standards, United Nations Development Program (UNDP) and Advisor on Certified ESG Planner (CEP) qualification. Dr. Yu also serves as the Chairman of the Judging Panel of BDO ESG Awards. He is BEAM Pro and the member of CA Expert Panel at BEAM Society (Green Building Standard in HK). Dr. Yu also held a research co-partner position with the Department of Electrical and Electronic Engineering of the University of Hong Kong on Smart City and served in the ICAPE ESG advisory board at The Hang Seng University. Dr. Yu had been the Adjunct Professor of several universities and currently the Faculty of Hong Kong Green Building Council, giving training to board level C-suites on Carbon Neutrality, Green Finance and Sustainability. Dr. Yu serves as Vice-chairman, Social Value Hong Kong (former HK Institute of Social Impact Analyst) and also serves as member in Sustainability Ethics Advisory Panel (SEAP), Ethics Committee of Hong Kong Institute of Certified Public Accountants(HKICPA).</p>

                  <p>Dr. Yu is currently member of Real Estate Working Group, Hong Kong Green Finance Association (HKGFA). He serves as Project Leader of Asian Corporate Coalition for Climate Change Resilience (A4CR) with Arup and Pricewaterhouse Coopers for corporate transition to Task Force on Climate-Related Financial Disclosures (TCFD). Dr. Yu advises investment banks and several public accounting firms on Forestry Carbon Credit Projects, Valuation of Carbon Assets and Carbon Trading. He is Certified China Carbon Trader of Shanghai Environment & Energy Exchange. Dr. Yu is Expert Member, Investment Committee of United Sustainable Limited Partnership Fund, and Sustainability Advisor, Asia Impact Innovation Fund, LPF. He is appointed as an Independent Non-Executive Director of a publicly listed company.</p>

                  <p>Dr. Yu is currently a Member of Stakeholder Engagement Advisory Panel, Offshore Windfarm Project in Lantau Island, The Hongkong Electric. He also sits on the Committee on Social Responsibility and Sustainable Development, The Chinese University of Hong Kong. Dr. Yu is the Chair of Peer Reviewer Committee of the GRI Standards of GRI 12 Coal Sector Standard and GRI 13 (Traditional Chinese). Dr. Yu was Head of Climate Programme of WWF Hong Kong. He also acted as Reviewer of Global Protocol for Community-Scale Greenhouse Gas Emission Inventories (GPC) (Land Sector Supplement), developed by WRI.</p>

                  <p>Dr. Yu was member of Stakeholder Advisory Group, The GHG Protocol Initiative, Calculation Guidance for Implementing GHG Protocol Corporate Value Chain (Scope 3), Accounting & Reporting Standard, the World Resources Institute & the World Business Council for Sustainable Development. He served as Project Leader & Co-author of Assessment Report - Climate Change & Event Risks (95 pages) to a Hong Kong's Gas Utility for its submission to Electrical & Mechanical Services Department, HKSAR Government and EPD. He was in Expert Panel of Low Carbon Standard Steering Committee, Shenzhen Market Supervision Administration of Shenzhen Municipality. Dr. Yu offered various professional training to local financial institutions, government departments, listed companies, regulator - SFC Hong Kong and Chinese environmental regulators and spoke at the United Nations, Economist, Bloomberg, Financial Times and international events.</p>
                  </ul>
                </div>
            </div>
          </div>
            <div className="col-xl-6 col-lg-5">
              <div className="speaker-single__right">
                <div className="speaker-single__img-box">
                  <div className="speaker-single__img">
                    <img
                      src="assets/images/speakers/william_yu.jpg"
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
