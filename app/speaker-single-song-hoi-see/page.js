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
                  <span>Mr. Song Hoi-see</span></h2>
                  <h2 className="section-title__title" style={{fontSize:'100%'}}>
                  <p>Founder & Chief Executive Officer, Plaza Premium Group</p>
                  </h2>
                </div>
                <div className="speaker-single__info-box">
                  <ul className="speaker-single__info-list list-unstyled" style={{fontSize:'100%'}}>
                  <p>Song Hoi See, Founder and Chief Executive Officer of Plaza Premium Lounge Group, touches over 24 million passengers yearly. From its pioneering lounge in Hong Kong and Kuala Lumpur, the company has a global network with 14 diverse brands in over 600 + international and domestic airports worldwide across 150 countries. PPG has won over 100 accolades, demonstrating its unwavering commitment to service excellence. Notably, the group has received the prestigious "World's Best Independent Airport Lounge" award at the World Airline Awards by Skytrax for eight consecutive years from 2016 to 2024.</p>

                  <p>Under his leadership over the past 26 years, Plaza Premium Group (PPG) transformed the global airport hospitality industry and today, PPG is the world’s largest airport hospitality service provider embracing innovation and technology to offer 360° award-winning airport experiences including lounges, airport terminal hotels, dining concepts, concierge services, a membership program and a digital travel experience platform. The group has over 6,000 employees and over 80 nationalities working across its global network.</p>

                  <p>Mr. Song has also received numerous personal awards, including Ernst & Young's Entrepreneur of the Year and Master Entrepreneur of the Year 2018 Malaysia, Business Excellence Person of the Year at the Sin Chew Business Excellence Awards 2017, the DHL/SCMP Hong Kong Business Awards, and the Grand Winner of the Male Entrepreneur of the Year Award at the Star Outstanding Business Awards. In 2024, he was awarded the "Malaysia-China Outstanding Entrepreneur Lifetime Achievement Award," co-presented by KSI Strategic Institute for Asia Pacific, Malaysia-China Business Council, and China Daily.</p>

                  <p>In addition, Mr. Song is a founding member and the Vice Chairman of the Malaysian Chamber of Commerce (Hong Kong & Macau). </p>  
                  </ul>
                </div>
            </div>
          </div>
            <div className="col-xl-6 col-lg-5">
              <div className="speaker-single__right">
                <div className="speaker-single__img-box">
                  <div className="speaker-single__img">
                    <img
                      src="assets/images/speakers/song_hoisee.jpg"
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
