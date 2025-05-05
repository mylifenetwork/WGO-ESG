import { EventSchedule2 } from "@/components/EventSchedule";
import PageBanner from "@/components/PageBanner";
import TestimonialsSlider from "@/components/TestimonialsSlider";
import EnvensLayouts from "@/layouts/EnvensLayouts";
import Link from "next/link";
const page = () => {
  return (
    <EnvensLayouts>
      <PageBanner pageName={"2025 Summit"} />

      <section className="join-event" id='organiser'>
        <div className="container">
          <div className="join-event__title-and-btn-box">
            <div className="section-title text-left">

              <h2 className="section-title__title" style={{fontSize:'350%'}}>
                <span>2025 Summit</span>
              </h2>
            </div>
            <div className="section-title text-left">

              <h2 className="section-title__title">
              <span>1</span> Main Stage / <span>1</span> Pavilion Stage / <br/><span>40+</span> Sessions / <span>100+</span> Speakers
              </h2>
            </div>
          </div>
        </div>
              <div className="about-two__btn-box" style={{textAlign:'center'}}>
                    <Link href="https://drive.google.com/file/d/1Nl52fwT_9vwCv9WYzPrFfaZJRPJwLIw-/view?usp=sharing" className="about-two__btn thm-btn-two">
                      <span className="fas fa-arrow-circle-right" />
                      Explore Our Brochure
                    </Link>
                  </div>
      </section>
      <EventSchedule2 />
    </EnvensLayouts>
  );
};
export default page;
