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
                  <span>Mr. Dato’ Shah Redza Hussein</span></h2>
                  <h2 className="section-title__title" style={{fontSize:'100%'}}>
                  <p>Chief Executive Officer, Malaysia Forest Fund</p>
                  </h2>
                </div>
                <div className="speaker-single__info-box">
                  <ul className="speaker-single__info-list list-unstyled" style={{fontSize:'100%'}}>
                  <p>Shah Redza Hussein is an economist turned conservationist. He has been involved in nature conservation and environmental protection for almost 30 years. He left the corporate sector in 1997 to join WWF Malaysia to contribute directly to nature conservation. Other notable positions held was, the Executive Director of the Malaysian Nature Society (MNS), the oldest and largest member-based nature NGO in the country and Special Project Director in Malaysia with Earth And Sea Observation System (EASOS) a UK Space Agency project partner specialized in utilizing satellite and technology in monitoring, protecting and disaster forecasting of our natural environment. Shah Redza was the Director of the Perak State Parks Corporation (PSPC), mandated to head and manage Protected Areas in the State of Perak which includes the protection, conservation and enforcement of the Royal Belum State Park, the conservation islands of the Pulau Sembilan State Park, the lowland wetlands of Kinta Nature Park and to manage the Kinta Valley National Geopark. Leaving PSPC, he was appointed the CEO of Enggang Management Services Sdn. Bhd. a private entity formed to promote and establish new landscape as Protected Areas, site-based biodiversity protection, protected area management and developing programs for community-based conservation with special focus on active actions for the recovery and conservation of the Malayan Tiger. He was responsible in the setting up and operationalizing the Al Sultan Abdullah Royal Tiger Reserve in the greater Taman Negara forest complex, the first tiger reserve in Malaysia.</p>

                  <p>Shah Redza is currently the CEO of the Malaysia Forest Fund (MFF), a federal government agency tasked to develop and implement instruments and mechanisms to fill the financial gap for forest and biodiversity funding to optimise their protection. Two key instruments being developed and rolled out are the Forest Conservation Certification (FCC) and the Forest Carbon Offset (FCO). MFF also studies other instruments for new and innovative nature-based financing, especially in areas of intact forest and beyond additionalities.</p>

                  <p>He is involved in various NGO and SCO work especially in areas of conservation & environmental protection, indigenous community development, sustainability & social equity and youth empowerment. Shah Redza was awarded the 2020 Global Winner of the Dr Rimington Award for Tiger Conservation by the WWF Tiger Alive programme based in the United Kingdom. He has been appointed to the International Executive Committee of Conservation Assured Tiger Standards (CA|TS), a global accreditation organisation for tiger protection and conservation. A member of the IUCN-World Commission on Protected Areas, he is a current Fellow of the Faculty of Science, University Putra Malaysia and sits on board of the Perak State Parks Corporation.</p>  
                  </ul>
                </div>
            </div>
          </div>
            <div className="col-xl-6 col-lg-5">
              <div className="speaker-single__right">
                <div className="speaker-single__img-box">
                  <div className="speaker-single__img">
                    <img
                      src="assets/images/speakers/dato.jpg"
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
