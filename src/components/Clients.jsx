import React from 'react';

const clients = [
    "Tata Power", "Adani", "Siemens", "Bajaj", "Godrej",
    "Jindal Stainless", "Amazon", "Flipkart", "Blinkit",
    "Hero Motors", "Decathlon", "Ecom Express", "Delhi Metro",
    "Indian Railways", "NHAI", "Airports Authority of India"
];

const Clients = () => {
    return (
        <section id="clients" className="clients-section">
            <div className="container">
                <div className="section-title">
                    <h2>Trusted by Industry Leaders</h2>
                    <p>We have successfully served over 100+ customers across 18 states in India.</p>
                </div>

                <div className="clients-marquee">
                    <div className="marquee-content">
                        {clients.concat(clients).map((client, index) => (
                            <div key={index} className="client-pill glass">
                                {client}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Clients;
