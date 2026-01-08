import React from 'react';
import Hero from '../components/Hero';
import Stats from '../components/Stats';
import Features from '../components/Features';
import About from '../components/About';
import Contact from '../components/Contact';

const HomePage: React.FC = () => {
    return (
        <main>
            <Hero />
            <Stats />
            <Features />
            <About />
            <Contact />
        </main>
    );
};

export default HomePage;
