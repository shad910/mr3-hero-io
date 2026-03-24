import React, { useState } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        setFormData({ name: '', email: '', subject: '', message: '' });
    };

    const contactInfo = [
        {
            icon: FaEnvelope,
            title: "Email Us",
            details: ["support@hero.io", "business@hero.io"],
            color: "text-blue-600"
        },
        {
            icon: FaPhone,
            title: "Call Us",
            details: ["+1 (555) 123-4567", "+1 (555) 987-6543"],
            color: "text-green-600"
        },
        {
            icon: FaMapMarkerAlt,
            title: "Visit Us",
            details: ["123 Tech Street", "Silicon Valley, CA 94043"],
            color: "text-red-600"
        }
    ];

    const socialLinks = [
        { icon: FaGithub, url: "https://github.com/shad910", label: "GitHub" },
        { icon: FaLinkedin, url: "https://www.linkedin.com/in/md-sahadot-hossen-shad-838251345/", label: "LinkedIn" },
        { icon: FaTwitter, url: "https://x.com/shadshs91", label: "Twitter" }
    ];

    return (
        <div className="min-h-screen bg-base-200">
            {/* Hero Section */}
            <section 
                className="bg-linear-to-r from-[#632EE3] to-[#9F62F2] py-20 px-4 text-white"
                data-aos="fade-down"
                data-aos-duration="1000"
            >
                <div className="max-w-7xl mx-auto text-center">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6" data-aos="zoom-in" data-aos-delay="200">
                        Get In <span className="text-yellow-300">Touch</span>
                    </h1>
                    <p className="text-lg md:text-xl opacity-90 max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="400">
                        Have questions, feedback, or want to collaborate? We'd love to hear from you.
                        Reach out and let's start a conversation.
                    </p>
                </div>
            </section>

            {/* Contact Section */}
            <section className="py-16 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

                        {/* Contact Form */}
                        <div 
                            className="bg-white rounded-2xl p-8 shadow-xl"
                            data-aos="fade-right"
                            data-aos-duration="1000"
                        >
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6" data-aos="fade-up" data-aos-delay="200">Send us a Message</h2>

                            <form onSubmit={handleSubmit} className="space-y-6" data-aos="fade-up" data-aos-delay="400">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#632EE3] focus:border-transparent transition-all duration-200"
                                            placeholder="Your name"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#632EE3] focus:border-transparent transition-all duration-200"
                                            placeholder="your@email.com"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                                    <input
                                        type="text"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#632EE3] focus:border-transparent transition-all duration-200"
                                        placeholder="What's this about?"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows={6}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#632EE3] focus:border-transparent transition-all duration-200 resize-none"
                                        placeholder="Tell us more about your inquiry..."
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-white font-bold py-3 px-6 rounded-lg hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5"
                                >
                                    Send Message
                                </button>
                            </form>
                        </div>

                        {/* Contact Info */}
                        <div className="space-y-8" data-aos="fade-left" data-aos-duration="1000">
                            <div data-aos="fade-up" data-aos-delay="200">
                                <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">Contact Information</h2>
                                <p className="text-gray-600 mb-8">
                                    Choose the most convenient way to reach us. We're here to help and typically
                                    respond within 24 hours.
                                </p>
                            </div>

                            {/* Contact Cards */}
                            <div className="space-y-6">
                                {contactInfo.map((info, index) => (
                                    <div 
                                        key={index} 
                                        className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                                        data-aos="fade-up"
                                        data-aos-delay={`${index * 200}`}
                                    >
                                        <div className={`p-3 rounded-lg bg-gray-50 ${info.color}`}>
                                            <info.icon className="text-xl" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-gray-800 mb-2">{info.title}</h3>
                                            {info.details.map((detail, idx) => (
                                                <p key={idx} className="text-gray-600">{detail}</p>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Social Links */}
                            <div className="bg-white rounded-xl p-6 shadow-lg" data-aos="fade-up" data-aos-delay="200">
                                <h3 className="font-bold text-gray-800 mb-4">Follow Us</h3>
                                <div className="flex gap-4">
                                    {socialLinks.map((social, index) => (
                                        <a
                                            key={index}
                                            href={social.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="p-3 bg-gray-50 rounded-lg hover:bg-linear-to-r hover:from-[#632EE3] hover:to-[#9F62F2] hover:text-white transition-all duration-300 group"
                                            aria-label={social.label}
                                            data-aos="zoom-in"
                                            data-aos-delay={`${index * 200}`}
                                        >
                                            <social.icon className="text-xl group-hover:text-white" />
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-16 px-4 bg-white" data-aos="fade-up" data-aos-duration="1000">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-12" data-aos="fade-up" data-aos-delay="200">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Frequently Asked Questions</h2>
                        <div className="w-24 h-1 bg-linear-to-r from-[#632EE3] to-[#9F62F2] mx-auto rounded-full"></div>
                    </div>

                    <div className="space-y-6">
                        <div className="bg-gray-50 rounded-lg p-6" data-aos="fade-up" data-aos-delay="300">
                            <h3 className="font-bold text-gray-800 mb-2">How can I download your apps?</h3>
                            <p className="text-gray-600">Visit our Apps page or check the Google Play Store and Apple App Store for our complete collection.</p>
                        </div>

                        <div className="bg-gray-50 rounded-lg p-6" data-aos="fade-up" data-aos-delay="500">
                            <h3 className="font-bold text-gray-800 mb-2">Do you offer custom app development?</h3>
                            <p className="text-gray-600">Yes! We specialize in custom mobile app development. Contact us with your project details.</p>
                        </div>

                        <div className="bg-gray-50 rounded-lg p-6" data-aos="fade-up" data-aos-delay="700">
                            <h3 className="font-bold text-gray-800 mb-2">How long does app development take?</h3>
                            <p className="text-gray-600">Development time varies by project complexity, but most apps take 3-6 months from concept to launch.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ContactUs;