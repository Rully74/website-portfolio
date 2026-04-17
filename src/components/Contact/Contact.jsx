import { useState } from "react";
import "./Contact.css";
import { MdOutlineEmail, MdOutlineLocationOn } from "react-icons/md";
import { LuSendHorizontal } from "react-icons/lu";
import { FaLinkedin, FaGithub, FaYoutube } from "react-icons/fa";

const MAX_SUBMISSIONS = 3;
const WINDOW_MS = 60 * 60 * 1000;

function checkLocalRateLimit() {
  const stored = localStorage.getItem("contact_submissions");
  const submissions = stored ? JSON.parse(stored) : [];
  const now = Date.now();
  const recent = submissions.filter((t) => now - t < WINDOW_MS);
  return { recent, allowed: recent.length < MAX_SUBMISSIONS };
}

function recordSubmission() {
  const { recent } = checkLocalRateLimit();
  localStorage.setItem(
    "contact_submissions",
    JSON.stringify([...recent, Date.now()]),
  );
}

function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("idle");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!checkLocalRateLimit().allowed) {
      setStatus("rate-limited");
      return;
    }

    setStatus("sending");

    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.status === 429) {
        setStatus("rate-limited");
        return;
      }

      if (!res.ok) throw new Error("Failed to send");

      recordSubmission();
      setStatus("sent");
      setFormData({ firstName: "", lastName: "", email: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

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
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="contact-name">
            <div>
              <p className="contact-placeholder">First Name</p>
              <input
                name="firstName"
                type="text"
                placeholder="John"
                className="input contact-input"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <p className="contact-placeholder">Last Name</p>
              <input
                name="lastName"
                type="text"
                placeholder="Doe"
                className="input contact-input"
                value={formData.lastName}
                onChange={handleChange}
              />
            </div>
          </div>
          <div>
            <p className="contact-placeholder">Email Address</p>
            <input
              name="email"
              type="email"
              placeholder="john@example.com"
              className="input contact-input"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <p className="contact-placeholder">How can I help you?</p>
            <textarea
              name="message"
              placeholder="Tell me about your project or just say hi..."
              className="input contact-textarea"
              maxLength={400}
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="contact-button"
            disabled={status === "sending"}
          >
            <p>
              {status === "sending"
                ? "Sending..."
                : status === "sent"
                  ? "Sent!"
                  : "Send Message"}
            </p>
            <LuSendHorizontal className="send-icon" />
          </button>
          {status === "sent" && (
            <p className="contact-status contact-status--success">
              Message sent successfully! I'll get back to you soon.
            </p>
          )}
          {status === "rate-limited" && (
            <p className="contact-status contact-status--error">
              You've reached the message limit. Please try again later or email
              me directly.
            </p>
          )}
          {status === "error" && (
            <p className="contact-status contact-status--error">
              Something went wrong. Please try again or email me directly.
            </p>
          )}
          <p className="contact-note">
            Your information will only be used to contact you back regarding
            your message.
          </p>
        </form>
      </div>
    </section>
  );
}

export { Contact };
