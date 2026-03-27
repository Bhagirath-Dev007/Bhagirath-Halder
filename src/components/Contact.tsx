import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>

        <div className="contact-flex">
          {/* LEFT */}
          <div className="contact-box">
            <h4>Email</h4>
            <p>
              <a href="mailto:bhagirathhalder59@gmail.com" data-cursor="disable">
                bhagirathhalder59@gmail.com
              </a>
            </p>

            <h4>Phone</h4>
            <p>
              <a href="tel:+918920077615" data-cursor="disable">
                +91-8920077615
              </a>
            </p>

            <h4>Location</h4>
            <p>Ghaziabad, Uttar Pradesh</p>
          </div>

          {/* CENTER */}
          <div className="contact-box">
            <h4>Social</h4>

            <a
              href="https://www.linkedin.com/in/bhagirath-halder-5b05b3233/"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              LinkedIn <MdArrowOutward />
            </a>

            <a
              href="https://github.com/Bhagirath-1/"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              GitHub <MdArrowOutward />
            </a>
          </div>

          {/* RIGHT */}
          <div className="contact-box">
            <h2>
              Designed and Developed <br /> by <span>Bhagirath Halder</span>
            </h2>

            <h5>
              <MdCopyright /> 2026
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;