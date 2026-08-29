import React, { useState, useEffect, useCallback, lazy, Suspense } from 'react';
import './App.css';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import ScrollProgress from './components/ScrollProgress';
import Toast from './components/Toast';

const Profile = lazy(() => import('./components/Profile'));
const About = lazy(() => import('./components/About'));
const Projects = lazy(() => import('./components/Projects'));
const Contact = lazy(() => import('./components/Contact'));
const WelcomeModal = lazy(() => import('./components/WelcomeModal'));

function App() {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [toast, setToast] = useState({ show: false, message: '', type: 'success' });

    const showToast = useCallback((message, type = 'success') => {
        setToast({ show: true, message, type });
    }, []);

    const hideToast = useCallback(() => {
        setToast((prev) => ({ ...prev, show: false }));
    }, []);

    const fetchProjects = useCallback(async () => {
        try {
            const response = await fetch('http://localhost:5001/api/projects');
            if (!response.ok) throw new Error('Network response was not ok');
            const data = await response.json();
            setProjects(data);
        } catch (error) {
            console.error('Backend not running, using fallback data:', error);
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        fetchProjects();
    }, [fetchProjects]);

    const handleContactSubmit = useCallback(async (formData) => {
        try {
            const response = await fetch('http://localhost:5001/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });
            const data = await response.json();
            showToast('Thank you! Your message has been sent successfully.', 'success');
            return data;
        } catch (error) {
            console.error('Error submitting contact form:', error);
            showToast('Failed to send message. Please try again later.', 'error');
            throw error;
        }
    }, [showToast]);

    const handleScrollTo = useCallback((sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }, []);

    return (
        <div className="app">
            <ScrollProgress />

            {toast.show && (
                <Toast message={toast.message} type={toast.type} onClose={hideToast} />
            )}

            <Suspense fallback={null}>
                <WelcomeModal
                    onExplore={() => handleScrollTo('projects')}
                    onContact={() => handleScrollTo('contact')}
                />
            </Suspense>

            <Navigation onNavigate={handleScrollTo} />
            <Hero onNavigate={handleScrollTo} onToast={showToast} />

            <Suspense fallback={<div className="loading">Loading section...</div>}>
                <Profile onToast={showToast} />
                <About />
                <Projects projects={projects} loading={loading} />
                <Contact onSubmit={handleContactSubmit} />
            </Suspense>
        </div>
    );
}

export default App;