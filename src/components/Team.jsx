import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone } from 'lucide-react';

const Team = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const base = import.meta.env.BASE_URL || '/';
    const asset = (path) => `${base}${path}`.replace(/\/+/g, '/');

    const teamMembers = [
        {
            id: 1,
            name: 'Tayyub Hussain',
            position: 'Proprietor',
            phone: '+91 98122-19432',
            description: 'Founder and proprietor of Alfala Enterprises, leading the company with strategic vision and commitment to excellence in electrical infrastructure solutions.',
            image: asset('team-images/team_manager_portrait_1771058549873.png')
        },
        {
            id: 2,
            name: 'Waseem Ahmed',
            position: 'Manager',
            phone: '+91 96713-70592',
            description: 'Managing daily operations and client relationships, ensuring seamless project execution and maintaining the highest standards of quality and service.',
            image: asset('team-images/team_engineer_portrait_1771058571065.png')
        },
        {
            id: 3,
            name: 'Nurul Hassan',
            position: 'Second Manager',
            phone: '+91 90505-38554',
            description: 'Supporting management operations and coordinating between teams to ensure efficient workflow and successful project delivery across all departments.',
            image: asset('team-images/team_technician_portrait_1771058590865.png')
        },
        {
            id: 4,
            name: 'Mursaleem',
            position: 'Supervisor',
            phone: '+91 89882-02773',
            description: 'Overseeing field operations and technical teams, ensuring safety compliance and quality standards are maintained at all project sites.',
            image: asset('team-images/team_consultant_portrait_1771058630997.png')
        },
        {
            id: 5,
            name: 'Assar',
            position: 'Foreman',
            phone: '+91 99913-33855',
            description: 'Leading on-ground execution teams, managing installation work, and ensuring timely completion of projects with precision and expertise.',
            image: asset('team-images/team_coordinator_portrait_1771058681491.png')
        }
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % teamMembers.length);
        }, 4000); // Change card every 4 seconds

        return () => clearInterval(interval);
    }, [teamMembers.length]);

    const currentMember = teamMembers[currentIndex];

    return (
        <section id="team" className="team-section">
            <div className="container">
                <div className="section-title">
                    <h2>Our Expert Team</h2>
                    <p>Meet the professionals powering your success</p>
                </div>

                <div className="team-single-card-wrapper">
                    <AnimatePresence mode="popLayout">
                        <motion.div
                            key={currentMember.id}
                            className="team-card glass"
                            initial={{ opacity: 0, x: 400 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{
                                opacity: 0.25,
                                x: -150,
                                scale: 0.8,
                                filter: "blur(10px)",
                                zIndex: 0
                            }}
                            transition={{
                                duration: 0.7,
                                ease: [0.25, 0.46, 0.45, 0.94],
                            }}
                        >
                            <div className="team-card-image">
                                <img src={currentMember.image} alt={currentMember.name} />
                                <div className="team-card-overlay"></div>
                            </div>
                            <div className="team-card-content">
                                <h3>{currentMember.name}</h3>
                                <p className="team-position">{currentMember.position}</p>
                                <a href={`tel:${currentMember.phone}`} className="team-phone">
                                    <Phone size={16} />
                                    <span>{currentMember.phone}</span>
                                </a>
                                <p className="team-description">{currentMember.description}</p>
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    {/* Navigation Dots */}
                    <div className="team-dots">
                        {teamMembers.map((_, index) => (
                            <button
                                key={index}
                                className={`team-dot ${index === currentIndex ? 'active' : ''}`}
                                onClick={() => setCurrentIndex(index)}
                                aria-label={`Go to team member ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Team;
