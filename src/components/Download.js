const Download = () => {
  return(
        <section className="download-area">
        <div className="container pt-5">
          <div className="container row">
            <h3 className="text-light fw-bold ms-3">
              I’m a Web Developer student based on Bitlis, who loves clean, simple & unique design. I also like to tackle
              problems.
            </h3>
          </div>
          <div className="container row mt-5 justify-content-between ">
            <div className="container col-lg-6 col-sm-12">
              <img className="img-fluid hidden mb-5" id="cv" alt="" />
            </div>
            <div className="col-lg-4 col-sm-12">
              <div className="container row p-0">
                <span className="text-white col-6 fw-medium text-start fs-5">web </span>
                <span className="text-light col-6 text-end fw-medium p-0 fs-5">%85</span>
              </div>
              <div className="progress my-3" role="progressbar" aria-label="example" aria-valuenow="25" aria-valuemin="0"
                aria-valuemax="100">
                <div className="progress-bar bg-warning"></div>
              </div>
              <div className="container row p-0">
                <span className="text-white col-6 fw-medium text-start fs-5">programming</span>
                <span className="text-light col-6 text-end fw-medium p-0 fs-5">%60</span>
              </div>
              <div className="progress my-3" role="progressbar" aria-label="Info example" aria-valuenow="50" aria-valuemin="0"
                aria-valuemax="100">
                <div className="progress-bar bg-warning"></div>
              </div>
              <div className="container row p-0">
                <span className="text-white col-6 fw-medium text-start fs-5">database</span>
                <span className="text-light col-6 text-end fw-medium p-0 fs-5">%20</span>
              </div>
              <div className="progress my-3" role="progressbar" aria-label="Warning example" aria-valuenow="75"
                aria-valuemin="0" aria-valuemax="100">
                <div className="progress-bar bg-warning"></div>
              </div>
              <div className="container row p-0">
                <span className="text-white col-6 fw-medium text-start fs-5">network</span>
                <span className="text-light col-6 text-end fw-medium p-0 fs-5">%10</span>
              </div>
              <div className="progress my-3" role="progressbar" aria-label="Danger example" aria-valuenow="100"
                aria-valuemin="0" aria-valuemax="100">
                <div className="progress-bar bg-warning" ></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}
export default Download