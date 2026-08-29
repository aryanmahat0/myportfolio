// components/Projects.jsx
import React, { useState, useMemo } from 'react';

function Projects({ projects, loading }) {
    const [selectedTech, setSelectedTech] = useState('All');

    const fallbackProjects = [
        {
            id: 1,
            title: 'Distributed Parallel Processing',
            description: 'Distributed Parallel Processing breaks complex, compute-heavy workloads into chunked sub-tasks and executes them concurrently across a coordinated cluster of worker nodes. By pairing centralized master orchestration with real-time heartbeat monitoring and dynamic load distribution, the architecture eliminates single-node performance bottlenecks—delivering high-throughput execution, linear scalability, and resilient fault tolerance for data-intensive applications.',
            image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop',
            technologies: 'Reactnative, AndroidStudio , sqlite , tensorflow , Flask',
            link: 'https://github.com/pukaradhikari1/Distributed-Parallel-Processing'
        },
        {
            id: 2,
            title: 'SolveIt',
            description: 'SolveIt is a community-driven, peer-to-peer academic collaboration platform designed to eliminate learning bottlenecks for university students. Inspired by Reddit’s thread-based model, SolveIt enables students to post coursework challenges, attach rich solution media, upvote peer contributions, and build a verified reputation within an incentivized academic ecosystem.',
            image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop',
            technologies: 'React, Flask, Tailwind',
            link: 'https://github.com/pukaradhikari1/SolveIt'
        },
        {
            id: 3,
            title: 'Plant Disease Detection',
            description: 'Plant Disease Detection is an intelligent agricultural web platform designed to eliminate crop yield loss by offering instant, AI-driven plant pathology diagnostics. By uploading leaf images, farmers receive instant disease classification powered by computer vision models, accompanied by actionable treatment plans, chemical recommendations, and preventative measures.',
            image: 'https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?w=600&h=400&fit=crop',
            technologies: 'TypeScript, Flask, PostgreSQL , TensorFlow',
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