import React from 'react';
import { Phone, Mail, MapPin, Send } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="contact-section">
            <div className="container">
                <div className="section-title">
                    <h2>Contact Us</h2>
                    <p>Get in touch with our experts for your power requirements or consultancy needs.</p>
                </div>

                <div className="contact-wrapper">
                    <div className="contact-info">
                        <div className="info-item">
                            <MapPin className="text-green-400" />
                            <div>
                                <h4>Registered Office</h4>
                                <p>Ward No. 4, Near 66 KV Power House, Nuh Road, Tauru, District Nuh (HR) - 122105</p>
                                <a
                                    href="https://www.google.com/maps/search/?api=1&query=Ward+No+4+Near+66+KV+Power+House+Nuh+Road+Tauru+District+Nuh+HR+122105"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="map-container block mt-4 cursor-pointer relative"
                                >
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3516.3685521406856!2d76.9458!3d28.2167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDEzJzAwLjEiTiA3NsKwNTYnNDQuOSJF!5e0!3m2!1sen!2sin!4v1707840000000!5m2!1sen!2sin"
                                        width="100%"
                                        height="200"
                                        style={{ border: 0, pointerEvents: 'none' }}
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                        className="rounded-xl border border-white/10"
                                    ></iframe>
                                </a>
                            </div>
                        </div>
                        <div className="info-item">
                            <MapPin className="text-green-400" />
                            <div>
                                <h4>Corporate Office</h4>
                                <p>1726/3, Gali No 7, Rajiv Nagar, Near Sanjay Gram, Gurugram</p>
                                <a
                                    href="https://www.google.com/maps/search/?api=1&query=1726/3+Gali+No+7+Rajiv+Nagar+Near+Sanjay+Gram+Gurugram"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="map-container block mt-4 cursor-pointer relative"
                                >
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3508.0!2d77.0261!3d28.4089!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDI0JzMyLjAiTiA3N8KwMDEnMzQuMCJF!5e0!3m2!1sen!2sin!4v1707840000000!5m2!1sen!2sin"
                                        width="100%"
                                        height="200"
                                        style={{ border: 0, pointerEvents: 'none' }}
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                        className="rounded-xl border border-white/10"
                                    ></iframe>
                                </a>
                            </div>
                        </div>
                        <div className="info-item">
                            <Phone className="text-green-400" />
                            <div>
                                <h4>Phone</h4>
                                <p>+91 98122-19432, 90505-38554, 9946852822</p>
                            </div>
                        </div>
                        <div className="info-item">
                            <Mail className="text-green-400" />
                            <div>
                                <h4>Email</h4>
                                <p>alfalaenterprises86@gmail.com</p>
                            </div>
                        </div>
                    </div>

                    <form className="contact-form glass">
                        <div className="form-group">
                            <input type="text" placeholder="Your Name" required />
                        </div>
                        <div className="form-group">
                            <input type="email" placeholder="Your Email" required />
                        </div>
                        <div className="form-group">
                            <textarea placeholder="Your Message" rows="5" required></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary w-full flex items-center justify-center gap-2">
                            Send Message <Send size={18} />
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
