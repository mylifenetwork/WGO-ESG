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
                  <span>Dr. Kerr XU</span></h2>
                  <h2 className="section-title__title" style={{fontSize:'100%'}}>
                  <p>Chief Executive Officer & Co-founder, LaSense Technology Limited</p>
                  </h2>
                </div>
                <div className="speaker-single__info-box">
                  <ul className="speaker-single__info-list list-unstyled" style={{fontSize:'100%'}}>
                  <p>Dr. Kerr Xu is the Founder and CEO of LaSense Technology Limited. He holds a Ph.D. from The Chinese University of Hong Kong and currently serves as a Committee Member of the Nanshan Youth Federation in Shenzhen. He has been recognized as a High-Caliber Overseas Talent by Guangdong Province and named a Hurun U30 China Startup Pioneer. He is also a member of the Laser Spectroscopy Subcommittee of the Chinese Society for Optical Engineering and was selected for the inaugural “Sci-Tech China U30” by the China Association for Science and Technology.</p>

                  <p>Dr. Xu launched the LaSense startup initiative in 2019. He has won multiple top-tier entrepreneurship awards, including the Champion of the Hong Kong Student Innovation and Entrepreneurship Competition, the National Gold Medal in the Challenge Cup, the Gold Prize of the Hong Kong ICT Awards, the First Prize of the Shenzhen Dreamcatcher Entrepreneurship Competition, and the Championship of the Peking University HSBC–Cambridge Judge Entrepreneurship Challenge. He has also served as an external mentor for innovation and entrepreneurship competitions at institutions including CUHK, BIT, and SZPT.</p>

                  <p>LaSense Technology is a national high-tech enterprise specializing in laser spectroscopy sensing. With R&D and manufacturing bases in Qianhai, Shenzhen and the Hong Kong Science Park, the company develops and produces high-precision laser gas analyzers and remote sensing instruments. LaSense has been named one of Deloitte’s “High-Tech, High-Growth” companies in the Greater Bay Area and ranked among China’s Top 100 Most Investable Companies. In response to China’s dual carbon goals (carbon peaking and carbon neutrality), LaSense developed the country’s first batch of carbon analysis instruments meeting WMO international standards and delivered the first domestically produced laser hydrogen analyzer. Over the past five years, LaSense has successfully applied laser spectroscopy technology across sectors including electric power, petrochemicals, hydrogen energy, and clinical diagnostics.</p>  
                  </ul>
                </div>
            </div>
          </div>
            <div className="col-xl-6 col-lg-5">
              <div className="speaker-single__right">
                <div className="speaker-single__img-box">
                  <div className="speaker-single__img">
                    <img
                      src="assets/images/speakers/kerr_xu.jpg"
                      alt
                    />
                  </div>
                  <div className="speaker-single__img-shape" />
                  <div className="speaker-single__share-and-social">
                    <div className="speaker-single__share">
                      <a href="">
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
