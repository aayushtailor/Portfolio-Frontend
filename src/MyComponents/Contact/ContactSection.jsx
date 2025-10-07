import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Send,
  Loader2,
  CheckCircle,
  XCircle,
  Mail,
  MapPin,
} from "lucide-react";
import { toast } from "react-hot-toast";
import { ParticleBackground } from "../../components/ui/particle-background";
import { AnimatedText } from "../../components/ui/animated-text";

// 🧠 Flask backend URL
const API_URL = "https://developer-portfolio-l936.onrender.com/";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);
  const [focusedField, setFocusedField] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFocus = (field) => setFocusedField(field);
  const handleBlur = () => setFocusedField(null);
  const resetForm = () => {
    setFormData({ name: "", email: "", message: "" });
    setSubmitted(false);
    setError(false);
  };

  // ✅ Send data to Flask backend
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(false);

    try {
      const response = await fetch(`${API_URL}/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      setLoading(false);

      if (response.ok && result.success) {
        setSubmitted(true);
        toast.success("Message sent successfully!");
      } else {
        setError(true);
        toast.error("Failed to send message. Please try again later.");
      }
    } catch (err) {
      setLoading(false);
      setError(true);
      toast.error("Error: Could not reach the server.");
      console.error("Contact form error:", err);
    }
  };

  const inputClasses = (field) => `
    w-full px-4 py-3 border rounded-lg transition-all
    ${
      focusedField === field
        ? "border-black ring-1 ring-black"
        : "border-gray-200"
    }
    focus:ring-black focus:border-black
  `;

  return (
    <section id="contact" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background effect */}
      <ParticleBackground
        quantity={15}
        staticity={20}
        ease={40}
        color="#000000"
        className="opacity-30 z-0"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Left side info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.span
              className="block mb-3 text-sm font-medium tracking-wider"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              GET IN TOUCH
            </motion.span>

            <AnimatedText
              text="Let's build something amazing together"
              className="text-3xl md:text-5xl font-bold mb-6"
              once={true}
              delay={0.1}
            />

            <motion.p
              className="text-gray-600 mb-8 md:text-lg md:pr-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              I'm always open to collaborating on exciting projects or freelance
              work. Feel free to reach out if you’d like to discuss something
              creative!
            </motion.p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-white p-3 rounded-full shadow-sm">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-medium mb-1">Email</h3>
                  <a
                    href="mailto:aayushtailor16@gmail.com"
                    className="text-gray-600 hover:text-black transition-colors"
                  >
                    aayushtailor16@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-white p-3 rounded-full shadow-sm">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-medium mb-1">Location</h3>
                  <p className="text-gray-600">Jaipur, India</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right side form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl shadow-sm p-8 md:p-10 relative overflow-hidden"
          >
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0 flex flex-col items-center justify-center"
                >
                  <CheckCircle className="text-green-600 w-16 h-16 mb-4" />
                  <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
                  <p className="text-gray-600 mb-4 text-center px-4">
                    Thanks for reaching out — I’ll get back to you soon.
                  </p>
                  <button
                    onClick={resetForm}
                    className="px-6 py-3 bg-black text-white rounded-lg font-medium"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      onFocus={() => handleFocus("name")}
                      onBlur={handleBlur}
                      placeholder="Your name"
                      required
                      className={inputClasses("name")}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      onFocus={() => handleFocus("email")}
                      onBlur={handleBlur}
                      placeholder="your@email.com"
                      required
                      className={inputClasses("email")}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      onFocus={() => handleFocus("message")}
                      onBlur={handleBlur}
                      placeholder="Tell me about your project..."
                      rows={5}
                      required
                      className={`${inputClasses("message")} resize-none`}
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={loading}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`w-full py-4 px-6 bg-black text-white rounded-lg font-medium flex items-center justify-center gap-2 ${
                      loading ? "opacity-70" : ""
                    }`}
                  >
                    {loading ? (
                      <>
                        <Loader2 size={18} className="animate-spin" />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <span>Send message</span>
                        <Send size={18} />
                      </>
                    )}
                  </motion.button>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
