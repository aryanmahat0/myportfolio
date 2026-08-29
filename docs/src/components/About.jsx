import React from 'react';


function About() {
    const skills = [
        'React & TypeScript',
        'Node.js & Python',
        'UI/UX Design',
        'Database Design',
        'API Development',
        'Responsive Design'
    ];

    return (
        <section className="about" id="about">
            <div className="section-header">
                <h2 className="section-title">About Me</h2>
                <p className="section-subtitle">Passionate about creating meaningful digital experiences</p>
            </div>
            <div className="about-content">
                <div className="about-text">
                    <p>
                        Hello! I'm a Computer Engineering undergraduate at Kathmandu University,
                        currently in my 3rd year (5th semester), with a strong passion for
                        full-stack development and building meaningful digital solutions.
                        I enjoy transforming ideas into functional and visually engaging
                        web applications through clean code and thoughtful design.
                    </p>
                    <p>
                        As a growing developer, I focus on combining modern development practices
                        with strong fundamentals in programming and system design. I aim to create
                        applications that are not only technically efficient but also intuitive,
                        user-friendly, and impactful.
                    </p>
                    <p>
                        I believe in continuous learning and constantly improving my skills
                        by exploring new technologies and working on real-world projects.
                        Alongside development, I’m enthusiastic about teaching and sharing
                        knowledge, helping others grow while strengthening my own understanding.
                    </p>
                </div>
                <div className="about-image">
                    <img
                        src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=600&fit=crop"
                        alt="Workspace"
                    />
                </div>
            </div>
            <div className="skills-list">
                {skills.map((skill, index) => (
                    <div key={index} className="skill-item">
                        {skill}
                    </div>
                ))}
            </div>
        </section>
    );
}

export default About;