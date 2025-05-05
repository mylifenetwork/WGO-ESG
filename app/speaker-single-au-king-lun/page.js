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
                  <span>Dr. Au King Lun</span></h2>
                  <h2 className="section-title__title" style={{fontSize:'100%'}}>
                  <p>MH, Executive Director and Board Member, Financial Services Development Council (FSDC)</p>
                  </h2>
                </div>
                <div className="speaker-single__info-box">
                  <ul className="speaker-single__info-list list-unstyled" style={{fontSize:'100%'}}>
                  <p>Dr Au is Executive Director of Financial Services Development Council (FSDC). Prior to joining the FSDC, he was President of Value Partners Group Limited. Dr Au also served as CEO of Eastspring Investments (Hong Kong) Limited and CEO of BOCHK Asset Management Limited. He also held various senior management positions at other financial institutions including Baring, GMO and HSBC Global Asset Management.</p>

                  <p>Dr Au was named CEO of the Year in Hong Kong by Asia Asset Management in 2012 and 2014. He was awarded the Medal of Honor by the HKSAR Government in 2008 for his valuable contributions to the securities and asset management industry. He was also the Chairman of the Hong Kong Securities and Investment Institute (HKSI) from 2006 to 2008 and the Chairman of the Hong Kong Investment Funds Association in 2004/2005.</p>

                  <p>Dr Au is currently serving as a Council member of the Hong Kong Institute of Chartered Public Accountants, an Index Advisory Committee member of China Securities Index Co., Limited and an Adjunct Professor at the University of Hong Kong among other public services.</p>

                  <p>Dr Au is a CFA Charterholder and a Honorary Fellow of HKSI. He received his BA in Physics from the University of Oxford and PhD in Theoretical Particle Physics from the University of Durham.</p>  
                  </ul>
                </div>
            </div>
          </div>
            <div className="col-xl-6 col-lg-5">
              <div className="speaker-single__right">
                <div className="speaker-single__img-box">
                  <div className="speaker-single__img">
                    <img
                      src="assets/images/speakers/au_kl.png"
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
