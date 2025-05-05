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
                  <span>Prof. Mai-har Sham</span></h2>
                  <h2 className="section-title__title" style={{fontSize:'100%'}}>
                  <p>Pro-Vice-Chancellor (Research), The Chinese University of Hong Kong (CUHK)</p>
                  </h2>
                </div>
                <div className="speaker-single__info-box">
                  <ul className="speaker-single__info-list list-unstyled" style={{fontSize:'100%'}}>
                  <p>Professor Mai Har Sham has been Pro-Vice-Chancellor and Vice-President (Research) and Choh-Ming Li Professor of Biomedical Sciences at The Chinese University of Hong Kong (CUHK) since 2020. Professor Sham obtained her BSc and MPhil in Biology at CUHK. She was awarded a Croucher Foundation Scholarship and pursued her PhD in Biochemistry at the University of Cambridge, U.K. She received her postdoctoral training in Developmental Genetics at the National Institute for Medical Research in London before joining The University of Hong Kong (HKU), where she later became Assistant Dean (Research), Head of the Department of Biochemistry, Director of the Centre for Reproduction Development and Growth in the Li Ka Shing Faculty of Medicine, and the Associate Vice-President (Research) of HKU. Professor Sham promoted not only excellent research, but also dedicated to medical and science curriculum development. She led the design and establishment of the first Bachelor of Biomedical Sciences curriculum in Hong Kong.</p>

                  <p>As PVC (Research) in CUHK, Professor Sham oversees the strategic development of research and innovation, entrepreneurship, knowledge transfer and research impact in the University. She provides leadership to research institutes and centres, fostering interdisciplinary research and collaboration with academic and industrial partners in strategic research areas. She is in charge of research support services for technology transfer, intellectual property management, start-ups and commercialization platforms to translate research and knowledge into societal impact. Professor Sham is responsible for the administration of research fundings, including university-wide funding schemes to support research equipment and facilities, interdisciplinary group research projects, research talents and partnership with international institutions. She also oversees matters relating to research policies, research data management, ensuring best practices in compliance, research ethics and integrity in the University.</p>

                  <p>Professor Sham is a Governing Board member of the World Conferences on Research Integrity Foundation (WCRIF) and was the Co-Chair for the 6th  World Conference on Research Integrity in 2019. Working together with the international consortium, she promotes responsible conduct of research and good science in universities and research institutions.</p>

                  <p>As a developmental geneticist, Professor Sham leads a research team focusing on the molecular mechanisms of mammalian development and human congenital disorders. Her research covers areas of gene regulation and molecular signaling, craniofacial and hearing disorders, genetic bases and mutant mouse models of rare human diseases, stem cells, and tissue regeneration. She is currently the President of the Hong Kong Society for Developmental Biology. She serves as an Associate Editor for Gene Expression Patterns and an Editor for Cell and Bioscience.</p>  
                  </ul>
                </div>
            </div>
          </div>
            <div className="col-xl-6 col-lg-5">
              <div className="speaker-single__right">
                <div className="speaker-single__img-box">
                  <div className="speaker-single__img">
                    <img
                      src="assets/images/speakers/maihar_sham.jpg"
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
