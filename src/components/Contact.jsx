import React, { useState, useRef } from "react";
import { Mail, Github, Linkedin, Send } from "lucide-react";
import Reveal from "./Reveal";

function Contact() {
  const [formData, setFormData] = useState({
    from_name: "",
    from_email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");
  const form = useRef();

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage("");

    try {
      const SERVICE_ID = "service_7c1cu4i";
      const TEMPLATE_ID = "template_nwm9ehs";
      const PUBLIC_KEY = "P2Tp0AV8docHIPMch";

      const emailjs = (await import("@emailjs/browser")).default;
      const result = await emailjs.sendForm(
        SERVICE_ID,
        TEMPLATE_ID,
        form.current,
        PUBLIC_KEY
      );
      console.log("Email sent successfully:", result.text);

      setSubmitMessage("Message sent successfully! I'll get back to you soon.");
      setFormData({ from_name: "", from_email: "", message: "" });
    } catch (error) {
      console.error("Failed to send email:", error);
      setSubmitMessage("Something went wrong sending your message.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      id="contact"
      className="w-full bg-paper text-ink py-16 sm:py-20 lg:py-28 px-4 sm:px-6 md:px-12 lg:px-20"
    >
      <div className="max-w-7xl mx-auto">
        <Reveal>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold mb-8 sm:mb-12 lg:mb-16 text-center">
            Get In Touch
          </h2>
        </Reveal>

        <div className="flex flex-col lg:flex-row items-start justify-between gap-8 lg:gap-16">
          {/* Contact Form */}
          <Reveal className="w-full lg:w-[55%]">
            <div className="mb-6 lg:mb-8">
              <h3 className="font-serif text-xl sm:text-2xl font-semibold mb-3 text-accent">
                Send Me a Message
              </h3>
              <p className="text-muted text-base sm:text-lg">
                Have a project in mind or want to collaborate? I'd love to
                hear from you!
              </p>
            </div>

            <form ref={form} onSubmit={sendEmail} className="space-y-4 sm:space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <input
                  type="text"
                  name="from_name"
                  value={formData.from_name}
                  onChange={handleInputChange}
                  className="bg-ivory border-2 border-line focus:border-accent outline-none px-4 py-3 sm:py-4 rounded-lg text-ink placeholder-muted transition-colors duration-300 w-full"
                  placeholder="Your Name"
                  required
                />
                <input
                  type="email"
                  name="from_email"
                  value={formData.from_email}
                  onChange={handleInputChange}
                  className="bg-ivory border-2 border-line focus:border-accent outline-none px-4 py-3 sm:py-4 rounded-lg text-ink placeholder-muted transition-colors duration-300 w-full"
                  placeholder="Your Email"
                  required
                />
              </div>

              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows="6"
                className="bg-ivory border-2 border-line focus:border-accent outline-none px-4 py-3 sm:py-4 rounded-lg text-ink placeholder-muted transition-colors duration-300 w-full resize-none"
                placeholder="Your Message"
                required
              />

              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-accent hover:bg-accent-light disabled:bg-muted disabled:cursor-not-allowed text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 disabled:hover:scale-100 flex items-center gap-2 w-full sm:w-auto justify-center"
              >
                <Send size={20} />
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>

              {submitMessage && (
                <div
                  className={`p-4 rounded-lg border ${
                    submitMessage.includes("successfully")
                      ? "bg-accent-soft border-accent/30 text-accent-light"
                      : "bg-red-50 border-red-200 text-red-700"
                  }`}
                >
                  {submitMessage}
                  {!submitMessage.includes("successfully") && (
                    <>
                      {" "}
                      You can also email me directly at{" "}
                      <a
                        href="mailto:onitimilehin87@gmail.com"
                        className="underline font-medium"
                      >
                        onitimilehin87@gmail.com
                      </a>
                      .
                    </>
                  )}
                </div>
              )}
            </form>
          </Reveal>

          {/* Contact Information */}
          <Reveal delay={0.12} className="w-full lg:w-[40%]">
            <div className="mb-6 lg:mb-8">
              <h3 className="font-serif text-xl sm:text-2xl font-semibold mb-3 text-accent">
                Let's Connect
              </h3>
              <p className="text-muted text-base sm:text-lg">
                Feel free to reach out through any of these channels. I'm
                always open to discussing new opportunities.
              </p>
            </div>

            <div className="space-y-6 sm:space-y-8">
              <div className="flex items-center gap-4 sm:gap-6 group hover:bg-ivory p-3 sm:p-4 rounded-lg transition-all duration-300">
                <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 bg-accent-soft rounded-full flex items-center justify-center">
                  <Mail size={24} className="text-accent" />
                </div>
                <div>
                  <p className="font-medium text-ink mb-1">Email</p>
                  <a
                    href="mailto:onitimilehin87@gmail.com"
                    className="text-muted hover:text-accent transition-colors duration-300 text-sm sm:text-base break-all"
                  >
                    onitimilehin87@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 sm:gap-6 group hover:bg-ivory p-3 sm:p-4 rounded-lg transition-all duration-300">
                <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 bg-accent-soft rounded-full flex items-center justify-center">
                  <Github size={24} className="text-accent" />
                </div>
                <div>
                  <p className="font-medium text-ink mb-1">GitHub</p>
                  <a
                    href="https://github.com/Froshlin"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted hover:text-accent transition-colors duration-300 text-sm sm:text-base"
                  >
                    github.com/Froshlin
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 sm:gap-6 group hover:bg-ivory p-3 sm:p-4 rounded-lg transition-all duration-300">
                <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 bg-accent-soft rounded-full flex items-center justify-center">
                  <Linkedin size={24} className="text-accent" />
                </div>
                <div>
                  <p className="font-medium text-ink mb-1">LinkedIn</p>
                  <a
                    href="https://www.linkedin.com/in/joshua-oni-1b633a244"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted hover:text-accent transition-colors duration-300 text-sm sm:text-base break-all"
                  >
                    linkedin.com/in/joshua-oni
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  );
}

export default Contact;
