function Footer() {
  return (
    <>
      <footer className="footer-section pt-4 pb-2 px-4">
        <div className="row w-100">
          <div className="col-4 text-center">
            <h6 className="change-font text-light fw-bold underline-head-footer ">
              About website
            </h6>
            <p className="text-light change-font mt-2 desc-footer">
              Movies is a dedicated website for movie enthusiasts, offering
              the latest trailers for upcoming films from around the world.
            </p>
          </div>
          <div className="col-4 text-center ">
         <h6 className="underline-head-footer text-light change-font fw-bold">contact with devolper</h6>
            <div className="gap-3 d-flex justify-content-center align-items-center mt-4 ">
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=eslam.o.osama2003@gmail.com" target="_blank">
          <i className="fa-brands fa-google text-danger fs-4"></i>
            </a><a href="https://github.com/Esllam-Osama" target="_blank">
          <i className="fa-brands fa-github text-danger fs-3"></i>
            </a><a href="https://wa.link/cxohth" target="_blank">
          <i className="fa-brands fa-whatsapp text-danger fs-3"></i>
            </a><a href="https://www.linkedin.com/in/eslam-osama-42123930b/" target="_blank">
          <i className="fa-brands fa-linkedin text-danger fs-4"></i>
            </a>
         </div>
          </div>
          <div className="col-4 text-center ">
            <h6 className="underline-head-footer text-light change-font fw-bold">copyright</h6>
            <p className="text-light change-font mt-2 desc-footer">All copyrights &copy;, reserved 2025. No part may be reproduced or used without prior permission from the author.</p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
