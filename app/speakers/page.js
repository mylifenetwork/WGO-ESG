import PageBanner from "@/components/PageBanner";
import Team from "@/components/Team";
import EnvensLayouts from "@/layouts/EnvensLayouts";
import Link from "next/link";
const page = () => {
  return (
    <EnvensLayouts>
      <PageBanner pageName={"Speakers"} />
      <section className="speaker-page">
        <div className="container">
          <div className="row">
            {/*Speaker 1 Page Single Start*/}
            <div
              className="col-xl-4 col-lg-4 wow fadeInLeft"
              data-wow-delay="100ms"
            >
              <div className="speaker-page__single">
                <div className="speaker-page__img-box">
                  <div className="speaker-page__img">
                    <a href=""><img src="assets/images/speakers/abduljabbar_abdulkarim.png" style={{height: '418px'}} alt /></a>
                  </div>
                  <div className="speaker-page__img-shape" />
                </div>
                <div className="speaker-page__content" style={{fontSize:'85%'}}>
                  <h3>
                    <Link href="">Mr. Abduljabbar Abdulkarim</Link>
                  </h3>
                  <p>Chief Executive Officer</p>
                  <p>Bahrain Green Energy</p>
                </div>
              </div>
            </div>
            {/*Speaker 1 Page Single End*/}
            {/*Speaker 2 Page Single Start*/}
            <div
              className="col-xl-4 col-lg-4 wow fadeInLeft"
              data-wow-delay="100ms"
            >
              <div className="speaker-page__single">
                <div className="speaker-page__img-box">
                  <div className="speaker-page__img">
                    <a href=""><img src="assets/images/speakers/albert_oung.jpg" style={{height: '418px'}} alt /></a>
                  </div>
                  <div className="speaker-page__img-shape" />
                </div>
                <div className="speaker-page__content" style={{fontSize:'85%'}}>
                  <h3>
                    <Link href="">Mr. Albert Oung</Link>
                  </h3>
                  <p>President</p>
                  <p>World Green Organisation</p>
                </div>
              </div>
            </div>
            {/*Speaker 2 Page Single End*/}
            {/*Speaker 3 Page Single Start*/}
            <div
              className="col-xl-4 col-lg-4 wow fadeInLeft"
              data-wow-delay="100ms"
            >
              <div className="speaker-page__single">
                <div className="speaker-page__img-box">
                  <div className="speaker-page__img">
                    <a href="/speaker-single-alex-cheung"><img src="assets/images/speakers/kin_sang_cheung.jpg" style={{height: '418px'}} alt /></a>
                  </div>
                  <div className="speaker-page__img-shape" />
                </div>
                <div className="speaker-page__content" style={{fontSize:'85%'}}>
                  <h3>
                    <Link href="/speaker-single-alex-cheung">Mr. Alex Cheung</Link>
                  </h3>
                  <p>Chairman of the Board of Governors</p>
                  <p>World Green Organisation</p>
                </div>
              </div>
            </div>
            {/*Speaker 3 Page Single End*/}
            {/*Speaker 4 Page Single Start*/}
            <div
              className="col-xl-4 col-lg-4 wow fadeInLeft"
              data-wow-delay="100ms"
            >
              <div className="speaker-page__single">
                <div className="speaker-page__img-box">
                  <div className="speaker-page__img">
                    <a href="/speaker-single-dr-allinnettes-go-adigue"><img src="assets/images/speakers/allinnettes_go_adigue.jpg" style={{height: '418px'}} alt /></a>
                  </div>
                  <div className="speaker-page__img-shape" />
                </div>
                <div className="speaker-page__content" style={{fontSize:'85%'}}>
                  <h3>
                    <Link href="/speaker-single-dr-allinnettes-go-adigue">Dr. Allinnettes Go Adigue</Link>
                  </h3>
                  <p>Head of ASEAN Regional Hub</p>
                  <p>Global Reporting Initiative</p>
                </div>
              </div>
            </div>
            {/*Speaker Page 4 Single End*/}
            {/*Speaker 5 Page Single Start*/}
            <div
              className="col-xl-4 col-lg-4 wow fadeInLeft"
              data-wow-delay="100ms"
            >
              <div className="speaker-page__single">
                <div className="speaker-page__img-box">
                  <div className="speaker-page__img">
                    <a href="/speaker-single-amos-cheng"><img src="assets/images/speakers/amos_cheng.jpeg" style={{height: '418px'}} alt /></a>
                  </div>
                  <div className="speaker-page__img-shape" />
                </div>
                <div className="speaker-page__content" style={{fontSize:'85%'}}>
                  <h3>
                    <Link href="/speaker-single-amos-cheng">Mr. Amos Cheng</Link>
                  </h3>
                  <p>Founder and President</p>
                  <p>Eco-Humanitarian Advocate (EHA)</p>
                </div>
              </div>
            </div>
            {/*Speaker Page 5 Single End*/}
            {/*Speaker 6 Page Single Start*/}
            <div
              className="col-xl-4 col-lg-4 wow fadeInLeft"
              data-wow-delay="100ms"
            >
              <div className="speaker-page__single">
                <div className="speaker-page__img-box">
                  <div className="speaker-page__img">
                    <a href="/speaker-single-au-king-lun"><img src="assets/images/speakers/au_kl.png" style={{height: '418px'}} alt /></a>
                  </div>
                  <div className="speaker-page__img-shape" />
                </div>
                <div className="speaker-page__content" style={{fontSize:'85%'}}>
                  <h3>
                    <Link href="/speaker-single-au-king-lun">Dr. Au King Lun</Link>
                  </h3>
                  <p>MH, Executive Director and Board Member</p>
                  <p>Financial Services Development Council (FSDC)</p>
                </div>
              </div>
            </div>
            {/*Speaker Page 6 Single End*/}
            {/*Speaker 7 Page Single Start*/}
            <div
              className="col-xl-4 col-lg-4 wow fadeInLeft"
              data-wow-delay="100ms"
            >
              <div className="speaker-page__single">
                <div className="speaker-page__img-box">
                  <div className="speaker-page__img">
                    <a href="/speaker-single-bing-leng"><img src="assets/images/speakers/bing_leng.jpg" style={{height: '418px'}} alt /></a>
                  </div>
                  <div className="speaker-page__img-shape" />
                </div>
                <div className="speaker-page__content" style={{fontSize:'85%'}}>
                  <h3>
                    <Link href="/speaker-single-bing-leng">Dr. Bing Leng</Link>
                  </h3>
                  <p>Member</p>
                  <p>International Sustainability Standards Board (ISSB)</p>
                </div>
              </div>
            </div>
            {/*Speaker Page 7 Single End*/}
            {/*Speaker 8 Page Single Start*/}
            <div
              className="col-xl-4 col-lg-4 wow fadeInLeft"
              data-wow-delay="100ms"
            >
              <div className="speaker-page__single">
                <div className="speaker-page__img-box">
                  <div className="speaker-page__img">
                    <a href="/speaker-single-calvin-cheng"><img src="assets/images/speakers/calvin_cheng.jpeg" style={{height: '418px'}} alt /></a>
                  </div>
                  <div className="speaker-page__img-shape" />
                </div>
                <div className="speaker-page__content" style={{fontSize:'85%'}}>
                  <h3>
                    <Link href="/speaker-single-calvin-cheng">Mr. Calvin Cheng</Link>
                  </h3>
                  <p>Founder & Chief Executive Officer</p>
                  <p>Wizpresso</p>
                </div>
              </div>
            </div>
            {/*Speaker Page 8 Single End*/}
            {/*Speaker Page 9 Single Start*/}
            <div
              className="col-xl-4 col-lg-4 wow fadeInLeft"
              data-wow-delay="100ms"
            >
              <div className="speaker-page__single">
                <div className="speaker-page__img-box">
                  <div className="speaker-page__img">
                    <a href="/speaker-single-candice-dott"><img src="assets/images/speakers/candice_dott.jpg" style={{height: '418px'}} alt /></a>
                  </div>
                  <div className="speaker-page__img-shape" />
                </div>
                <div className="speaker-page__content" style={{fontSize:'85%'}}>
                  <h3>
                    <Link href="/speaker-single-candice-dott">Ms. Candice Dott</Link>
                  </h3>
                  <p>Director of Market Engagement</p>
                  <p>TNFD</p>
                </div>
              </div>
            </div>
            {/*Speaker Page 9 Single End*/}
            {/*Speaker Page 10 Single Start*/}
            <div
              className="col-xl-4 col-lg-4 wow fadeInLeft"
              data-wow-delay="100ms"
            >
              <div className="speaker-page__single">
                <div className="speaker-page__img-box">
                  <div className="speaker-page__img">
                    <a href=""><img src="assets/images/speakers/christopher_chao.jpg" style={{height: '418px'}} alt /></a>
                  </div>
                  <div className="speaker-page__img-shape" />
                </div>
                <div className="speaker-page__content" style={{fontSize:'85%'}}>
                  <h3>
                    <Link href="">Prof. Christopher Chao</Link>
                  </h3>
                  <p>Vice President</p>
                  <p>The Hong Kong Polytechnic University (PolyU)</p>
                </div>
              </div>
            </div>
            {/*Speaker Page 10 Single End*/}
            {/*Speaker Page 11 Single Start*/}
            <div
              className="col-xl-4 col-lg-4 wow fadeInLeft"
              data-wow-delay="100ms"
            >
              <div className="speaker-page__single">
                <div className="speaker-page__img-box">
                  <div className="speaker-page__img">
                    <a href="/speaker-single-cloris-cai"><img src="assets/images/speakers/cloris_cai.jpg" style={{height: '418px'}} alt /></a>
                  </div>
                  <div className="speaker-page__img-shape" />
                </div>
                <div className="speaker-page__content" style={{fontSize:'85%'}}>
                  <h3>
                    <Link href="/speaker-single-cloris-cai">Ms. Cloris Cai</Link>
                  </h3>
                  <p>Sustainability Solutions Manager</p>
                  <p>Green Initiatives</p>
                  <p>Intertek China</p>
                </div>
              </div>
            </div>
            {/*Speaker Page 11 Single End*/}
            {/*Speaker Page 12 Single Start*/}
            <div
              className="col-xl-4 col-lg-4 wow fadeInLeft"
              data-wow-delay="100ms"
            >
              <div className="speaker-page__single">
                <div className="speaker-page__img-box">
                  <div className="speaker-page__img">
                    <a href="/speaker-single-cyrus-cheung"><img src="assets/images/speakers/cyrus_cheung.jpg" style={{height: '418px'}} alt /></a>
                  </div>
                  <div className="speaker-page__img-shape" />
                </div>
                <div className="speaker-page__content" style={{fontSize:'85%'}}>
                  <h3>
                    <Link href="/speaker-single-cyrus-cheung">Mr. Cyrus Cheung</Link>
                  </h3>
                  <p>Partner, PwC – Sustainability Consulting & Chairperson of Sustainability Committee</p>
                  <p>Hong Kong Institute of Certified Public Accountants</p>
                </div>
              </div>
            </div>
            {/*Speaker Page 12 Single End*/}
            {/*Speaker Page 13 Single Start*/}
            <div
              className="col-xl-4 col-lg-4 wow fadeInLeft"
              data-wow-delay="100ms"
            >
              <div className="speaker-page__single">
                <div className="speaker-page__img-box">
                  <div className="speaker-page__img">
                    <a href="/speaker-single-dato"><img src="assets/images/speakers/dato.jpg" style={{height: '418px'}} alt /></a>
                  </div>
                  <div className="speaker-page__img-shape" />
                </div>
                <div className="speaker-page__content" style={{fontSize:'85%'}}>
                  <h3>
                    <Link href="/speaker-single-dato">Mr. Dato’ Shah Redza Hussein</Link>
                  </h3>
                  <p>Chief Executive Officer</p>
                  <p>Malaysia Forest Fund</p>
                </div>
              </div>
            </div>
            {/*Speaker Page 13 Single End*/}
            {/*Speaker Page 14 Single Start*/}
            <div
              className="col-xl-4 col-lg-4 wow fadeInLeft"
              data-wow-delay="100ms"
            >
              <div className="speaker-page__single">
                <div className="speaker-page__img-box">
                  <div className="speaker-page__img">
                    <a href="/speaker-single-dennis-wan"><img src="assets/images/speakers/dennis_wan.jpg" style={{height: '418px'}} alt /></a>
                  </div>
                  <div className="speaker-page__img-shape" />
                </div>
                <div className="speaker-page__content" style={{fontSize:'85%'}}>
                  <h3>
                    <Link href="/speaker-single-dennis-wan">Mr. Dennis Wan</Link>
                  </h3>
                  <p>Head of Capital Markets (APAC)</p>
                  <p>CDP</p>
                </div>
              </div>
            </div>
            {/*Speaker Page 14 Single End*/}
            {/*Speaker Page 15 Single Start*/}
            <div
              className="col-xl-4 col-lg-4 wow fadeInLeft"
              data-wow-delay="100ms"
            >
              <div className="speaker-page__single">
                <div className="speaker-page__img-box">
                  <div className="speaker-page__img">
                    <a href="/speaker-single-diane-wong"><img src="assets/images/speakers/diane_wong.jpg" style={{height: '418px'}} alt /></a>
                  </div>
                  <div className="speaker-page__img-shape" />
                </div>
                <div className="speaker-page__content" style={{fontSize:'85%'}}>
                  <h3>
                    <Link href="/speaker-single-diane-wong">Miss Diane Wong Shuk Han</Link>
                  </h3>
                  <p>JP, Under Secy for Env & Ecology</p>
                  <p>Environment and Ecology Bureau</p>
                </div>
              </div>
            </div>
            {/*Speaker Page 15 Single End*/}
            {/*Speaker Page 16 Single Start*/}
            <div
              className="col-xl-4 col-lg-4 wow fadeInLeft"
              data-wow-delay="100ms"
            >
              <div className="speaker-page__single">
                <div className="speaker-page__img-box">
                  <div className="speaker-page__img">
                    <a href="/speaker-single-felix-lam"><img src="assets/images/speakers/felix_lam.png" style={{height: '418px'}} alt /></a>
                  </div>
                  <div className="speaker-page__img-shape" />
                </div>
                <div className="speaker-page__content" style={{fontSize:'85%'}}>
                  <h3>
                    <Link href="/speaker-single-felix-lam">Mr. Felix Lam</Link>
                  </h3>
                  <p>Chairman of Communication Committee</p>
                  <p>The Institute of Purchasing and Supply of Hong Kong (IPSHK)</p>
                </div>
              </div>
            </div>
            {/*Speaker Page 16 Single End*/}
            {/*Speaker Page 17 Single Start*/}
            <div
              className="col-xl-4 col-lg-4 wow fadeInLeft"
              data-wow-delay="100ms"
            >
              <div className="speaker-page__single">
                <div className="speaker-page__img-box">
                  <div className="speaker-page__img">
                    <a href="/speaker-single-felix-lee"><img src="assets/images/speakers/felix_lee.jpg" style={{height: '418px'}} alt /></a>
                  </div>
                  <div className="speaker-page__img-shape" />
                </div>
                <div className="speaker-page__content" style={{fontSize:'85%'}}>
                  <h3>
                    <Link href="/speaker-single-felix-lee">Mr. Felix Lee</Link>
                  </h3>
                  <p>Head</p>
                  <p>Group Corporate Affairs & Sustainability</p>
                  <p>The Hong Kong and China Gas Company Ltd (Towngas)</p>
                </div>
              </div>
            </div>
            {/*Speaker Page 17 Single End*/}
            {/*Speaker Page 18 Single Start*/}
            <div
              className="col-xl-4 col-lg-4 wow fadeInLeft"
              data-wow-delay="100ms"
            >
              <div className="speaker-page__single">
                <div className="speaker-page__img-box">
                  <div className="speaker-page__img">
                    <a href="/speaker-single-gareth-williams"><img src="assets/images/speakers/gareth_williams.JPG" style={{height: '418px'}} alt /></a>
                  </div>
                  <div className="speaker-page__img-shape" />
                </div>
                <div className="speaker-page__content" style={{fontSize:'85%'}}>
                  <h3>
                    <Link href="/speaker-single-gareth-williams">Mr. Gareth Williams</Link>
                  </h3>
                  <p>Australia’s Consul-General</p>
                  <p>Hong Kong and Macau</p>
                </div>
              </div>
            </div>
            {/*Speaker Page 18 Single End*/}
            {/*Speaker Page 19 Single Start*/}
            <div
              className="col-xl-4 col-lg-4 wow fadeInLeft"
              data-wow-delay="100ms"
            >
              <div className="speaker-page__single">
                <div className="speaker-page__img-box">
                  <div className="speaker-page__img">
                    <a href="/speaker-single-gloria-yao"><img src="assets/images/speakers/gloria_yao.jpg" style={{height: '418px'}} alt /></a>
                  </div>
                  <div className="speaker-page__img-shape" />
                </div>
                <div className="speaker-page__content" style={{fontSize:'85%'}}>
                  <h3>
                    <Link href="/speaker-single-gloria-yao">Dr. Gloria Lei Yao</Link>
                  </h3>
                  <p>Director, Project Development</p>
                  <p>The Hong Kong Research Institute of Textiles and Apparel</p>
                </div>
              </div>
            </div>
            {/*Speaker Page 19 Single End*/}
            {/*Speaker Page 20 Single Start*/}
            <div
              className="col-xl-4 col-lg-4 wow fadeInLeft"
              data-wow-delay="100ms"
            >
              <div className="speaker-page__single">
                <div className="speaker-page__img-box">
                  <div className="speaker-page__img">
                    <a href="/speaker-single-guo-peiyuan"><img src="assets/images/speakers/guo_peiyuan.jpg" style={{height: '418px'}} alt /></a>
                  </div>
                  <div className="speaker-page__img-shape" />
                </div>
                <div className="speaker-page__content" style={{fontSize:'85%'}}>
                  <h3>
                    <Link href="/speaker-single-guo-peiyuan">Dr. Guo Peiyuan</Link>
                  </h3>
                  <p>Advisor</p>
                  <p>United Nations Environment Programme Finance Initiative (UNEP FI)</p>
                </div>
              </div>
            </div>
            {/*Speaker Page 20 Single End*/}
            {/*Speaker Page 21 Single Start*/}
             <div
              className="col-xl-4 col-lg-4 wow fadeInLeft"
              data-wow-delay="100ms"
            >
              <div className="speaker-page__single">
                <div className="speaker-page__img-box">
                  <div className="speaker-page__img">
                    <a href=""><img src="assets/images/speakers/harvey_rouse.jpg" style={{height: '418px'}} alt /></a>
                  </div>
                  <div className="speaker-page__img-shape" />
                </div>
                <div className="speaker-page__content" style={{fontSize:'85%'}}>
                  <h3>
                    <Link href="">Mr. Harvey Rouse</Link>
                  </h3>
                  <p>Head</p>
                  <p>European Union Office to Hong Kong and Macao</p>
                </div>
              </div>
            </div>
            {/*Speaker Page 21 Single End*/}
            {/*Speaker Page 22 Single Start*/}
            <div
              className="col-xl-4 col-lg-4 wow fadeInLeft"
              data-wow-delay="100ms"
            >
              <div className="speaker-page__single">
                <div className="speaker-page__img-box">
                  <div className="speaker-page__img">
                    <a href=""><img src="assets/images/speakers/henry_li.jpg" style={{height: '418px'}} alt /></a>
                  </div>
                  <div className="speaker-page__img-shape" />
                </div>
                <div className="speaker-page__content" style={{fontSize:'85%'}}>
                  <h3>
                    <Link href="">Mr. Henry Li</Link>
                  </h3>
                  <p>Head of Ecosystem Development</p>
                  <p>Cyberport</p>
                </div>
              </div>
            </div>
            {/*Speaker Page 22 Single End*/}
            {/*Speaker Page 23 Single Start*/}
            <div
              className="col-xl-4 col-lg-4 wow fadeInLeft"
              data-wow-delay="100ms"
            >
              <div className="speaker-page__single">
                <div className="speaker-page__img-box">
                  <div className="speaker-page__img">
                    <a href="/speaker-single-jean-sebastien-jacquetin"><img src="assets/images/speakers/jean_sebastien_jacquetin.jpg" style={{height: '418px'}} alt /></a>
                  </div>
                  <div className="speaker-page__img-shape" />
                </div>
                <div className="speaker-page__content" style={{fontSize:'85%'}}>
                  <h3>
                    <Link href="/speaker-single-jean-sebastien-jacquetin">Mr. Jean-Sébastien Jacquetin</Link>
                  </h3>
                  <p>Managing Partner</p>
                  <p>Cavendish Investment Corporation</p>
                </div>
              </div>
            </div>
            {/*Speaker Page 23 Single End*/}
            {/*Speaker Page 24 Single Start*/}
            <div
              className="col-xl-4 col-lg-4 wow fadeInLeft"
              data-wow-delay="100ms"
            >
              <div className="speaker-page__single">
                <div className="speaker-page__img-box">
                  <div className="speaker-page__img">
                    <a href="/speaker-single-jeanne-wang"><img src="assets/images/speakers/jeanne_wang.png" style={{height: '418px'}} alt /></a>
                  </div>
                  <div className="speaker-page__img-shape" />
                </div>
                <div className="speaker-page__content" style={{fontSize:'85%'}}>
                  <h3>
                    <Link href="/speaker-single-jeanne-wang">Ms. Jeanne Wang</Link>
                  </h3>
                  <p>Investment Director</p>
                  <p>Australian Trade and Investment Commission (Austrade)</p>
                </div>
              </div>
            </div>
            {/*Speaker Page 24 Single End*/}
            {/*Speaker Page 25 Single Start*/}
            <div
              className="col-xl-4 col-lg-4 wow fadeInLeft"
              data-wow-delay="100ms"
            >
              <div className="speaker-page__single">
                <div className="speaker-page__img-box">
                  <div className="speaker-page__img">
                    <a href=""><img src="assets/images/speakers/jie_zhou.jpg" style={{height: '418px'}} alt /></a>
                  </div>
                  <div className="speaker-page__img-shape" />
                </div>
                <div className="speaker-page__content" style={{fontSize:'85%'}}>
                  <h3>
                    <Link href="">Ms. Jie Zhou</Link>
                  </h3>
                  <p>Head of International Engagement, Accelerator and Canopy</p>
                  <p>Cambridge Institute for Sustainability Leadership (CISL)</p>
                  <p>Cambridge University</p>
                </div>
              </div>
            </div>
            {/*Speaker Page 25 Single End*/}
            {/*Speaker Page 26 Single Start*/}
            <div
              className="col-xl-4 col-lg-4 wow fadeInLeft"
              data-wow-delay="100ms"
            >
              <div className="speaker-page__single">
                <div className="speaker-page__img-box">
                  <div className="speaker-page__img">
                    <a href="/speaker-single-jonathan-lin"><img src="assets/images/speakers/johnathan_lin.jpg" style={{height: '418px'}} alt /></a>
                  </div>
                  <div className="speaker-page__img-shape" />
                </div>
                <div className="speaker-page__content" style={{fontSize:'85%'}}>
                  <h3>
                    <Link href="/speaker-single-jonathan-lin">Prof. Johnathan Lin</Link>
                  </h3>
                  <p>General Partner</p>
                  <p>Andra Capital</p>
                </div>
              </div>
            </div>
            {/*Speaker Page 26 Single End*/}
            {/*Speaker Page 27 Single Start*/}
            <div
              className="col-xl-4 col-lg-4 wow fadeInLeft"
              data-wow-delay="100ms"
            >
              <div className="speaker-page__single">
                <div className="speaker-page__img-box">
                  <div className="speaker-page__img">
                    <a href="/speaker-single-jonathan-wong"><img src="assets/images/speakers/johnathan_wong.jpg" style={{height: '418px'}} alt /></a>
                  </div>
                  <div className="speaker-page__img-shape" />
                </div>
                <div className="speaker-page__content" style={{fontSize:'85%'}}>
                  <h3>
                    <Link href="/speaker-single-jonathan-wong">Mr. Jonathan Wong</Link>
                  </h3>
                  <p>Chief of Innovation, Enterprise and Investment</p>
                  <p>Trade, Investment and Innovation Division</p>
                  <p>UNESCAP</p>
                </div>
              </div>
            </div>
            {/*Speaker Page 27 Single End*/}
            {/*Speaker Page 28 Single Start*/}
            <div
              className="col-xl-4 col-lg-4 wow fadeInLeft"
              data-wow-delay="100ms"
            >
              <div className="speaker-page__single">
                <div className="speaker-page__img-box">
                  <div className="speaker-page__img">
                    <a href=""><img src="assets/images/speakers/joseph_chan.jpg" style={{height: '418px'}} alt /></a>
                  </div>
                  <div className="speaker-page__img-shape" />
                </div>
                <div className="speaker-page__content" style={{fontSize:'85%'}}>
                  <h3>
                    <Link href="">Mr Joseph H. L. Chan</Link>
                  </h3>
                  <p>JP</p>
                  <p>Under Secretary, Financial Services and the Treasury of Hong Kong</p>
                </div>
              </div>
            </div>
            {/*Speaker Page 28 Single End*/}
            {/*Speaker Page 29 Single Start*/}
            <div
              className="col-xl-4 col-lg-4 wow fadeInLeft"
              data-wow-delay="100ms"
            >
              <div className="speaker-page__single">
                <div className="speaker-page__img-box">
                  <div className="speaker-page__img">
                    <a href=""><img src="assets/images/speakers/justin_teoh.jpg" style={{height: '418px'}} alt /></a>
                  </div>
                  <div className="speaker-page__img-shape" />
                </div>
                <div className="speaker-page__content" style={{fontSize:'85%'}}>
                  <h3>
                    <Link href="">Mr. Justin Teoh</Link>
                  </h3>
                  <p>Managing Director</p>
                  <p>Bispoint (Malaysia)</p>
                </div>
              </div>
            </div>
            {/*Speaker Page 29 Single End*/}
            {/*Speaker Page 30 Single Start*/}
            <div
              className="col-xl-4 col-lg-4 wow fadeInLeft"
              data-wow-delay="100ms"
            >
              <div className="speaker-page__single">
                <div className="speaker-page__img-box">
                  <div className="speaker-page__img">
                    <a href="/speaker-single-ken-chiu"><img src="assets/images/speakers/ken_chiu.jpg" style={{height: '418px'}} alt /></a>
                  </div>
                  <div className="speaker-page__img-shape" />
                </div>
                <div className="speaker-page__content" style={{fontSize:'85%'}}>
                  <h3>
                    <Link href="/speaker-single-ken-chiu">Mr. Ken Chiu</Link>
                  </h3>
                  <p>Head of Carbon and ESG Products Market</p>
                  <p>Hong Kong Exchanges and Clearing Limited (HKEX)</p>
                </div>
              </div>
            </div>
            {/*Speaker Page 30 Single End*/}
            {/*Speaker Page 31 Single Start*/}
            <div
              className="col-xl-4 col-lg-4 wow fadeInLeft"
              data-wow-delay="100ms"
            >
              <div className="speaker-page__single">
                <div className="speaker-page__img-box">
                  <div className="speaker-page__img">
                    <a href="/speaker-single-kerr-xu"><img src="assets/images/speakers/kerr_xu.jpg" style={{height: '418px'}} alt /></a>
                  </div>
                  <div className="speaker-page__img-shape" />
                </div>
                <div className="speaker-page__content" style={{fontSize:'85%'}}>
                  <h3>
                    <Link href="/speaker-single-kerr-xu">Dr. Kerr XU</Link>
                  </h3>
                  <p>Chief Executive Officer & Co-founder</p>
                  <p>LaSense Technology Limited</p>
                </div>
              </div>
            </div>
            {/*Speaker Page 31 Single End*/}
            {/*Speaker Page 32 Single Start*/}
            <div
              className="col-xl-4 col-lg-4 wow fadeInLeft"
              data-wow-delay="100ms"
            >
              <div className="speaker-page__single">
                <div className="speaker-page__img-box">
                  <div className="speaker-page__img">
                    <a href=""><img src="assets/images/speakers/kitikorn.jpg" style={{height: '418px'}} alt /></a>
                  </div>
                  <div className="speaker-page__img-shape" />
                </div>
                <div className="speaker-page__content" style={{fontSize:'85%'}}>
                  <h3>
                    <Link href="">Dr. Kitikorn Charmondusit</Link>
                  </h3>
                  <p>Dean</p>
                  <p>Faculty of Environment and Resource Studies</p>
                  <p>Mahidol University</p>
                </div>
              </div>
            </div>
            {/*Speaker Page 32 Single End*/}
            {/*Speaker Page 33 Single Start*/}
            <div
              className="col-xl-4 col-lg-4 wow fadeInLeft"
              data-wow-delay="100ms"
            >
              <div className="speaker-page__single">
                <div className="speaker-page__img-box">
                  <div className="speaker-page__img">
                    <a href="/speaker-single-sham-mai-har"><img src="assets/images/speakers/maihar_sham.jpg" style={{height: '418px'}} alt /></a>
                  </div>
                  <div className="speaker-page__img-shape" />
                </div>
                <div className="speaker-page__content" style={{fontSize:'85%'}}>
                  <h3>
                    <Link href="/speaker-single-sham-mai-har">Prof. Mai-har Sham</Link>
                  </h3>
                  <p>Pro-Vice-Chancellor (Research)</p>
                  <p>The Chinese University of Hong Kong (CUHK)</p>
                </div>
              </div>
            </div>
            {/*Speaker Page 33 Single End*/}
            {/*Speaker Page 34 Single Start*/}
            <div
              className="col-xl-4 col-lg-4 wow fadeInLeft"
              data-wow-delay="100ms"
            >
              <div className="speaker-page__single">
                <div className="speaker-page__img-box">
                  <div className="speaker-page__img">
                    <a href="/speaker-single-mark-kai"><img src="assets/images/speakers/mark_kai.jpg" style={{height: '418px'}} alt /></a>
                  </div>
                  <div className="speaker-page__img-shape" />
                </div>
                <div className="speaker-page__content" style={{fontSize:'85%'}}>
                  <h3>
                    <Link href="/speaker-single-mark-kai">Mr. Mark Kai</Link>
                  </h3>
                  <p>Chief Financial Officer</p>
                  <p>BOC Group Life Assurance Company Limited</p>
                </div>
              </div>
            </div>
            {/*Speaker Page 34 Single End*/}
            {/*Speaker Page 35 Single Start*/}
            <div
              className="col-xl-4 col-lg-4 wow fadeInLeft"
              data-wow-delay="100ms"
            >
              <div className="speaker-page__single">
                <div className="speaker-page__img-box">
                  <div className="speaker-page__img">
                    <a href=""><img src="assets/images/speakers/masato_abe.jpg" style={{height: '418px'}} alt /></a>
                  </div>
                  <div className="speaker-page__img-shape" />
                </div>
                <div className="speaker-page__content" style={{fontSize:'85%'}}>
                  <h3>
                    <Link href="">Dr. Masato Abe</Link>
                  </h3>
                  <p>Economist</p>
                  <p>United Nations Multi-Country Office for Micronesia, Kolonia, Pohnpei, Federated States of Micronesia</p>
                </div>
              </div>
            </div>
            {/*Speaker Page 35 Single End*/}
            {/*Speaker Page 36 Single Start*/}
            <div
              className="col-xl-4 col-lg-4 wow fadeInLeft"
              data-wow-delay="100ms"
            >
              <div className="speaker-page__single">
                <div className="speaker-page__img-box">
                  <div className="speaker-page__img">
                    <a href=""><img src="assets/images/speakers/mei_zi_tan.jpg" style={{height: '418px'}} alt /></a>
                  </div>
                  <div className="speaker-page__img-shape" />
                </div>
                <div className="speaker-page__content" style={{fontSize:'85%'}}>
                  <h3>
                    <Link href="">Ms. Mei Zi Tan</Link>
                  </h3>
                  <p>Manager</p>
                  <p>International Research & Projects</p>
                  <p>Carbon Market Institute (CMI)</p>
                </div>
              </div>
            </div>
            {/*Speaker Page 36 Single End*/}
            {/*Speaker Page 37 Single Start*/}
            <div
              className="col-xl-4 col-lg-4 wow fadeInLeft"
              data-wow-delay="100ms"
            >
              <div className="speaker-page__single">
                <div className="speaker-page__img-box">
                  <div className="speaker-page__img">
                    <a href="/speaker-single-nick-zhong"><img src="assets/images/speakers/nick_zhong.jpg" style={{height: '418px'}} alt /></a>
                  </div>
                  <div className="speaker-page__img-shape" />
                </div>
                <div className="speaker-page__content" style={{fontSize:'85%'}}>
                  <h3>
                    <Link href="/speaker-single-nick-zhong">Mr. Nick Zhong</Link>
                  </h3>
                  <p>Chief Operating Officer</p>
                  <p>Smart Zeroing Ltd</p>
                </div>
              </div>
            </div>
            {/*Speaker Page 37 Single End*/}
            {/*Speaker Page 38 Single Start*/}
            <div
              className="col-xl-4 col-lg-4 wow fadeInLeft"
              data-wow-delay="100ms"
            >
              <div className="speaker-page__single">
                <div className="speaker-page__img-box">
                  <div className="speaker-page__img">
                    <a href="/speaker-single-patrick-ho"><img src="assets/images/speakers/patrick_ho.JPG" style={{height: '418px'}} alt /></a>
                  </div>
                  <div className="speaker-page__img-shape" />
                </div>
                <div className="speaker-page__content" style={{fontSize:'85%'}}>
                  <h3>
                    <Link href="/speaker-single-patrick-ho">Mr. Patrick Ho</Link>
                  </h3>
                  <p>Head of Sustainable Development</p>
                  <p>Swire Properties Limited</p>
                </div>
              </div>
            </div>
            {/*Speaker Page 38 Single End*/}
            {/*Speaker Page 39 Single Start*/}
            <div
              className="col-xl-4 col-lg-4 wow fadeInLeft"
              data-wow-delay="100ms"
            >
              <div className="speaker-page__single">
                <div className="speaker-page__img-box">
                  <div className="speaker-page__img">
                    <a href=""><img src="assets/images/speakers/peng_feng.jpg" style={{height: '418px'}} alt /></a>
                  </div>
                  <div className="speaker-page__img-shape" />
                </div>
                <div className="speaker-page__content" style={{fontSize:'85%'}}>
                  <h3>
                    <Link href="">Mr. Peng Feng</Link>
                  </h3>
                  <p>Business Director</p>
                  <p>Shanghai Environmental Energy Exchange</p>
                </div>
              </div>
            </div>
            {/*Speaker Page 39 Single End*/}
            {/*Speaker Page 40 Single Start*/}
            <div
              className="col-xl-4 col-lg-4 wow fadeInLeft"
              data-wow-delay="100ms"
            >
              <div className="speaker-page__single">
                <div className="speaker-page__img-box">
                  <div className="speaker-page__img">
                    <a href="/speaker-single-phoebe-leung"><img src="assets/images/speakers/phoebe_leung.JPG" style={{height: '418px'}} alt /></a>
                  </div>
                  <div className="speaker-page__img-shape" />
                </div>
                <div className="speaker-page__content" style={{fontSize:'85%'}}>
                  <h3>
                    <Link href="/speaker-single-phoebe-leung">Ms. Phoebe Leung</Link>
                  </h3>
                  <p>Senior Manager</p>
                  <p>Sustainable Development</p>
                  <p>Swire Properties Limited</p>
                </div>
              </div>
            </div>
            {/*Speaker Page 40 Single End*/}
            {/*Speaker Page 41 Single Start*/}
            <div
              className="col-xl-4 col-lg-4 wow fadeInLeft"
              data-wow-delay="100ms"
            >
              <div className="speaker-page__single">
                <div className="speaker-page__img-box">
                  <div className="speaker-page__img">
                    <a href="/speaker-single-ronald-cheung"><img src="assets/images/speakers/roanld_cheung.png" style={{height: '418px'}} alt /></a>
                  </div>
                  <div className="speaker-page__img-shape" />
                </div>
                <div className="speaker-page__content" style={{fontSize:'85%'}}>
                  <h3>
                    <Link href="/speaker-single-ronald-cheung">Mr. Ronald Cheung</Link>
                  </h3>
                  <p>Founder & Chief Executive Officer</p>
                  <p>Lifewood Data Technology Limited</p>
                </div>
              </div>
            </div>
            {/*Speaker Page 41 Single End*/}
            {/*Speaker Page 42 Single Start*/}
            <div
              className="col-xl-4 col-lg-4 wow fadeInLeft"
              data-wow-delay="100ms"
            >
              <div className="speaker-page__single">
                <div className="speaker-page__img-box">
                  <div className="speaker-page__img">
                    <a href=""><img src="assets/images/speakers/ryan_cook.jpg" style={{height: '418px'}} alt /></a>
                  </div>
                  <div className="speaker-page__img-shape" />
                </div>
                <div className="speaker-page__content" style={{fontSize:'85%'}}>
                  <h3>
                    <Link href="">Mr. Ryan Cook</Link>
                  </h3>
                  <p>Program Impact Manager</p>
                  <p>(Sustainable Finance)</p>
                  <p>Climateworks Centre</p>
                </div>
              </div>
            </div>
            {/*Speaker Page 42 Single End*/}
            {/*Speaker Page 43 Single Start*/}
            <div
              className="col-xl-4 col-lg-4 wow fadeInLeft"
              data-wow-delay="100ms"
            >
              <div className="speaker-page__single">
                <div className="speaker-page__img-box">
                  <div className="speaker-page__img">
                    <a href="/speaker-single-ryan-foo"><img src="assets/images/speakers/ryan_foo.jpeg" style={{height: '418px'}} alt /></a>
                  </div>
                  <div className="speaker-page__img-shape" />
                </div>
                <div className="speaker-page__content" style={{fontSize:'85%'}}>
                  <h3>
                    <Link href="/speaker-single-ryan-foo">Mr. Ryan Foo</Link>
                  </h3>
                  <p>Senior Technology Manager</p>
                  <p>TÜV Rheinland Hong Kong Limited</p>
                </div>
              </div>
            </div>
            {/*Speaker Page 43 Single End*/}
            {/*Speaker Page 44 Single Start*/}
            <div
              className="col-xl-4 col-lg-4 wow fadeInLeft"
              data-wow-delay="100ms"
            >
              <div className="speaker-page__single">
                <div className="speaker-page__img-box">
                  <div className="speaker-page__img">
                    <a href=""><img src="assets/images/speakers/sam_tang.jpg" style={{height: '418px'}} alt /></a>
                  </div>
                  <div className="speaker-page__img-shape" />
                </div>
                <div className="speaker-page__content" style={{fontSize:'85%'}}>
                  <h3>
                    <Link href="">Mr. Sam Tang</Link>
                  </h3>
                  <p>Managing Partner</p>
                  <p>Pembroke Capital Partners</p>
                </div>
              </div>
            </div>
            {/*Speaker Page 44 Single End*/}
            {/*Speaker Page 45 Single Start*/}
            <div
              className="col-xl-4 col-lg-4 wow fadeInLeft"
              data-wow-delay="100ms"
            >
              <div className="speaker-page__single">
                <div className="speaker-page__img-box">
                  <div className="speaker-page__img">
                    <a href="/speaker-single-samson-leong"><img src="assets/images/speakers/samson_leong.jpeg" style={{height: '418px'}} alt /></a>
                  </div>
                  <div className="speaker-page__img-shape" />
                </div>
                <div className="speaker-page__content" style={{fontSize:'85%'}}>
                  <h3>
                    <Link href="/speaker-single-samson-leong">Mr. Samson Leong</Link>
                  </h3>
                  <p>Senior Manager</p>
                  <p>Intertek Testing Services HK Ltd.</p>
                </div>
              </div>
            </div>
            {/*Speaker Page 45 Single End*/}
            {/*Speaker Page 46 Single Start*/}
            <div
              className="col-xl-4 col-lg-4 wow fadeInLeft"
              data-wow-delay="100ms"
            >
              <div className="speaker-page__single">
                <div className="speaker-page__img-box">
                  <div className="speaker-page__img">
                    <a href="/speaker-single-riaz_ahmed_shaikh"><img src="assets/images/speakers/riaz_ahmed_shaikh.jpeg" style={{height: '418px'}} alt /></a>
                  </div>
                  <div className="speaker-page__img-shape" />
                </div>
                <div className="speaker-page__content" style={{fontSize:'85%'}}>
                  <h3>
                    <Link href="/speaker-single-riaz_ahmed_shaikh">Mr. Riaz Ahmed Shaikh</Link>
                  </h3>
                  <p>Consul General of the Islamic Republic of Pakistan, Hong Kong</p>
                </div>
              </div>
            </div>
            {/*Speaker Page 46 Single End*/}
            {/*Speaker Page 47 Single Start*/}
            <div
              className="col-xl-4 col-lg-4 wow fadeInLeft"
              data-wow-delay="100ms"
            >
              <div className="speaker-page__single">
                <div className="speaker-page__img-box">
                  <div className="speaker-page__img">
                    <a href="/speaker-single-song-hoi-see"><img src="assets/images/speakers/song_hoisee.jpg" style={{height: '418px'}} alt /></a>
                  </div>
                  <div className="speaker-page__img-shape" />
                </div>
                <div className="speaker-page__content" style={{fontSize:'85%'}}>
                  <h3>
                    <Link href="/speaker-single-song-hoi-see">Mr. Song Hoi-see</Link>
                  </h3>
                  <p>Founder & Chief Executive Officer</p>
                  <p>Plaza Premium Group</p>
                </div>
              </div>
            </div>
            {/*Speaker Page 47 Single End*/}
            {/*Speaker Page 48 Single Start*/}
            <div
              className="col-xl-4 col-lg-4 wow fadeInLeft"
              data-wow-delay="100ms"
            >
              <div className="speaker-page__single">
                <div className="speaker-page__img-box">
                  <div className="speaker-page__img">
                    <a href=""><img src="assets/images/speakers/sun_ta_chien.jpg" style={{height: '418px'}} alt /></a>
                  </div>
                  <div className="speaker-page__img-shape" />
                </div>
                <div className="speaker-page__content" style={{fontSize:'85%'}}>
                  <h3>
                    <Link href="">Dr. Sun Ta Chien</Link>
                  </h3>
                  <p>Executive Director</p>
                  <p>Digital Domain</p>
                </div>
              </div>
            </div>
            {/*Speaker Page 48 Single End*/}
            {/*Speaker Page 49 Single Start*/}
            <div
              className="col-xl-4 col-lg-4 wow fadeInLeft"
              data-wow-delay="100ms"
            >
              <div className="speaker-page__single">
                <div className="speaker-page__img-box">
                  <div className="speaker-page__img">
                    <a href="/speaker-single-terry-yung"><img src="assets/images/speakers/terry_yung.jpg" style={{height: '418px'}} alt /></a>
                  </div>
                  <div className="speaker-page__img-shape" />
                </div>
                <div className="speaker-page__content" style={{fontSize:'85%'}}>
                  <h3>
                    <Link href="/speaker-single-terry-yung">Mr. Terry Yung</Link>
                  </h3>
                  <p>Chief Investment Officer</p>
                  <p>BOC Group Life Assurance Company Limited</p>
                </div>
              </div>
            </div>
            {/*Speaker Page 49 Single End*/}
            {/*Speaker Page 50 Single Start*/}
            <div
              className="col-xl-4 col-lg-4 wow fadeInLeft"
              data-wow-delay="100ms"
            >
              <div className="speaker-page__single">
                <div className="speaker-page__img-box">
                  <div className="speaker-page__img">
                    <a href="/speaker-single-toa-charm"><img src="assets/images/speakers/toa_charm.jpg" style={{height: '418px'}} alt /></a>
                  </div>
                  <div className="speaker-page__img-shape" />
                </div>
                <div className="speaker-page__content" style={{fontSize:'85%'}}>
                  <h3>
                    <Link href="/speaker-single-toa-charm">Dr. Toa Charm</Link>
                  </h3>
                  <p>Founding Chairman</p>
                  <p>Data Literacy & AI Association</p>
                </div>
              </div>
            </div>
            {/*Speaker Page 50 Single End*/}
            {/*Speaker Page 52 Single Start*/}
            <div
              className="col-xl-4 col-lg-4 wow fadeInLeft"
              data-wow-delay="100ms"
            >
              <div className="speaker-page__single">
                <div className="speaker-page__img-box">
                  <div className="speaker-page__img">
                    <a href="/speaker-single-tp-lim"><img src="assets/images/speakers/TP_lim.png" style={{height: '418px'}} alt /></a>
                  </div>
                  <div className="speaker-page__img-shape" />
                </div>
                <div className="speaker-page__content" style={{fontSize:'85%'}}>
                  <h3>
                    <Link href="/speaker-single-tp-lim">Mr. TP Lim</Link>
                  </h3>
                  <p>President</p>
                  <p>Roots & Shoots Malaysia</p>
                </div>
              </div>
            </div>
            {/*Speaker Page 52 Single End*/}
            {/*Speaker Page 53 Single Start*/}
            <div
              className="col-xl-4 col-lg-4 wow fadeInLeft"
              data-wow-delay="100ms"
            >
              <div className="speaker-page__single">
                <div className="speaker-page__img-box">
                  <div className="speaker-page__img">
                    <a href="/speaker-single-vivienne-chiu"><img src="assets/images/speakers/vivienne_chiu.jpeg" style={{height: '418px'}} alt /></a>
                  </div>
                  <div className="speaker-page__img-shape" />
                </div>
                <div className="speaker-page__content" style={{fontSize:'85%'}}>
                  <h3>
                    <Link href="/speaker-single-vivienne-chiu">Ms. Vivienne Chiu</Link>
                  </h3>
                  <p>Chief Brand & Communications Officer </p>
                  <p>BOC Group Life Assurance Company Limited</p>
                </div>
              </div>
            </div>
            {/*Speaker Page 53 Single End*/}
            {/*Speaker Page 54 Single Start*/}
            <div
              className="col-xl-4 col-lg-4 wow fadeInLeft"
              data-wow-delay="100ms"
            >
              <div className="speaker-page__single">
                <div className="speaker-page__img-box">
                  <div className="speaker-page__img">
                    <a href="/speaker-single-wendy-chan"><img src="assets/images/speakers/wendy_chan.png" style={{height: '418px'}} alt /></a>
                  </div>
                  <div className="speaker-page__img-shape" />
                </div>
                <div className="speaker-page__content" style={{fontSize:'85%'}}>
                  <h3>
                    <Link href="/speaker-single-wendy-chan">Ms. Wendy M.Y. Chan</Link>
                  </h3>
                  <p>Chairlady, Activities & Events Committee</p>
                  <p>The Institute of Purchasing & Supply of Hong Kong (IPSHK)</p>
                </div>
              </div>
            </div>
            {/*Speaker Page 54 Single End*/}
            {/*Speaker Page 55 Single Start*/}
            <div
              className="col-xl-4 col-lg-4 wow fadeInLeft"
              data-wow-delay="100ms"
            >
              <div className="speaker-page__single">
                <div className="speaker-page__img-box">
                  <div className="speaker-page__img">
                    <a href="/speaker-single-william-yu"><img src="assets/images/speakers/william_yu.jpg" style={{height: '418px'}} alt /></a>
                  </div>
                  <div className="speaker-page__img-shape" />
                </div>
                <div className="speaker-page__content" style={{fontSize:'85%'}}>
                  <h3>
                    <Link href="/speaker-single-william-yu">Dr. William Yu</Link>
                  </h3>
                  <p>Founder & Chief Executive Officer</p>
                  <p>World Green Organization</p>
                </div>
              </div>
            </div>
            {/*Speaker Page 55 Single End*/}
            {/*Speaker Page 56 Single Start*/}
            <div
              className="col-xl-4 col-lg-4 wow fadeInLeft"
              data-wow-delay="100ms"
            >
              <div className="speaker-page__single">
                <div className="speaker-page__img-box">
                  <div className="speaker-page__img">
                    <a href=""><img src="assets/images/speakers/hu.jpg" style={{height: '418px'}} alt /></a>
                  </div>
                  <div className="speaker-page__img-shape" />
                </div>
                <div className="speaker-page__content" style={{fontSize:'85%'}}>
                  <h3>
                    <Link href="">胡超</Link>
                  </h3>
                  <p>總經理</p>
                  <p>廣東安柏瑞門窗有限公司</p>
                </div>
              </div>
            </div>
            {/*Speaker Page 56 Single End*/}
            
          </div>
        </div>
      </section>
    </EnvensLayouts>
  );
};
export default page;
