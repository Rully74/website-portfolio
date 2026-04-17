import "./Contact.css";
import { MdOutlineEmail, MdOutlineLocationOn } from "react-icons/md";
import { LuSendHorizontal } from "react-icons/lu";
import { FaLinkedin, FaGithub, FaYoutube } from "react-icons/fa";

function Contact() {
  const isFormEnabled = false;
  return (
    <section id="contact" className="contact">
      <div className="contact-info-container">
        <h1 className="contact-title">
          <span className="contact-title-line">Let's build</span>
          <span className="contact-title-highlight">something great.</span>
        </h1>
        <p className="contact-description">
          I'm currently open to new opportunities and collaborations. Whether
          you have a question or just want to say hi, my inbox is always open.
        </p>

        <div className="contact-tag">
          <div className="contact-tag-icon">
            <MdOutlineEmail className="icon" />
          </div>
          <div className="contact-tag-info">
            <p className="contact-tag-title">EMAIL ME</p>
            <p className="contact-tag-detail">julianhruizo@gmail.com</p>
          </div>
        </div>

        <div className="contact-tag">
          <div className="contact-tag-icon">
            <MdOutlineLocationOn className="icon" />
          </div>
          <div className="contact-tag-info">
            <p className="contact-tag-title">LOCATION</p>
            <p className="contact-tag-detail">Cali, Colombia</p>
          </div>
        </div>

        <div className="social-links">
          <p className="social-links-title">SOCIAL CONNECTION</p>
          <div className="social-links-container">
            <a
              href="https://www.linkedin.com/in/julianruizo/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              title="LinkedIn"
              className="social-link"
            >
              <FaLinkedin className="social-icon" />
            </a>
            <a
              href="https://github.com/Rully74"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              title="GitHub"
              className="social-link"
            >
              <FaGithub className="social-icon" />
            </a>
            <a
              href="https://www.youtube.com/@rully7439"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              title="YouTube"
              className="social-link"
            >
              <FaYoutube className="social-icon" />
            </a>
          </div>
        </div>
      </div>

      <div className="contact-form-container">
        {isFormEnabled && (
          <form className="contact-form">
            <div className="contact-name">
              <div>
                <p className="contact-placeholder">First Name</p>
                <input
                  id="firstName"
                  type="text"
                  placeholder="John"
                  className="input contact-input"
                />
              </div>
              <div>
                <p className="contact-placeholder">Last Name</p>
                <input
                  id="lastName"
                  type="text"
                  placeholder="Doe"
                  className="input contact-input"
                />
              </div>
            </div>
            <div>
              <p className="contact-placeholder">Email Address</p>
              <input
                id="email"
                type="email"
                placeholder="john@example.com"
                className="input contact-input"
              />
            </div>
            <div>
              <p className="contact-placeholder">How can I help you?</p>
              <textarea
                id="message"
                placeholder="Tell me about your project or just say hi..."
                className="input contact-textarea"
                maxLength={400}
              ></textarea>
            </div>
            <button type="submit" className="contact-button">
              <p>Send Message</p>
              <LuSendHorizontal className="send-icon" />
            </button>
            <p className="contact-note">
              Your information will only be used to contact you back regarding
              your message.
            </p>
          </form>
        )}
      </div>
    </section>
  );
}

export { Contact };
