import React from 'react';

function Projects({ projects, loading }) {
    // Fallback projects if database is empty or not connected
    const fallbackProjects = [
        {
            id: 1,
            title: 'EduDigest',
            description: 'A full-featured online shopping platform with payment integration, user authentication, and admin dashboard.',
            image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=600&h=400&fit=crop',
            technologies: 'C++, Qt, sqlite',
            link: '#'
        },
        {
            id: 2,
            title: 'SolveIt',
            description: 'Collaborative project management tool with real-time updates, team chat, and progress tracking.',
            image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop',
            technologies: 'React, Flask, Tailwind',
            link: '#'
        },
        {
            id: 3,
            title: 'Plant Disease Detection',
            description: 'Modern portfolio site with vintage aesthetics, featuring smooth animations and responsive design.',
            image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop',
            technologies: 'TypeScript, Flask, PostgreSQL',
            link: '#'
        }
    ];

    const displayProjects = projects && projects.length > 0 ? projects : fallbackProjects;

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
            <div className="projects-grid">
                {displayProjects.map((project) => (
                    <div key={project.id} className="project-card">
                        <img
                            src={project.image}
                            alt={project.title}
                            className="project-image"
                        />
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