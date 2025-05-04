import Brand from "@/components/Brand";
import LogoLayout from "@/components/LogoLayout";
import PageBanner from "@/components/PageBanner";
import EnvensLayouts from "@/layouts/EnvensLayouts";
import Link from "next/link";

const temp = ['assets/images/sponsors/intertek.jpeg','assets/images/sponsors/crystal.jpeg','assets/images/sponsors/hkrita.jpeg', 'assets/images/sponsors/tuvrheinland.jpeg']

const page = () => {
  return (
    <EnvensLayouts>
      {
      // <Brand className="brand-three brand-five" />
      }
      <PageBanner pageName={"Exhibitors & Sponsors"} />


      <section className="about-two">
        <div className="container">
          <div className="row">
            <div className="col-xl-12 wow fadeInRight" data-wow-delay="300ms">
              <div className="about-two__right">
                <div className="section-title text-left">
                  <h1 className="section-title__title" style={{fontSize: '350%'}}>
                  Why <span> Sponsor </span> ESG Xchange 2025?
                  </h1>
                </div><br/>
                <h3 style={{fontWeight: '400'}}>
                ESG Xchange 2025 is the most anticipated global ESG summit in Hong Kong, uniting world leaders, regulators, and innovators to accelerate meaningful climate and sustainability action.
                </h3><br/><br/>
                <ul className="about-two__points list-unstyled" style={{fontSize: '18px', width: '70%', textDecoration: 'bold'}}>
                  <li>
                    <div className="icon">
                      <span className="icon-check-1" />
                    </div>
                    <p>Unparalleled Reach and Influence: 3,000+ high-level participants including senior government officials, UN representatives, global business leaders, and C-suite executives </p>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="icon-check-1" />
                    </div>
                    <p>Exclusive platform to build reputation, influence policy, and align with global ESG expectations</p>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="icon-check-1" />
                    </div>
                    <p>Access to Global ESG Frameworks &amp; Standards</p>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="icon-check-1" />
                    </div>
                    <p>Powerful Networking &amp; Diplomatic Engagement</p>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="icon-check-1" />
                    </div>
                    <p>Cutting-Edge Innovation &amp; Tech Showcase</p>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="icon-check-1" />
                    </div>
                    <p>ESG Tech Ventures Exhibition: AI, PropTech, Climate Analytics, Carbon Accounting</p>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="icon-check-1" />
                    </div>
                    <p>Workshops to explore digital ESG solutions and tools for future sustainability</p>
                  </li>
                </ul>
                <div className="about-two__btn-and-client-info">
                  <div className="about-two__btn-box">
                    <Link href="mailto:nickauyong@wgo.org" className="about-two__btn thm-btn-two">
                      <span className="fas fa-arrow-circle-right" />
                      Sponsorship Inquiry
                    </Link>
                  </div>
                </div><br/><br/><br/>
                <div className="section-title text-left" style={{backgroundColor: 'var(--envens-base)', padding: '3%'}}>
                  <h1 className="section-title__title" style={{fontSize: '200%', lineHeight: '150%', color: 'white', textAlign: 'center'}}><b>
                  Position your brand at the forefront of ESG innovation, policy, and impact — <br/> Sponsor ESG Xchange 2025 to lead the future of sustainability.
                  </b></h1>
                </div> <br/><br/>
                <div className="section-title text-left" id="2025">
                  <h1 className="section-title__title" style={{fontSize: '350%'}}>
                   <span> 2025 </span> Sponsors
                  </h1>
                </div><br/>
                
                <img src="assets/images/sponsors/all.png" alt="" style={{maxWidth:'1200px'}}/>
                {/*<div className="row masonary-layout">
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                    <h3 style={{fontWeight: '400', textAlign: 'center', marginTop:'10%'}}>
                      Supreme Diamond 
                      <br/>
                      <img src="assets/images/sponsors/boc_life.png" alt="" style={{maxWidth:'500px', marginTop:'7%'}}/>
                      <img src="assets/images/sponsors/crystal.jpeg" alt="" style={{maxWidth:'500px', marginTop:'7%'}}/>
                    </h3>
                  </div>

                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                    <h3 style={{fontWeight: '400', textAlign: 'center', marginTop:'10%'}}>
                      Double Diamond
                      <br/>
                      <img src="assets/images/sponsors/lifewood.png" alt="" style={{width:'35%', margin: '5%', marginTop:'7%'}}/>
                      <img src="assets/images/sponsors/kings_flair.png" alt="" style={{width:'35%', margin: '5%', marginTop:'7%', transform:'scale(0.9)'}}/>
                      <br/>
                      <img src="assets/images/sponsors/A4CR.png" alt="" style={{width:'35%', margin: '5%', marginTop:'0%', transform:'scale(0.8)'}}/>
                    </h3>
                  </div>

                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                    <h3 style={{fontWeight: '400', textAlign: 'center', marginTop:'20%'}}>
                      Platinum 
                      <br/>
                      <img src="assets/images/sponsors/henderson.png" alt="" style={{width:'35%', margin: '5%', marginTop:'7%'}}/>
                      <img src="assets/images/sponsors/hkrita.jpeg" alt="" style={{width:'35%', margin: '5%', marginTop:'7%', transform:'scale(0.9)'}}/>
                      <br/>
                      <img src="assets/images/sponsors/intertek.png" alt="" style={{width:'35%', margin: '5%', marginTop:'0%', transform:'scale(0.8)'}}/>
                      <img src="assets/images/sponsors/swire.png" alt="" style={{width:'35%', margin: '5%', marginTop:'0%'}}/>
                      <br/>
                      <img src="assets/images/sponsors/lasense.png" alt="" style={{width:'35%', margin: '5%', marginTop:'0%'}}/>
                    </h3>
                  </div>

                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                    <h3 style={{fontWeight: '400', textAlign: 'center', marginTop:'20%'}}>
                      Gold 
                      <br/>
                      <img src="assets/images/sponsors/towngas.png" alt="" style={{width:'35%', margin: '5%', marginTop:'15%'}}/>
                      <img src="assets/images/sponsors/cantabrigian.png" alt="" style={{width:'35%', margin: '5%', marginTop:'15%', transform:'scale(1.1)'}}/>
                      <br/>
                      <img src="assets/images/sponsors/guzhan.png" alt="" style={{width:'35%', margin: '5%', marginTop:'3%', transform:'scale(1.2)'}}/>
                      <img src="assets/images/sponsors/greenhubs.png" alt="" style={{width:'35%', margin: '5%', marginTop:'3%'}}/>
                      <br/>
                      <img src="assets/images/sponsors/HPE_Synnex.png" alt="" style={{width:'35%', margin: '5%', marginTop:'-5%', transform:'scale(1.5)'}}/>
                      <img src="assets/images/sponsors/kinsang.png" alt="" style={{width:'35%', margin: '5%', marginTop:'-5%', transform:'scale(1.1)'}}/>
                      <br/>
                      <img src="assets/images/sponsors/contex.png" alt="" style={{width:'35%', margin: '5%', marginTop:'0%', transform:'scale(1.2)'}}/>
                      <img src="assets/images/sponsors/jibpool.png" alt="" style={{width:'35%', margin: '5%', marginTop:'0%', transform:'scale(1.0)'}}/>
                      <br/>
                      <img src="assets/images/sponsors/milliontech.png" alt="" style={{width:'35%', margin: '5%', marginTop:'0%', transform:'scale(1.2)'}}/>
                      <img src="assets/images/sponsors/solution_expert.png" alt="" style={{width:'35%', margin: '5%', marginTop:'0%', transform:'scale(1.1)'}}/>
                      <br/>
                      <img src="assets/images/sponsors/auki.png" alt="" style={{width:'35%', margin: '5%', marginTop:'0%', transform:'scale(1.2)'}}/>
                      <img src="assets/images/sponsors/visidr.webp" alt="" style={{width:'35%', margin: '5%', marginTop:'0%', transform:'scale(1.0)'}}/>
                      </h3>
                  </div>

                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                    <h3 style={{fontWeight: '400', textAlign: 'center', marginTop:'20%'}}>
                      Silver 
                      <br/>
                      <img src="assets/images/sponsors/tuvrheinland.jpeg" alt="" style={{width:'35%', margin: '5%', marginTop:'7%'}}/>
                      <img src="assets/images/sponsors/riskory.png" alt="" style={{width:'35%', margin: '5%', marginTop:'7%'}}/>
                      <br/>
                      <img src="assets/images/sponsors/baidu.png" alt="" style={{width:'35%', margin: '5%', marginTop:'7%'}}/>
                      <img src="assets/images/sponsors/jane_goodalls_roots.jpeg" alt="" style={{width:'35%', margin: '5%', marginTop:'7%', transform:'scale(1.2)'}}/>
                      <br/>
                      <img src="assets/images/sponsors/spark_men.png" alt="" style={{width:'35%', margin: '5%', marginTop:'7%'}}/>                    
                    </h3>
                  </div>

                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                    <h3 style={{fontWeight: '400', textAlign: 'center', marginTop:'20%'}}>
                      Bronze 
                      <br/>
                      <img src="assets/images/sponsors/hkhs.jpg" alt="" style={{width:'35%', margin: '5%', marginTop:'7%'}}/>
                      <img src="assets/images/sponsors/greenpoint.png" alt="" style={{width:'35%', margin: '5%', marginTop:'7%'}}/>
                      <br/>
                      <img src="assets/images/sponsors/nerocean.jpg" alt="" style={{width:'35%', margin: '5%', marginTop:'7%'}}/>
                      <img src="assets/images/sponsors/onechain.png" alt="" style={{width:'35%', margin: '5%', marginTop:'7%'}}/>
                      <br/>
                    </h3>
                  </div>
                </div>*/}
                <div className="section-title text-left" id="2025">
                  <h1 className="section-title__title" style={{fontSize: '350%'}}>
                   <span> 2025 </span> Exhibitors
                   <img src='assets/images/exhibitors/1.png' style={{width: '100vw', paddingTop: '90px'}}/>
                    </h1>
                </div><br/>

                
              </div>
            </div>
          </div>
        </div>
      </section>
    </EnvensLayouts>
  );
};
export default page;
