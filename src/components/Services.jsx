import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Wrench, HelpCircle, FileText, Settings, Activity } from 'lucide-react';

const services = [
    {
        title: "Substations & Infrastructure",
        description: "Installation and commissioning of 33 KV and 11 KV lines, substation civil & electrical work, and pole mounting.",
        icon: <Zap />
    },
    {
        title: "Testing & Diagnostics",
        description: "Routine and special testing for transformers (SFRA, DFRA, PD), routine breaker testing (VCB/SF6), and oil filtration.",
        icon: <Activity />
    },
    {
        title: "Maintenance & AMC",
        description: "Annual Maintenance Contracts for switchyard equipment, UPS systems, and distribution panels to ensure zero downtime.",
        icon: <Settings />
    },
    {
        title: "Thermography Analysis",
        description: "Infrared testing for hot spots in bushings, bus-bars, and joints to prevent electrical fires and equipment failure.",
        icon: <Wrench />
    },
    {
        title: "Government Consultancy",
        description: "Expert guidance for load sanctioning, extension, and all necessary government authority approvals and compliance.",
        icon: <FileText />
    },
    {
        title: "Warehouse Electrical Fit-outs",
        description: "Complete electrical infrastructure for massive logistics hubs and industrial warehouses with precision execution.",
        icon: <HelpCircle />
    }
];

const Services = () => {
    return (
        <section id="services" className="services-section">
            <div className="container">
                <div className="section-title">
                    <h2>Our Core Specializations</h2>
                    <p>We provide a wide range of HT and LT electrical services tailored to industrial and commercial requirements.</p>
                </div>

                <div className="services-grid">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="service-card glass"
                        >
                            <div className="service-icon">{service.icon}</div>
                            <h3>{service.title}</h3>
                            <p>{service.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
