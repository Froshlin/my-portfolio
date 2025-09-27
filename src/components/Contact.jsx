import React, { useState, useRef } from "react";
import { Mail, Github, Linkedin, Send } from "lucide-react";

function Contact() {
  const [formData, setFormData] = useState({
    from_name: '',
    from_email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  const form = useRef();

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    try {
      const SERVICE_ID = 'service_7c1cu4i';
      const TEMPLATE_ID = 'template_nwm9ehs';
      const PUBLIC_KEY = 'P2Tp0AV8docHIPMch';
    
      const emailjs = (await import('@emailjs/browser')).default;
      const result = await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY);
      console.log('Email sent successfully:', result.text);

      setSubmitMessage('Message sent successfully! I\'ll get back to you soon.');
      setFormData({ from_name: '', from_email: '', message: '' });
    } catch (error) {
      console.error('Failed to send email:', error);
      setSubmitMessage('Failed to send message. Please try again or contact me directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div 
      id="contact" 
      className="w-full bg-[#111827] text-white py-16 sm:py-20 lg:py-28 px-4 sm:px-6 md:px-12 lg:px-20"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8 sm:mb-12 lg:mb-16 text-center">
          Get In Touch
        </h2>
        
        <div className="flex flex-col lg:flex-row items-start justify-between gap-8 lg:gap-16">
          {/* Contact Form */}
          <div className="w-full lg:w-[55%]">
            <div className="mb-6 lg:mb-8">
              <h3 className="text-xl sm:text-2xl font-semibold mb-3 text-blue-400">
                Send Me a Message
              </h3>
              <p className="text-gray-300 text-base sm:text-lg">
                Have a project in mind or want to collaborate? I'd love to hear from you!
              </p>
            </div>
            
            <form
              ref={form}
              onSubmit={sendEmail}
              className="space-y-4 sm:space-y-6"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <input
                  type="text"
                  name="from_name"
                  value={formData.from_name}
                  onChange={handleInputChange}
                  className="bg-[#1f2937] border-2 border-[#374151] focus:border-blue-500 outline-none px-4 py-3 sm:py-4 rounded-lg text-white placeholder-gray-400 transition-colors duration-300 w-full"
                  placeholder="Your Name"
                  required
                />
                <input
                  type="email"
                  name="from_email"
                  value={formData.from_email}
                  onChange={handleInputChange}
                  className="bg-[#1f2937] border-2 border-[#374151] focus:border-blue-500 outline-none px-4 py-3 sm:py-4 rounded-lg text-white placeholder-gray-400 transition-colors duration-300 w-full"
                  placeholder="Your Email"
                  required
                />
              </div>
              
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows="6"
                className="bg-[#1f2937] border-2 border-[#374151] focus:border-blue-500 outline-none px-4 py-3 sm:py-4 rounded-lg text-white placeholder-gray-400 transition-colors duration-300 w-full resize-none"
                placeholder="Your Message"
                required
              />
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 disabled:cursor-not-allowed text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 disabled:hover:scale-100 flex items-center gap-2 w-full sm:w-auto justify-center"
              >
                <Send size={20} />
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>

              {submitMessage && (
                <div className={`p-4 rounded-lg ${submitMessage.includes('successfully') 
                  ? 'bg-green-800/20 border border-green-600 text-green-400' 
                  : 'bg-red-800/20 border border-red-600 text-red-400'
                }`}>
                  {submitMessage}
                </div>
              )}
            </form>
          </div>

          {/* Contact Information */}
          <div className="w-full lg:w-[40%]">
            <div className="mb-6 lg:mb-8">
              <h3 className="text-xl sm:text-2xl font-semibold mb-3 text-blue-400">
                Let's Connect
              </h3>
              <p className="text-gray-300 text-base sm:text-lg">
                Feel free to reach out through any of these channels. I'm always open to discussing new opportunities.
              </p>
            </div>
            
            <div className="space-y-6 sm:space-y-8">
              <div className="flex items-center gap-4 sm:gap-6 group hover:bg-gray-800/30 p-3 sm:p-4 rounded-lg transition-all duration-300">
                <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 bg-blue-600/20 rounded-full flex items-center justify-center group-hover:bg-blue-600/30 transition-colors duration-300">
                  <Mail size={24} className="text-blue-400" />
                </div>
                <div>
                  <p className="font-medium text-white mb-1">Email</p>
                  <a 
                    href="mailto:onitimilehin87@gmail.com"
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-300 text-sm sm:text-base break-all"
                  >
                    onitimilehin87@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 sm:gap-6 group hover:bg-gray-800/30 p-3 sm:p-4 rounded-lg transition-all duration-300">
                <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 bg-blue-600/20 rounded-full flex items-center justify-center group-hover:bg-blue-600/30 transition-colors duration-300">
                  <Github size={24} className="text-blue-400" />
                </div>
                <div>
                  <p className="font-medium text-white mb-1">GitHub</p>
                  <a 
                    href="https://github.com/Froshlin"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-300 text-sm sm:text-base"
                  >
                    github.com/Froshlin
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 sm:gap-6 group hover:bg-gray-800/30 p-3 sm:p-4 rounded-lg transition-all duration-300">
                <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 bg-blue-600/20 rounded-full flex items-center justify-center group-hover:bg-blue-600/30 transition-colors duration-300">
                  <Linkedin size={24} className="text-blue-400" />
                </div>
                <div>
                  <p className="font-medium text-white mb-1">LinkedIn</p>
                  <a 
                    href="https://www.linkedin.com/in/joshua-oni-1b633a244"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-300 text-sm sm:text-base break-all"
                  >
                    linkedin.com/in/joshua-oni
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;