import React from 'react';
import { motion } from 'framer-motion';
import {
    Zap, Facebook, Twitter, Linkedin, Instagram,
    ChevronRight, Award
} from 'lucide-react';
import { Link } from 'react-router-dom';

const SocialButton = ({ icon: Icon, href }) => (
    <motion.a
        href={href}
        whileHover={{ y: -5 }}
        className="social-btn-premium"
    >
        <Icon size={20} />
    </motion.a>
);

const Footer = () => {
    return (
        <footer className="footer pt-24 pb-12">
            <div className="footer-top-border">
                <div className="border-glow-tracker" />
            </div>

            <div className="container px-6">
                {/* Global CTA Pre-footer */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="pre-footer-cta"
                >
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-12 relative z-10">
                        <div className="space-y-4 text-center lg:text-left">
                            <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">
                                Ready to secure your <br />
                                <span className="text-green-500">power infrastructure?</span>
                            </h2>
                            <p className="text-lg text-slate-400 max-w-xl">
                                Join 100+ satisfied clients across 18 states who trust Alfala Enterprises
                                for precision, safety, and reliability.
                            </p>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-6">
                            <a href="#/#contact" className="px-10 py-5 bg-green-500 text-black font-black rounded-2xl hover:bg-green-400 transition-all shadow-xl shadow-green-500/20 flex items-center gap-2 text-lg">
                                Get Free Consultancy <ChevronRight size={20} />
                            </a>
                            <a href="tel:9812219432" className="px-10 py-5 bg-white/5 border border-white/10 text-white font-bold rounded-2xl hover:bg-white/10 transition-all flex items-center gap-2 text-lg backdrop-blur-md">
                                Contact Expert
                            </a>
                        </div>
                    </div>
                </motion.div>

                <div className="footer-grid">
                    {/* Brand Section */}
                    <div className="space-y-8">
                        <div>
                            <div className="flex items-center gap-3 mb-6">
                                <div className="p-2 bg-green-500 rounded-lg">
                                    <Zap className="text-black" size={24} />
                                </div>
                                <h2 className="text-2xl font-black text-white tracking-tighter">
                                    ALFALA <span className="text-green-500">ENTERPRISES</span>
                                </h2>
                            </div>
                            <p className="text-slate-400 leading-relaxed font-medium">
                                Leading the way in electrical testing, commissioning, and infrastructure development.
                                A complete solution to power since 2017.
                            </p>
                        </div>

                        <div className="social-links-premium">
                            <SocialButton icon={Facebook} href="#" />
                            <SocialButton icon={Twitter} href="#" />
                            <SocialButton icon={Linkedin} href="#" />
                            <SocialButton icon={Instagram} href="#" />
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="footer-link-group">
                        <h4 className="footer-section-title">Navigation</h4>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><a href="#/#about">About Us</a></li>
                            <li><a href="#/#services">Services</a></li>
                            <li><Link to="/instruments">Instruments</Link></li>
                            <li><a href="#/#contact">Contact</a></li>
                        </ul>
                    </div>
                </div>

                <div className="mt-24 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 relative z-10">
                    <div className="flex flex-col md:flex-row items-center gap-8">
                        <p className="text-slate-500 text-sm font-medium">
                            © 2026 Alfala Enterprises. All rights reserved.
                        </p>
                        <div className="flex items-center gap-2 text-xs font-bold text-slate-600 uppercase tracking-widest px-3 py-1 rounded-full border border-white/5">
                            <Award size={14} className="text-green-500" />
                            GST: 06AHRPH3506J1Z9
                        </div>
                    </div>

                    <div className="flex gap-8">
                        <a href="#" className="text-white text-sm font-medium hover:text-green-500 transition-colors">Privacy Policy</a>
                        <a href="#" className="text-white text-sm font-medium hover:text-green-500 transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>

            <div className="footer-watermark">ALFALA</div>
        </footer>
    );
};

export default Footer;
