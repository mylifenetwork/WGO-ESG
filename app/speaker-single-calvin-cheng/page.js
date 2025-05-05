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
                  <span>Mr. Calvin Cheng</span></h2>
                  <h2 className="section-title__title" style={{fontSize:'100%'}}>
                  <p>Founder & Chief Executive Officer, Wizpresso</p>
                  </h2>
                </div>
                <div className="speaker-single__info-box">
                  <ul className="speaker-single__info-list list-unstyled" style={{fontSize:'100%'}}>
                  <p>Calvin is the founder and CEO of Wizpresso, a leading technology company that builds AI digital agents for finance. Wizpresso offers market intelligence, regulatory reporting, and knowledge management platforms underpinned by cutting-edge technologies. Wizpresso has won numerous accolades over the years, including the HKMA Innovation Gold Award, APICTA 2023 AI of the Year Awards, Maker in China 2022 Champion, CUHK Corporate Innovation Index 2024 (3-stars), HKICT Grand Fintech Award 2021, EPIC 2021 Fintech Champion, IFTA Fintech Awards 2021 and 2020, and etnet’s Fintech Awards 2020 and 2019.</p>

                  <p>Calvin has 10+ years of experience in investment banking and product development. He previously worked in Global Banking at HSBC. </p>

                  <p>Calvin is passionate about driving innovation and supporting education. Calvin is the 1st Laureate of the BOCHK Science & Technology Innovation Prize. Calvin is also a visiting Lecturer in Fintech at HKU Space and a frequent guest lecturer at HKU and CUHK. He is a mentor at HKU Business School, and a steering committee member of CUHK’s Corporate Innovation Index (CII). Calvin is a founding fellow at the Data Literacy Association (DaLa) and an honorary treasurer at the Institute of Financial Technologists Asia (IFTA). He has been awarded the Certificate of Achievement by the Consul General of Canada in Hong Kong and Macao. Calvin holds an Honors Business Administration (HBA) degree with distinction from Ivey Business School. Calvin is a CFA charterholder.</p>
                  </ul>
                </div>
            </div>
          </div>
            <div className="col-xl-6 col-lg-5">
              <div className="speaker-single__right">
                <div className="speaker-single__img-box">
                  <div className="speaker-single__img">
                    <img
                      src="assets/images/speakers/calvin_cheng.jpeg"
                      alt
                    />
                  </div>
                  <div className="speaker-single__img-shape" />
                  <div className="speaker-single__share-and-social">
                    <div className="speaker-single__share">
                      <a href="https://www.linkedin.com/in/chengcalvin/">
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
