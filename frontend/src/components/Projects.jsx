// components/Projects.jsx
import React, { useState, useMemo } from 'react';

function Projects({ projects, loading }) {
    const [selectedTech, setSelectedTech] = useState('All');

    const fallbackProjects = [
        {
            id: 1,
            title: 'Distributed Parallel Processing',
            description: 'A full-featured online shopping platform with payment integration, user authentication, and admin dashboard.',
            image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=600&h=400&fit=crop',
            technologies: 'Reactnative, AndroidStudio , sqlite',
            link: 'https://github.com/pukaradhikari1/Distributed-Parallel-Processing'
        },
        {
            id: 2,
            title: 'SolveIt',
            description: 'Collaborative project management tool with real-time updates, team chat, and progress tracking.',
            image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop',
            technologies: 'React, Flask, Tailwind',
            link: 'https://github.com/pukaradhikari1/SolveIt'
        },
        {
            id: 3,
            title: 'Plant Disease Detection',
            description: 'Modern portfolio site with vintage aesthetics, featuring smooth animations and responsive design.',
            image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop',
            technologies: 'TypeScript, Flask, PostgreSQL',
            link: 'https://github.com/pukaradhikari1/Plant-Disease-detection'
        }
    ];

    const displayProjects = projects && projects.length > 0 ? projects : fallbackProjects;

    // Extract unique technology list
    const filterCategories = useMemo(() => {
        const techSet = new Set(['All']);
        displayProjects.forEach(p => {
            p.technologies.split(',').forEach(tech => techSet.add(tech.trim()));
        });
        return Array.from(techSet);
    }, [displayProjects]);

    // Filter projects matching selected tech category
    const filteredProjects = useMemo(() => {
        if (selectedTech === 'All') return displayProjects;
        return displayProjects.filter(p => p.technologies.includes(selectedTech));
    }, [displayProjects, selectedTech]);

    if (loading) {
        return (
            <section className="projects" id="projects">
                <div className="loading">Loading projects...</div>
            </section>
        );
    }

    return (
        <section className="projects" id="projects">
            <div className="section-header">
                <h2 className="section-title">My Work</h2>
                <p className="section-subtitle">A selection of recent projects</p>
            </div>

            {/* Filter buttons bar */}
            <div className="project-filter-bar">
                {filterCategories.map(tech => (
                    <button
                        key={tech}
                        className={`filter-btn ${selectedTech === tech ? 'active' : ''}`}
                        onClick={() => setSelectedTech(tech)}
                    >
                        {tech}
                    </button>
                ))}
            </div>

            <div className="projects-grid">
                {filteredProjects.map((project) => (
                    <div key={project.id} className="project-card">
                        <img src={project.image} alt={project.title} className="project-image" />
                        <h3 className="project-title">{project.title}</h3>
                        <p className="project-description">{project.description}</p>
                        <div className="project-tech">
                            {project.technologies.split(',').map((tech, index) => (
                                <span key={index} className="tech-tag">{tech.trim()}</span>
                            ))}
                        </div>
                        <a href={project.link} className="project-link">View Project →</a>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Projects;