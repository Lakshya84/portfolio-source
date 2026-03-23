import React, { useEffect, useRef, useState } from "react";
import {
  Send,
  Mail,
  MapPin,
  Phone,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import emailjs from "emailjs-com";

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");
  const [errors, setErrors] = useState<{
    name?: string;
    email?: string;
    message?: string;
  }>({});
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const validateForm = () => {
    const newErrors: { name?: string; email?: string; message?: string } = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    if (!validateForm()) {
      setStatus("idle"); 
      return;
    }

    try {
      await emailjs.send(
        "service_hxbwoio",
        "template_3q66qub",
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
          title: "New Inquiry",
        },
        "9uEzzE-yxHSh6wwWs",
      );

      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("EmailJS Error:", error);
      setStatus("error");
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-32 bg-beige-50 dark:bg-slate-950 transition-colors duration-700"
    >
      <div className="max-w-6xl mx-auto px-8">
        <div
          className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <div className="text-center mb-24">
            <h2 className="font-display text-6xl md:text-7xl font-semibold mb-6 text-beige-900 dark:text-beige-100 tracking-tightest">
              Get In Touch
            </h2>
            <div className="w-20 h-0.5 bg-gradient-to-r from-transparent via-lavender-400 to-transparent mx-auto"></div>
          </div>

          <div className="grid lg:grid-cols-5 gap-16">
            <div className="lg:col-span-2 space-y-12">
              <div>
                <h3 className="font-display text-3xl font-semibold text-beige-900 dark:text-beige-100 mb-6 tracking-tight">
                  Let's Work Together
                </h3>
                <p className="text-beige-600 dark:text-beige-400 leading-relaxed font-light text-lg">
                  I'm always open to discussing new projects, creative ideas, or
                  opportunities to be part of your vision. Feel free to reach
                  out.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-5 group">
                  <div className="p-4 bg-white/70 dark:bg-white/10 rounded-xl border border-beige-200/60 dark:border-white/10 group-hover:border-lavender-300 dark:group-hover:border-lavender-700/30 group-hover:scale-110 transition-all duration-500 shadow-elegant">
                    <Mail className="w-6 h-6 text-lavender-600 dark:text-lavender-400" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium text-beige-800 dark:text-beige-200 mb-2">
                      Email
                    </h4>
                    <a
                      href="mailto:lakshyapandey787@gmail.com"
                      className="text-beige-600 dark:text-beige-400 hover:text-lavender-600 dark:hover:text-lavender-400 transition-colors font-light link-underline text-sm break-all"
                    >
                      lakshyapandey787@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-5 group">
                  <div className="p-4 bg-white/70 dark:bg-white/10 rounded-xl border border-beige-200/60 dark:border-white/10 group-hover:border-lavender-300 dark:group-hover:border-lavender-700/30 group-hover:scale-110 transition-all duration-500 shadow-elegant">
                    <Phone className="w-6 h-6 text-lavender-600 dark:text-lavender-400" />
                  </div>
                  <div>
                    <h4 className="font-medium text-beige-800 dark:text-beige-200 mb-2">
                      Phone
                    </h4>
                    <a
                      href="tel:+919559691423"
                      className="text-beige-600 dark:text-beige-400 hover:text-lavender-600 dark:hover:text-lavender-400 transition-colors font-light link-underline text-sm"
                    >
                      (+91) 955-969-1423
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-5 group">
                  <div className="p-4 bg-white/70 dark:bg-white/10 rounded-xl border border-beige-200/60 dark:border-white/10 group-hover:border-lavender-300 dark:group-hover:border-lavender-700/30 group-hover:scale-110 transition-all duration-500 shadow-elegant">
                    <MapPin className="w-6 h-6 text-lavender-600 dark:text-lavender-400" />
                  </div>
                  <div>
                    <h4 className="font-medium text-beige-800 dark:text-beige-200 mb-2">
                      Location
                    </h4>
                    <p className="text-beige-600 dark:text-beige-400 font-light text-sm">
                      Uttar Pradesh, India
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="lg:col-span-3 space-y-6">
              <div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className={`w-full px-6 py-5 bg-white/70 dark:bg-white/10 border ${errors.name ? "border-red-400" : "border-beige-200/60 dark:border-white/10"} rounded-2xl text-beige-800 dark:text-beige-200 placeholder-beige-400 dark:placeholder-beige-600 focus:outline-none focus:border-lavender-400 dark:focus:border-lavender-600 focus:bg-white dark:focus:bg-white/15 transition-all duration-300 backdrop-blur-xl font-light shadow-elegant`}
                />
                {errors.name && (
                  <p className="mt-2 text-sm text-red-500 font-light">
                    {errors.name}
                  </p>
                )}
              </div>

              <div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  className={`w-full px-6 py-5 bg-white/70 dark:bg-white/10 border ${errors.email ? "border-red-400" : "border-beige-200/60 dark:border-white/10"} rounded-2xl text-beige-800 dark:text-beige-200 placeholder-beige-400 dark:placeholder-beige-600 focus:outline-none focus:border-lavender-400 dark:focus:border-lavender-600 focus:bg-white dark:focus:bg-white/15 transition-all duration-300 backdrop-blur-xl font-light shadow-elegant`}
                />
                {errors.email && (
                  <p className="mt-2 text-sm text-red-500 font-light">
                    {errors.email}
                  </p>
                )}
              </div>

              <div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  rows={6}
                  className={`w-full px-6 py-5 bg-white/70 dark:bg-white/10 border ${errors.message ? "border-red-400" : "border-beige-200/60 dark:border-white/10"} rounded-2xl text-beige-800 dark:text-beige-200 placeholder-beige-400 dark:placeholder-beige-600 focus:outline-none focus:border-lavender-400 dark:focus:border-lavender-600 focus:bg-white dark:focus:bg-white/15 transition-all duration-300 resize-none backdrop-blur-xl font-light shadow-elegant`}
                />
                {errors.message && (
                  <p className="mt-2 text-sm text-red-500 font-light">
                    {errors.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full px-12 py-5 bg-gradient-to-r from-lavender-600 to-softpink-600 dark:from-lavender-500 dark:to-softpink-500 text-white rounded-2xl font-medium hover:shadow-elegant-lg transition-all duration-500 hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3 group"
              >
                {status === "sending" ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent"></div>
                    Sending...
                  </>
                ) : status === "success" ? (
                  <>
                    <CheckCircle className="w-5 h-5" />
                    Message Sent!
                  </>
                ) : (
                  <>
                    Send Message
                    <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>

              {status === "error" && (
                <div className="flex items-center gap-3 p-5 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800/50 rounded-2xl">
                  <AlertCircle className="w-5 h-5 text-red-500" />
                  <p className="text-red-600 dark:text-red-400 text-sm font-light">
                    Failed to send message. Please try again or email directly.
                  </p>
                </div>
              )}

              {status === "success" && (
                <div className="flex items-center gap-3 p-5 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800/50 rounded-2xl">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <p className="text-green-600 dark:text-green-400 text-sm font-light">
                    Message sent successfully! I'll get back to you soon.
                  </p>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
