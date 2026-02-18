import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, ChevronRight, Zap, Shield, Microchip, Activity, Camera, Factory } from 'lucide-react';

const TechnicalFrame = ({ image, alt }) => (
    <div className="technical-frame-container">
        <div className="technical-frame">
            <div className="corner-bl" />
            <div className="corner-br" />
            <div className="scan-line" />
            <div className="data-overlay">
                SYSTEM_STATUS: ACTIVE<br />
                DIAG_MODE: ENHANCED<br />
                {new Date().toLocaleDateString()}
            </div>
            <img
                src={image}
                alt={alt}
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 scale-105 hover:scale-100"
            />
            <div className="absolute inset-0 bg-green-500/5 mix-blend-overlay pointer-events-none" />
        </div>
    </div>
);

const InstrumentCard = ({ title, description, points, image, imageAlt, icon: Icon, reverse, stats }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className={`flex flex-col ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12 lg:gap-20`}
        >
            <div className="flex-1 space-y-8 w-full">
                <div className="space-y-4">
                    <div className="flex items-center gap-3">
                        <div className="p-3 bg-green-500/10 border border-green-500/20 rounded-xl">
                            <Icon className="text-green-500" size={24} />
                        </div>
                        <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight">{title}</h2>
                    </div>
                </div>

                <p className="text-lg text-slate-400 leading-relaxed font-medium max-w-2xl">
                    {description}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {points.map((point, i) => (
                        <div key={i} className="flex items-start gap-3 group">
                            <div className="mt-1.5 p-0.5 bg-green-500/20 rounded-full group-hover:bg-green-500 transition-colors">
                                <CheckCircle2 className="text-green-500 group-hover:text-black" size={12} />
                            </div>
                            <span className="text-slate-300 font-medium leading-tight">{point}</span>
                        </div>
                    ))}
                </div>

                {stats && (
                    <div className="flex gap-8 pt-4 border-t border-white/5">
                        {stats.map((stat, i) => (
                            <div key={i}>
                                <div className="text-2xl font-black text-white">{stat.value}</div>
                                <div className="text-xs text-slate-500 font-bold uppercase tracking-widest">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                )}
            </div>

            <div className="flex-1 w-full max-w-[500px]">
                <TechnicalFrame image={image} alt={imageAlt} />
            </div>
        </motion.div>
    );
};

const Instruments = () => {
    const instrumentData = [
        {
            title: "Substation Modification",
            description: "High-precision engineering for substation upgrades and modification. We ensure your infrastructure meets modern standards with minimal downtime.",
            points: [
                "Annual Maintenance Contract (AMC)",
                "11KV Switchyard Equipment Services",
                "Transformer Oil Filtration & Replacement",
                "Dry-type Transformer Maintenance & Cleaning",
                "Modification of Old Control Transformers",
                "Structural Reinforcement & Painting"
            ],
            image: "/transformer_blueprint.png",
            imageAlt: "Substation Blueprint",
            icon: Factory,
            specs: [
                { label: "Uptime", value: "99.9%" },
                { label: "Voltage", value: "33-132KV" }
            ]
        },
        {
            title: "Transformer Testing",
            description: "Comprehensive diagnostic testing for power transformers ranging from 5MVA to 500MVA. We provide in-depth analysis of transformer health.",
            points: [
                "Voltage & Turns Ratio Analysis",
                "Insulation Resistance & Polarization Index",
                "Capacitance & Tan Delta (C & Tan δ)",
                "Magnetic Balance & Excitation Current",
                "Sweep Frequency Response (SFRA)",
                "On Line Partial Discharge (PD) Tracking",
                "Winding Resistance Measurement"
            ],
            image: "/circuit_breaker_blueprint.png",
            imageAlt: "High-Voltage Testing Blueprint",
            icon: Activity,
            reverse: true,
            stats: [
                { label: "Range", value: "500MVA" },
                { label: "Accuracy", value: "±0.1%" }
            ]
        },
        {
            title: "Instrument Transformer (CT, PT, CVT)",
            description: "Critical testing for protection and metering accuracy. We ensure your measurement foundation is solid and reliable.",
            points: [
                "Ratio & Phase Angle Error Test",
                "Polarity & Knee-point Voltage",
                "Excitation Current Measurement",
                "Secondary Winding Resistance",
                "Tan Delta & Capacitance Level",
                "Insulation Resistance (HV-LV)"
            ],
            image: "/instrument_transformer_blueprint.png",
            imageAlt: "CT/PT Testing Blueprint",
            icon: Microchip,
            stats: [
                { label: "Class", value: "0.2S" },
                { label: "Standard", value: "IEC/IS" }
            ]
        },
        {
            title: "Circuit Breaker & Isolator",
            description: "Dynamic and static testing of switchgear to ensure operational safety. Essential for protection of downstream assets.",
            points: [
                "Timing & Contact Simultaneity",
                "Static & Dynamic Contact Resistance (DCRM)",
                "Dew Point of SF6 Gas Analysis",
                "Operational Check at Red. Voltage",
                "Isolator Contact Alignment Check",
                "Mechanical Endurance Verification"
            ],
            image: "/circuit_breaker_diagnostic.png",
            imageAlt: "Switchgear Diagnostic Blueprint",
            icon: Zap,
            reverse: true,
            stats: [
                { label: "Speed", value: "20ms" },
                { label: "Precision", value: "μΩ" }
            ]
        },
        {
            title: "LT/HT Panel & Protection Relay",
            description: "End-to-end testing of electrical panels and sophisticated protection schemes.",
            points: [
                "Numerical Relay Parameterization",
                "Secondary Current Injection Test",
                "High Voltage (HV) Dielectric Test",
                "Bus-bar Tightness & Torque Check",
                "Operational Interlock Logic Test",
                "Under/Over Voltage Trip Settings"
            ],
            image: "/protection_relay_blueprint.png",
            imageAlt: "Relay Calibration Blueprint",
            icon: Shield,
            stats: [
                { label: "Relays", value: "Num/Static" },
                { label: "Logic", value: "Validated" }
            ]
        },
        {
            title: "Thermography Analysis",
            description: "Non-invasive thermal imaging to detect hotspots before equipment failure. Essential for preventive maintenance.",
            points: [
                "11kV to 66kV Cable Joint Diagnostics",
                "Real-time Heat Signature Mapping",
                "Bus-bar Connection Integrity Check",
                "Transformer Bushing Inspection",
                "LV/HV Connection Thermal Profiles",
                "Periodic Load-based Reporting"
            ],
            image: "/thermal_analysis.png",
            imageAlt: "Thermal Analysis Diagnostics",
            icon: Camera,
            reverse: true,
            stats: [
                { label: "Precision", value: "0.1°C" },
                { label: "Frequency", value: "Quarterly" }
            ]
        }
    ];

    return (
        <div className="min-h-screen bg-[#030712] pt-32 pb-24">
            <div className="container px-6">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-24 max-w-4xl mx-auto"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-sm font-bold mb-6 uppercase tracking-widest">
                        <Zap size={16} /> Technical Assets & Expertise
                    </div>
                    <h1 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tighter leading-none">
                        Our Industrial <span className="text-green-500">Instruments</span> & Solutions.
                    </h1>
                    <p className="text-xl text-slate-400 leading-relaxed font-medium">
                        At ALFALA ENTERPRISES, we leverage state-of-the-art diagnostic tools and engineering precision to deliver end-to-end power solutions. From 11kV lines to 500MVA transformers, we ensure uptime and safety across India.
                    </p>
                </motion.div>

                {/* Instruments Grid */}
                <div className="space-y-32 instruments-grid">
                    {instrumentData.map((item, idx) => (
                        <div key={idx} className="instrument-card-inner">
                            <InstrumentCard {...item} reverse={item.reverse} />
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
};

export default Instruments;
