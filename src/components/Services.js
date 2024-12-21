const Services = () => {
  return (
        <section className="services_area">
        <div className="container pb-5">
          <div className="row pt-5">
            <div className="col-xl-12">
              <div className="section_title mb-5">
                <h3 className="fs-1 ms-4">My Services</h3>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="single_services text-center pt-5">
                <div className="icon">
                  <i className="fa-solid fa-web-awesome fs-1 mb-4"></i>
                </div>
                <h3>Software</h3>
                <p className="pb-5"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti ipsa ad delectus
                  mollitia omnis modi.</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single_services text-center pt-5">
                <div className="icon">
                  <i className="fa-solid fa-code fs-1 mb-4"></i>
                </div>
                <h3>Web Development</h3>
                <p className="pb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia magni libero vel vitae
                  dolores quas!</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single_services text-center pt-5">
                <div className="icon">
                  <i className="fa-solid fa-network-wired fs-1 mb-4"></i>
                </div>
                <h3>UI/UX Design</h3>
                <p className="pb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia magni libero vel vitae dol
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}
export default Services