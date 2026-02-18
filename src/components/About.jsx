import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, Heart } from 'lucide-react';
import Team from './Team';

const About = () => {
    return (
        <section id="about" className="about-section">
            <div className="container">
                <div className="section-title">
                    <h2>About Alfala Enterprises</h2>
                    <p>Established in 2017, we have grown into a trusted partner for electrical infrastructure and maintenance across India.</p>
                </div>

                <div className="about-grid">
                    <motion.div
                        whileHover={{ y: -10 }}
                        className="about-card glass"
                    >
                        <div className="about-icon"><Target /></div>
                        <h3>Our Mission</h3>
                        <p>To provide customers with superior quality products and services utilizing the latest technologies in electrical testing and commissioning.</p>
                    </motion.div>

                    <motion.div
                        whileHover={{ y: -10 }}
                        className="about-card glass"
                    >
                        <div className="about-icon"><Eye /></div>
                        <h3>Our Vision</h3>
                        <p>To achieve ultimate customer satisfaction through continuous learning, quality service, and world-class recognition in the power sector.</p>
                    </motion.div>

                    <motion.div
                        whileHover={{ y: -10 }}
                        className="about-card glass"
                    >
                        <div className="about-icon"><Heart /></div>
                        <h3>Core Values</h3>
                        <p>Integrity, commitment to timelines, social responsibility, and fairness in all our business dealings with industrial and commercial partners.</p>
                    </motion.div>
                </div>

                <div className="about-content">
                    <div className="about-text">
                        <h3>Leading with Expertise</h3>
                        <p>Led by Proprietor Tayyub Hussain, Alfala Enterprises is driven by a young, energetic team of skilled professionals. We specialize in providing expertise across industrial, warehousing, and commercial sectors, offering "End-to-End" execution including room planning, statutory coordination, and installation.</p>
                        <ul className="accent-list">
                            <li>End-to-End execution & planning</li>
                            <li>Statutory coordination & approvals</li>
                            <li>Professional commissioning & testing</li>
                            <li>24/7 Support & Maintenance AMC</li>
                        </ul>
                    </div>

                    {/* Team Carousel displayed here */}
                    <Team />
                </div>
            </div>
        </section>
    );
};

export default About;
