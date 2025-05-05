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
                  <span>Prof. Jonathan Lin</span></h2>
                  <h2 className="section-title__title" style={{fontSize:'100%'}}>
                  <p>General Partner, Andra Capital</p>
                  </h2>
                </div>
                <div className="speaker-single__info-box">
                  <ul className="speaker-single__info-list list-unstyled" style={{fontSize:'100%'}}>
                  <p>Prof. Lin holds BBA from National Taiwan University with major in Bio-Industrial Mechantronics Engineering and Finance, and MBA from The Wharton School of University of Pennsylvania with major in Technology and Strategic Management and Health Care Management.</p>

                  <p>Prof. Lin worked for Lucent Technologies and AT&T as the marketing manager and CFO, while AT&T formed the joint venture of FareasTone with the Far East Group to open the deregulation wave of telecom industry in Taiwan and helped AT&T’s merger with British Telecom and IBM Global Network. After Wharton, Prof. Lin worked for the M&A and Tech Group at the head office of Credir Suisse First Boston’s investment banking in New York helping the merger of AOL and Time Warner, the media giant, after selling AT&T’s cable business to Comcast to make Comcast the largest industry player. After joining UBS’ Technology Research Team, Prof. Lin initiated the first research coverage of handset components among all international investment banks.</p>

                  <p>In 2003, Prof. Lin helped acquire the conglomerate of F&B, retail and electronics business, Bomy Corp., and successfully turn around this organization into a debt free company by being its Chairman and President for three years, which is among the few successful cases of Chapter 11. Then Prof. Lin took over Taichung Bank by the subsidiary of Bomy through the tender offer in the capital market. At Macquarie Bank, Prof. Lin led the acquisition of the largest wind power farm as well as cable TV business and helped set up the eco-system of green energy in Taiwan. At the investment banking team of Deutsche Bank, Prof. Lin financed the funding gap of Taiwan High Speed Rail by ECB offering in UK and helped Mediatek’s deployment into communication chip design by acquiring Nucore in U.S. Prof. Lin also advised Fairchild Semiconductors, Intel founders’ parent company, to acquire System General by public tender offer and take it private. Prof. Lin led the development of CoCo Drink Corp from 200 stores to 4,500 stores worldwide, making this brand the industry leader globally. Prof. Lin started the private equity involvement by the appointment of partner of Dawei Capital, the leading sports PE in Asia, together with other partners who used to be the chief investment officer at Qualcomm, President of Disney’s Venture Capital and Managing Director of Carlyle Group.</p>

                  <p>Prof. Lin currently is the general partner of Andra Capital based in San Francisco, with other partners who used to be the president of Corp Dev at Cisco, President of LSI before LSI was merged by Broadcom and the managing director of Goldman Sach’s Investment Banking Division in New York, Chief Innovation Officer at IBM, co-founder of Siri in Apple, and investment bankers from Lehman Brothers, Morgan Stanley and Merril Lynch. Andra Capital focuses investment in top two players in global enterprise software and AI industry such as Palantir, the largest big data company, Space X/Starlink, which is also the second largest unicorn globally, Stripe, the fifth largest unicorn globally, leading AI companies such as Anthropic backed by Google and Amazon, and xAI, led by Elon Musk, Lambda Labs, the 4th largest AI computing center, Figure AI, the leading AI robotics, Groq, the leading LPU chip for AI inference, SoFi, the leading online financial holding company, Automaiton Anywhere, the top 2 RPA company globally, Tanium, the leading end-point cybersecurity company and Microsoft’s cloud partner, Cybereason, the leading XDR cybersecurity company backed by Google, Lockheed Martin and Softbank, Carta, Snyk, Rubrik etc. We help grow these portfolio companies together with our long term investment partners such as Google, Amazon, Microsoft, Meta, Elon Musk, Peter Thiel. Softbank or other tier one PE/VC firms in the U.S.</p>

                  <p>Prof. Lin is also the director of board of Taishin Securities and other public listed companies which he personally invested. Prof. Lin is the Visiting Professor of the Biomedical Translation Research Center of Academia Sinica, commission member of the Ministry of Digital Affairs, the commission member of Ministry of Economic Affairs, board member of Private Equity Association, professor of National Taipei Technology University, research fellow of NTU’s Technology Policy and Industrial Development Center. Prof. Lin personally invested in and help the expansion of Mobileye, the leading chip maker of autonomous driving which was acquired by Intel. Prof. Lin has personally invested in various companies in medical device, fintech, AI and ICT services industry, such as Gogolook which was listed in Taiwan in 2023, and Lucid. The premium EV maker which was listed in 2022. Prof. Lin was also the director of the board of the Syntrend Incubation Foundation and Yilan Humanity Foundation.</p> 
                  </ul>
                </div>
            </div>
          </div>
            <div className="col-xl-6 col-lg-5">
              <div className="speaker-single__right">
                <div className="speaker-single__img-box">
                  <div className="speaker-single__img">
                    <img
                      src="assets/images/speakers/johnathan_lin.jpg"
                      alt
                    />
                  </div>
                  <div className="speaker-single__img-shape" />
                  <div className="speaker-single__share-and-social">
                    <div className="speaker-single__share">
                      <a href="https://linktr.ee/ProfJonathanLin">
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
