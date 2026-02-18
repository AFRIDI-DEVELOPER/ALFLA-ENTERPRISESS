import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Clients from './components/Clients'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Instruments from './components/Instruments'
const TaglineBar = () => {
    const texts = [
        '⚡ A Complete Solution to Power',
        'gst',
    ];
    const [index, setIndex] = useState(0);
    const [flash, setFlash] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setFlash(true);
            setTimeout(() => {
                setIndex((prev) => (prev + 1) % texts.length);
                setFlash(false);
            }, 400);
        }, 3500);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="tagline-bar">
            <div className={`tagline-text ${flash ? 'tagline-flash' : ''}`}>
                {texts[index] === 'gst' ? (
                    <span style={{ color: '#ef4444' }}>OUR GST NO. 06AHRPH3506J1Z9</span>
                ) : (
                    texts[index]
                )}
            </div>
        </div>
    );
};

const ScrollToTop = () => {
    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    return null;
};

const Home = () => (
    <>
        <Hero />
        <About />
        <Services />
        <Clients />
        <Contact />
    </>
);

function App() {
    return (
        <Router>
            <ScrollToTop />
            <div className="app">
                <Navbar />
                <TaglineBar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/instruments" element={<Instruments />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    )
}

export default App
