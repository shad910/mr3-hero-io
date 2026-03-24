import React from 'react';
import { FaUsers, FaCode, FaRocket, FaAward } from 'react-icons/fa';

const AboutUs = () => {
    const stats = [
        { icon: FaUsers, number: "10M+", label: "Happy Users" },
        { icon: FaCode, number: "132+", label: "Apps Built" },
        { icon: FaRocket, number: "5+", label: "Years Experience" },
        { icon: FaAward, number: "50+", label: "Awards Won" }
    ];

    const team = [
        { name: "Dark", role: "CEO & Founder", image: "https://i.ibb.co.com/8gLRbb4g/owner.png" },
        { name: "Shad", role: "Lead Developer", image: "https://i.ibb.co.com/C5Jh3DM3/develpoer.png" },
        { name: "Red", role: "UI/UX Designer", image: "https://i.ibb.co.com/JR7QtwVq/ui-ux.png" }
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
                        About <span className="text-yellow-300">HERO.IO</span>
                    </h1>
                    <p className="text-lg md:text-xl opacity-90 max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="400">
                        We are passionate creators building the future of mobile applications,
                        one innovative solution at a time.
                    </p>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-16 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5 md:gap-4">
                        {stats.map((stat, index) => (
                            <div 
                                key={index} 
                                className="bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                                data-aos="fade-up"
                                data-aos-delay={`${index * 200}`}
                            >
                                <div className="inline-flex items-center justify-center w-12 h-12 bg-linear-to-r from-[#632EE3] to-[#9F62F2] rounded-full mb-4">
                                    <stat.icon className="text-white text-xl" />
                                </div>
                                <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">{stat.number}</h3>
                                <p className="text-gray-600 text-sm">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Mission Section */}
            <section className="py-16 px-4 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12" data-aos="fade-up" data-aos-duration="1000">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Mission</h2>
                        <div className="w-24 h-1 bg-linear-to-r from-[#632EE3] to-[#9F62F2] mx-auto rounded-full"></div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="200">
                            <h3 className="text-2xl font-bold text-gray-800">Building the Future of Mobile Apps</h3>
                            <p className="text-gray-600 leading-relaxed">
                                At HERO.IO, we believe that great software can transform lives. Our mission is to create
                                innovative, user-friendly applications that solve real-world problems and enhance
                                everyday experiences.
                            </p>
                            <p className="text-gray-600 leading-relaxed">
                                We combine cutting-edge technology with intuitive design to deliver products that
                                millions of users love and rely on every day.
                            </p>
                            <div className="flex flex-wrap justify-center md:justify-start gap-3">
                                <span className="px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-sm font-medium">Innovation</span>
                                <span className="px-4 py-2 bg-green-50 text-green-600 rounded-full text-sm font-medium">Quality</span>
                                <span className="px-4 py-2 bg-purple-50 text-purple-600 rounded-full text-sm font-medium">User-Centric</span>
                            </div>
                        </div>

                        <div className="relative" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="400">
                            <div className="bg-linear-to-br from-[#632EE3] to-[#9F62F2] rounded-2xl p-8 text-white">
                                <h4 className="text-xl font-bold mb-4">Why Choose HERO.IO?</h4>
                                <ul className="space-y-3">
                                    <li className="flex items-center gap-3">
                                        <div className="w-2 h-2 bg-yellow-300 rounded-full"></div>
                                        <span>5+ years of experience</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <div className="w-2 h-2 bg-yellow-300 rounded-full"></div>
                                        <span>132+ successful apps</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <div className="w-2 h-2 bg-yellow-300 rounded-full"></div>
                                        <span>10M+ downloads worldwide</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <div className="w-2 h-2 bg-yellow-300 rounded-full"></div>
                                        <span>Award-winning designs</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="py-16 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12" data-aos="fade-up" data-aos-duration="1000">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Meet Our Team</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            The creative minds behind HERO.IO's success
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {team.map((member, index) => (
                            <div 
                                key={index} 
                                className="bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                                data-aos="fade-up"
                                data-aos-delay={`${index * 200}`}
                            >
                                <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-4 border-linear-to-r from-[#632EE3] to-[#9F62F2]">
                                    <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-800 mb-2">{member.name}</h3>
                                <p className="text-gray-600">{member.role}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 px-4 bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-white" data-aos="fade-up" data-aos-duration="1000">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4" data-aos="zoom-in" data-aos-delay="200">Ready to Build Something Amazing?</h2>
                    <p className="text-lg opacity-90 mb-8" data-aos="fade-up" data-aos-delay="400">
                        Let's work together to create the next big thing in mobile applications.
                    </p>
                    <button className="btn btn-lg bg-white text-[#632EE3] hover:bg-gray-100 border-none font-bold px-8" data-aos="zoom-in" data-aos-delay="600">
                        Get In Touch
                    </button>
                </div>
            </section>
        </div>
    );
};

export default AboutUs;