import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '#/' },
        { name: 'About', href: '#/#about' },
        { name: 'Services', href: '#/#services' },
        { name: 'Clients', href: '#/#clients' },
        { name: 'Contact', href: '#/#contact' },
    ];

    return (
        <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 glass ${isScrolled ? 'py-3 shadow-lg' : 'py-4'}`} style={{ backgroundColor: 'rgba(0, 0, 0, 0.36)' }}>
            <div className="container flex justify-between items-center">
                <h1 className="text-xl font-bold tracking-tight leading-tight" style={{ color: '#FFFFFF' }}>
                    ALFALA <span style={{ color: '#22C55E' }}>ENTERPRISES</span>
                </h1>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="nav-link"
                        >
                            {link.name}
                        </a>
                    ))}
                    <Link to="/instruments" className="nav-link text-green-400">Instruments</Link>
                    <a href="tel:9812219432" className="btn btn-primary px-6 py-2 rounded-full text-sm flex items-center gap-2">
                        <Phone size={16} /> Call Now
                    </a>
                </div>

                {/* Mobile Toggle */}
                <button className="md:hidden text-white flex items-center justify-center p-2" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden glass absolute top-full left-0 w-full p-6 flex flex-col gap-4 animate-in slide-in-from-top duration-300">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-lg font-medium text-gray-300 hover:text-green-400"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            {link.name}
                        </a>
                    ))}
                    <Link
                        to="/instruments"
                        className="text-lg font-medium text-green-400"
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        Instruments
                    </Link>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
