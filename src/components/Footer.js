const Footer = () => {
  return (
        <footer className="footer_area">
        <div className="container py-5">
          <div className="row">
            <div className="button_wrapper col-xl-3">
              <a  href="https://github.com/nvzt13" target="_blank" className="btn btn-outline-warning btn-lg  text-light fs-1 w-100">Github <i
                  className="fa-brands fa-github"></i></a>
            </div>
            <div className="button_wrapper col-xl-3">
              <a href="https://www.linkedin.com/in/nevzat-atalay-6b5164335/" className="btn btn-outline-warning btn-lg text-light fs-1 w-100" target="_blank">Linkedin <i
                  className="fa-brands fa-linkedin"></i></a>
            </div>
            <div className="button_wrapper col-xl-3">
              <a  href="https://x.com/nvzt_atly" className="btn btn-outline-warning btn-lg text-light fs-1 w-100"> Twitter <i
                  className="fa-brands fa-x-twitter" target="_blank"></i></a>
            </div>
            <div className="button_wrapper col-xl-3">
              <a className="btn btn-outline-warning btn-lg text-light fs-1 w-100" target="_blank">Medium <i
                  className="fa-brands fa-medium"></i></a>
            </div>
          </div>
        </div>
      </footer>
    )
}
export default Footer