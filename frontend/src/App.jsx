import { useState, useEffect } from 'react';
import './App.css';
import Hero from './components/Hero';
import Profile from './components/Profile';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Navigation from './components/Navigation';

function App() {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchProjects();
    }, []);

    const fetchProjects = async () => {
        try {
            const response = await fetch('http://localhost:5001/api/projects');
            const data = await response.json();
            setProjects(data);
            setLoading(false);
        } catch (error) {
            console.error('Backend not running, using fallback data');
            setLoading(false);
        }
    };

    const handleContactSubmit = async (formData) => {
        try {
            const response = await fetch('http://localhost:5001/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            return await response.json();
        } catch (error) {
            console.error('Error submitting contact form:', error);
            throw error;
        }
    };

    return (
        <div className="app">
            <Navigation />
            <Hero />
            <Profile />
            <About />
            <Projects projects={projects} loading={loading} />
            <Contact onSubmit={handleContactSubmit} />
        </div>
    );
}

export default App;
