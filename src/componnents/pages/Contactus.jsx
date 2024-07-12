import emailjs from '@emailjs/browser'
import alertify from 'alertifyjs';
import 'alertifyjs/build/css/alertify.css'
import { useNavigate } from 'react-router-dom';
  function Contactus() {
  const navegate=useNavigate()
  const sendEmail  = (e) => {
    e.preventDefault();
      emailjs
      .sendForm("gmail", "template_d45rx6w", e.target, "7pX7zgu_ycfk27yqA");
    e.target.reset();
    alertify.success('Email send success..!');
    navegate('/')
};


  return (
    <>
      <section className="contactus-section">
        <form className=" mx-auto text-center py-5 w-50" id='form' onSubmit={sendEmail} >
          <div className="alert alert-danger-1 py-2 rounded-4 w-75 mx-auto">
            <h4 className="px-3 mx-auto text-white change-font">
              If you want contact-us please do not hesitate..!
            </h4>
          </div>
          <input
            type="text"
            name="from_name"
            id="from_name"
            placeholder="Your name..."
            className="change-font fw-medium form-control mx-auto w-50 mt-5"
          />
          <input
            type="text"
            name="email"
            id="email"
            placeholder="Your Email..."
            className="change-font fw-medium form-control mx-auto w-50 mt-3"
          />
          <input
            type="text"
            name="subject"
            id="subject"
            placeholder="Msg subject..."
            className="change-font fw-medium form-control mx-auto w-50 mt-3"
          />
          <textarea
            placeholder="Msg...."
            name="message"
            id='message'
            className="change-font form-control w-50 mx-auto mt-3 fw-medium"
          />
          <input
            type="submit"
            value="Send"
            className="btn btn-primary mt-4 change-font fw-medium py-2 px-3 rounded-3"
          />
        </form>
      </section>
    </>
  )
};


export default Contactus;
