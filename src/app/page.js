import Header from "../components/Header";

const Home = () => {
  return (
    <>
      <section className="container py-5">
        <div className="row align-items-center">
          <div className="col-6 ">
            <p>
              Acumen specializes in mergers and acquisition (‘M&A’) transaction
              advisory. We advise clients on matters relating to transactions be
              it buying/ selling of companies, determining value of business,
              doing due diligences, assisting clients prior to/ during due
              diligence by setting up data rooms, raising private equity finance
              and research requirements related to M&A transactions.
            </p>
            <h6 className="fw-semibold">Why Acumen?</h6>
            <ul>
              <li>
                Being entrepreneurs ourselves, we understand your pain-points
              </li>
              <li>with specific focus on mid-sized businesses.</li>
              <li>
                having ampleexperience in end-to-end transaction advisory.
              </li>
            </ul>
          </div>
          <div className="col-6 ">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/V_PeS02g5Z0?si=ryMs0PfoJp00uwtI"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </section>

      <section className="container py-5">
        <h2 className="text-center pb-4 fw-bold">Services</h2>
        <div className="row g-5">
          <div className="col-md-4 col-sm-12 d-flex" style={{ gap: "1rem" }}>
            <i className="bi bi-asterisk fs-4"></i>
            <div>
              <h5 className="fw-bold">M&A and Growth Capital</h5>
              <p>
                As specialists in M&A transaction advisory, we provide buy-side
                as well as sell-side advisory. We also assist our clients in
                raising private equity/ venture capital funding to expand, enter
                new markets or finance a significant acquisition without a
                change in control.
              </p>
              <a href="#">Know More </a>
            </div>
          </div>
          <div className="col-md-4 col-sm-12 d-flex" style={{ gap: "1rem" }}>
            <i className="bi bi-asterisk fs-4"></i>
            <div>
              <h5 className="fw-bold">Due Diligence</h5>
              <p>
                Acumen specializes in conducting accounting and financial due
                diligence on the target company on behalf of the client.
              </p>
              <a href="#">Know More </a>
            </div>
          </div>
          <div className="col-md-4 col-sm-12 d-flex" style={{ gap: "1rem" }}>
            <i className="bi bi-asterisk fs-4"></i>
            <div>
              <h5 className="fw-bold">IM and Business Modelling</h5>
              <p>
                We provide research assistance on different aspects of
                transactions such as buyer’s list, information memorandums,
                analytical review of target companies, business model
                preparation etc. for our clients.
              </p>
              <a href="#">Know More </a>
            </div>
          </div>
          <div className="col-md-4 col-sm-12 d-flex" style={{ gap: "1rem" }}>
            <i className="bi bi-asterisk fs-4"></i>
            <div>
              <h5 className="fw-bold">Valuation</h5>
              <p>
                We provide valuation services including business valuation,
                valuation of intangible assets, purchase price allocations,
                valuations for regulatory compliances.
              </p>
              <a href="#">Know More </a>
            </div>
          </div>
          <div className="col-md-4 col-sm-12 d-flex" style={{ gap: "1rem" }}>
            <i className="bi bi-asterisk fs-4"></i>
            <div>
              <h5 className="fw-bold">Data Room Assistance</h5>
              <p>
                Acumen assists clients in getting ready for a due-diligence by
                setting up a data room.
              </p>
              <a href="#">Know More </a>
            </div>
          </div>
          <div className="col-md-4 col-sm-12 d-flex" style={{ gap: "1rem" }}>
            <i className="bi bi-asterisk fs-4"></i>
            <div>
              <h5 className="fw-bold">IPO Assistance</h5>
              <p>
                We assist your team in the IPO process by providing inputs in
                drafting the business & industry section in the prospectus.
              </p>
              <a href="#">Know More </a>
            </div>
          </div>
        </div>
      </section>

      <section className="container py-5">
        <h2 className="text-center pb-4 fw-bold">
          Here's what our clients have to say
        </h2>
      </section>

      <section className="container py-5">
        <div className="row">
          <div className="col-8">
            <h4 className="fw-bold">
              Browse through our list of successful deals done
            </h4>
          </div>
          <div className="col-4">
            <button className="btn btn-primary">
              Browse <i className="bi bi-arrow-right fs-5 pl-2"></i>
            </button>
          </div>
        </div>
      </section>

      <section className="container py-5">
        <div className="row g-5">
          <div className="col-md-6 col-sm-12">
            <h5 className="fw-bold">Our Team</h5>
            <img
              src="https://acumenfc.co.in/wp-content/uploads/2019/12/Acumen-team-pic-min.jpg"
              class="img-fluid pb-3 w-100"
              alt="Our Team"
            ></img>
            <p>
              At Acumen, we strive to add value at every stage of your dealings
              with us. The team at Acumen is a good mix of professionals from
              diverse backgrounds with extensive experience in the field of
              mergers and acquisition and transaction support advisory. Our team
              includes chartered accountants, finance professionals, and
              management graduates.
            </p>
            <button className="btn btn-primary">
              Meet our team <i className="bi bi-arrow-right fs-5 pl-2"></i>
            </button>
          </div>
          <div className="col-md-6 col-sm-12">
            <h5 className="fw-bold">Select Clients</h5>
          </div>
        </div>
      </section>

      <section className="container py-5">
        <div className="row">
          <div className="col-md-6 col-sm-12">
            <h3 className="fw-bold">Request a call back.</h3>
            <p>
              Would you like to speak to one of our financial advisors over the
              phone? Just submit your details and we’ll be in touch shortly. You
              can also email us if you would prefer.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
