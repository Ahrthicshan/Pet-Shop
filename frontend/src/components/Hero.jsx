import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
    return (
        <section style={{
            height: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            background: 'radial-gradient(circle at top right, rgba(244, 63, 94, 0.2), transparent 40%), radial-gradient(circle at bottom left, rgba(59, 130, 246, 0.2), transparent 40%)',
            paddingTop: '80px'
        }}>
            <div className="container">
                <h1 style={{ fontSize: '4rem', fontWeight: '900', marginBottom: '1.5rem', lineHeight: '1.1' }}>
                    Give Your Pets <br />
                    <span style={{ color: 'var(--primary-color)' }}>The Best Life</span>
                </h1>
                <p style={{ fontSize: '1.25rem', color: 'var(--text-muted)', marginBottom: '2.5rem', maxWidth: '600px', margin: '0 auto 2.5rem' }}>
                    Premium food, toys, and accessories for your furry friends.
                    Experience the difference with our curated collection.
                </p>
                <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                    <button className="btn btn-primary" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        Shop Now <ArrowRight size={20} />
                    </button>
                    <button className="btn btn-secondary">
                        Learn More
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Hero;
