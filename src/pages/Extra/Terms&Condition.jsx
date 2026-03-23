import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const TermsCondition = () => {
    const [expandedSections, setExpandedSections] = useState({});

    const toggleSection = (index) => {
        setExpandedSections(prev => ({
            ...prev,
            [index]: !prev[index]
        }));
    };

    const sections = [
        {
            title: "Acceptance of Terms",
            content: "By accessing and using HERO.IO services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service."
        },
        {
            title: "Use License",
            content: "Permission is granted to temporarily download one copy of the materials on HERO.IO for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not: modify or copy the materials; use the materials for any commercial purpose or for any public display; attempt to decompile or reverse engineer any software contained on HERO.IO; remove any copyright or other proprietary notations from the materials."
        },
        {
            title: "User Responsibilities",
            content: "As a user of our services, you agree to: Provide accurate and complete information when creating an account; Maintain the security of your password and account; Accept responsibility for all activities that occur under your account; Notify us immediately of any unauthorized use of your account."
        },
        {
            title: "Privacy Policy",
            content: "Your privacy is important to us. We collect information you provide directly to us, such as when you create an account or contact us for support. We also automatically collect certain information about your device and how you interact with our services. This information is used to provide, maintain, and improve our services."
        },
        {
            title: "Disclaimer",
            content: "The materials on HERO.IO are provided on an 'as is' basis. HERO.IO makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights."
        },
        {
            title: "Limitations",
            content: "In no event shall HERO.IO or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on HERO.IO, even if HERO.IO or a HERO.IO authorized representative has been notified orally or in writing of the possibility of such damage."
        },
        {
            title: "Revisions",
            content: "The materials appearing on HERO.IO could include technical, typographical, or photographic errors. HERO.IO does not warrant that any of the materials on its website are accurate, complete, or current. HERO.IO may make changes to the materials contained on its website at any time without notice."
        },
        {
            title: "Governing Law",
            content: "These terms and conditions are governed by and construed in accordance with the laws of the jurisdiction in which HERO.IO operates, and you irrevocably submit to the exclusive jurisdiction of the courts in that state or location."
        }
    ];

    return (
        <div className="min-h-screen bg-base-200">
            {/* Hero Section */}
            <section className="bg-linear-to-r from-[#632EE3] to-[#9F62F2] py-20 px-4 text-white">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">
                        Terms & <span className="text-yellow-300">Conditions</span>
                    </h1>
                    <p className="text-lg md:text-xl opacity-90">
                        Please read these terms carefully before using our services.
                        Your use of HERO.IO constitutes acceptance of these terms.
                    </p>
                </div>
            </section>

            {/* Terms Content */}
            <section className="py-16 px-4">
                <div className="max-w-4xl mx-auto">
                    {/* Last Updated */}
                    <div className="bg-white rounded-xl p-6 mb-8 shadow-lg">
                        <div className="flex items-center justify-between flex-wrap gap-4">
                            <div>
                                <h2 className="text-lg font-bold text-gray-800">Terms of Service</h2>
                                <p className="text-gray-600">Effective Date: March 23, 2026</p>
                            </div>
                            <div className="text-right">
                                <p className="text-sm text-gray-500">Version 2.1</p>
                            </div>
                        </div>
                    </div>

                    {/* Introduction */}
                    <div className="bg-white rounded-xl p-8 mb-8 shadow-lg">
                        <h2 className="text-2xl font-bold text-gray-800 mb-4">Introduction</h2>
                        <p className="text-gray-600 leading-relaxed mb-4">
                            Welcome to HERO.IO. These terms and conditions outline the rules and regulations for the use of HERO.IO's services.
                            By accessing this website and using our services, you accept these terms and conditions in full.
                        </p>
                        <p className="text-gray-600 leading-relaxed">
                            If you do not agree to be bound by all of the terms and conditions of this agreement,
                            then you may not access the website or use any services.
                        </p>
                    </div>

                    {/* Expandable Sections */}
                    <div className="space-y-4">
                        {sections.map((section, index) => (
                            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
                                <button
                                    onClick={() => toggleSection(index)}
                                    className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                                >
                                    <h3 className="text-lg font-bold text-gray-800 pr-4">{section.title}</h3>
                                    <div className="shrink-0">
                                        {expandedSections[index] ?
                                            <FaChevronUp className="text-[#632EE3]" /> :
                                            <FaChevronDown className="text-[#632EE3]" />
                                        }
                                    </div>
                                </button>

                                {expandedSections[index] && (
                                    <div className="px-6 pb-6 border-t border-gray-100">
                                        <p className="text-gray-600 leading-relaxed pt-4">
                                            {section.content}
                                        </p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Contact Section */}
                    <div className="bg-linear-to-r from-[#632EE3] to-[#9F62F2] rounded-xl p-8 mt-8 text-white">
                        <div className="text-center">
                            <h2 className="text-2xl font-bold mb-4">Questions About These Terms?</h2>
                            <p className="opacity-90 mb-6">
                                If you have any questions about these Terms & Conditions, please contact us.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <a
                                    href="/contact-us"
                                    className="btn bg-white text-[#632EE3] hover:bg-gray-100 border-none font-bold px-6"
                                >
                                    Contact Legal Team
                                </a>
                                <a
                                    href="/contact-us"
                                    className="btn btn-outline border-white text-white hover:bg-white hover:text-[#632EE3] px-6"
                                >
                                    General Inquiries
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Footer Note */}
                    <div className="text-center mt-8">
                        <p className="text-gray-500 text-sm">
                            These terms were last updated on March 23, 2026. We reserve the right to modify these terms at any time.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default TermsCondition;