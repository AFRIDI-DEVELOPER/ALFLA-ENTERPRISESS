import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

/* Custom SVG logos ... */

/* Custom SVG logos styled to look like real brand marks */
const ClientLogo = ({ name, style }) => {
    const logos = {
        "TATA POWER": (
            <svg viewBox="0 0 180 50" className="client-logo-svg">
                <text x="90" y="20" textAnchor="middle" fontFamily="Arial Black, sans-serif" fontSize="14" fontWeight="900" fill="currentColor" letterSpacing="6">TATA</text>
                <line x1="30" y1="26" x2="150" y2="26" stroke="currentColor" strokeWidth="1.5" opacity="0.4" />
                <text x="90" y="42" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="11" fontWeight="600" fill="currentColor" letterSpacing="3" opacity="0.8">POWER</text>
            </svg>
        ),
        "ADANI": (
            <svg viewBox="0 0 160 50" className="client-logo-svg">
                <text x="80" y="32" textAnchor="middle" fontFamily="Georgia, serif" fontSize="24" fontWeight="700" fill="currentColor" letterSpacing="8">ADANI</text>
                <line x1="20" y1="40" x2="140" y2="40" stroke="#22c55e" strokeWidth="2.5" />
            </svg>
        ),
        "SIEMENS": (
            <svg viewBox="0 0 180 50" className="client-logo-svg">
                <rect x="10" y="8" width="160" height="34" rx="4" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.3" />
                <text x="90" y="32" textAnchor="middle" fontFamily="'Trebuchet MS', sans-serif" fontSize="20" fontWeight="700" fill="currentColor" letterSpacing="4">SIEMENS</text>
            </svg>
        ),
        "BAJAJ": (
            <svg viewBox="0 0 150 50" className="client-logo-svg">
                <text x="75" y="22" textAnchor="middle" fontFamily="Arial Black, sans-serif" fontSize="22" fontWeight="900" fill="currentColor" letterSpacing="2">BAJAJ</text>
                <text x="75" y="40" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="8" fontWeight="400" fill="currentColor" letterSpacing="5" opacity="0.5">ELECTRICALS</text>
            </svg>
        ),
        "GODREJ": (
            <svg viewBox="0 0 160 50" className="client-logo-svg">
                <text x="80" y="34" textAnchor="middle" fontFamily="'Times New Roman', serif" fontSize="26" fontWeight="700" fill="currentColor" fontStyle="italic">Godrej</text>
            </svg>
        ),
        "JINDAL STAINLESS": (
            <svg viewBox="0 0 220 50" className="client-logo-svg" style={{ width: '180px' }}>
                <text x="110" y="22" textAnchor="middle" fontFamily="Arial Black, sans-serif" fontSize="16" fontWeight="900" fill="currentColor" letterSpacing="2">JINDAL</text>
                <text x="110" y="40" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="10" fontWeight="400" fill="currentColor" letterSpacing="6" opacity="0.6">STAINLESS</text>
            </svg>
        ),
        "AMAZON": (
            <svg viewBox="0 0 170 50" className="client-logo-svg">
                <text x="85" y="30" textAnchor="middle" fontFamily="'Arial Black', sans-serif" fontSize="22" fontWeight="900" fill="currentColor" letterSpacing="1" textDecoration="none">amazon</text>
                <path d="M 40 36 Q 85 48 130 36" fill="none" stroke="#22c55e" strokeWidth="2.5" strokeLinecap="round" />
            </svg>
        ),
        "FLIPKART": (
            <svg viewBox="0 0 170 50" className="client-logo-svg">
                <text x="85" y="20" textAnchor="middle" fontFamily="'Trebuchet MS', sans-serif" fontSize="20" fontWeight="800" fill="currentColor" letterSpacing="1">Flipkart</text>
                <text x="85" y="38" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="7" fontWeight="500" fill="#22c55e" letterSpacing="4" opacity="0.8">EXPLORE PLUS</text>
            </svg>
        ),
        "BLINKIT": (
            <svg viewBox="0 0 150 50" className="client-logo-svg">
                <text x="75" y="33" textAnchor="middle" fontFamily="'Arial Rounded MT Bold', 'Arial Black', sans-serif" fontSize="22" fontWeight="900" fill="currentColor">blinkit</text>
            </svg>
        ),
        "HERO MOTORS": (
            <svg viewBox="0 0 180 50" className="client-logo-svg">
                <text x="90" y="22" textAnchor="middle" fontFamily="'Impact', sans-serif" fontSize="20" fontWeight="900" fill="currentColor" letterSpacing="5">HERO</text>
                <line x1="30" y1="28" x2="150" y2="28" stroke="currentColor" strokeWidth="1" opacity="0.3" />
                <text x="90" y="42" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="9" fontWeight="500" fill="currentColor" letterSpacing="8" opacity="0.6">MOTORS</text>
            </svg>
        ),
        "DECATHLON": (
            <svg viewBox="0 0 180 50" className="client-logo-svg">
                <text x="90" y="32" textAnchor="middle" fontFamily="'Futura', 'Arial Black', sans-serif" fontSize="20" fontWeight="900" fill="currentColor" letterSpacing="4">DECATHLON</text>
            </svg>
        ),
        "ECOM EXPRESS": (
            <svg viewBox="0 0 200 50" className="client-logo-svg" style={{ width: '160px' }}>
                <text x="100" y="22" textAnchor="middle" fontFamily="'Courier New', monospace" fontSize="18" fontWeight="800" fill="currentColor" letterSpacing="1">ECOM</text>
                <text x="100" y="40" textAnchor="middle" fontFamily="'Arial', sans-serif" fontSize="10" fontWeight="400" fill="#22c55e" letterSpacing="6">EXPRESS</text>
            </svg>
        ),
        "DELHI METRO": (
            <svg viewBox="0 0 190 50" className="client-logo-svg" style={{ width: '155px' }}>
                <circle cx="22" cy="25" r="14" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.5" />
                <text x="22" y="30" textAnchor="middle" fontFamily="Arial Black, sans-serif" fontSize="12" fontWeight="900" fill="currentColor">M</text>
                <text x="115" y="22" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="13" fontWeight="700" fill="currentColor" letterSpacing="3">DELHI</text>
                <text x="115" y="40" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="11" fontWeight="400" fill="currentColor" letterSpacing="5" opacity="0.6">METRO</text>
            </svg>
        ),
        "INDIAN RAILWAYS": (
            <svg viewBox="0 0 220 50" className="client-logo-svg" style={{ width: '180px' }}>
                <text x="110" y="22" textAnchor="middle" fontFamily="'Times New Roman', serif" fontSize="15" fontWeight="700" fill="currentColor" letterSpacing="3">INDIAN</text>
                <text x="110" y="42" textAnchor="middle" fontFamily="'Times New Roman', serif" fontSize="13" fontWeight="400" fill="currentColor" letterSpacing="5" opacity="0.7">RAILWAYS</text>
            </svg>
        ),
        "NHAI": (
            <svg viewBox="0 0 130 50" className="client-logo-svg" style={{ width: '100px' }}>
                <text x="65" y="24" textAnchor="middle" fontFamily="Arial Black, sans-serif" fontSize="22" fontWeight="900" fill="currentColor" letterSpacing="4">NHAI</text>
                <rect x="15" y="32" width="100" height="2" fill="#22c55e" rx="1" />
                <text x="65" y="46" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="5" fill="currentColor" letterSpacing="2" opacity="0.5">HIGHWAYS AUTHORITY</text>
            </svg>
        ),
        "AAI": (
            <svg viewBox="0 0 120 50" className="client-logo-svg" style={{ width: '90px' }}>
                <text x="60" y="28" textAnchor="middle" fontFamily="'Impact', sans-serif" fontSize="28" fontWeight="900" fill="currentColor" letterSpacing="6">AAI</text>
                <text x="60" y="44" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="5" fill="currentColor" letterSpacing="2" opacity="0.5">AIRPORTS AUTHORITY</text>
            </svg>
        ),
    };
    return logos[name] || <span>{name}</span>;
};

const clients = [
    "TATA POWER", "ADANI", "SIEMENS", "BAJAJ", "GODREJ",
    "JINDAL STAINLESS", "AMAZON", "FLIPKART", "BLINKIT",
    "HERO MOTORS", "DECATHLON", "ECOM EXPRESS", "DELHI METRO",
    "INDIAN RAILWAYS", "NHAI", "AAI"
];

const Hero = () => {
    return (
        <>
            <section id="home" className="hero-banner">
                {/* Background Image */}
                <div className="hero-banner-bg">
                    <div className="hero-banner-overlay" />
                    <img
                        src="hero-banner.png"
                        alt="Electrical Substation Panorama"
                        className="hero-banner-img"
                    />
                </div>

                {/* Centered Content */}
                <div className="hero-banner-content">
                    <div className="relative z-10 hero-content">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8 }}
                            className="hero-badge mb-8"
                        >
                            <Zap size={14} strokeWidth={3} />
                            <span>Premium Power Solutions</span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-6xl md:text-8xl font-black mb-8 leading-tight tracking-tight text-white hero-title"
                        >
                            Empowering Industries <br />
                            with <span className="text-green-500">Precision.</span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="text-xl md:text-2xl text-slate-300 mb-12 max-w-3xl mx-auto font-medium hero-description"
                        >
                            Alfala Enterprises delivers state-of-the-art electrical testing,
                            commissioning, and infrastructure development since 2017.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="flex flex-col md:flex-row justify-center items-center gap-6 hero-buttons"
                        >
                            <a href="#services" className="btn btn-primary px-12 py-5 text-xl rounded-2xl group shadow-lg shadow-green-500/20">
                                Our Services
                                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                            </a>
                            <a href="#about" className="btn btn-outline px-12 py-5 text-xl rounded-2xl backdrop-blur-md border-white/20 hover:border-green-400">
                                Learn More
                            </a>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Client Logo Scroll Bar */}
            <div className="hero-clients-bar">
                <div className="hero-clients-scroll">
                    <div className="hero-clients-track">
                        {[...clients, ...clients].map((name, i) => (
                            <div key={i} className="hero-client-item">
                                <ClientLogo name={name} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Hero;
