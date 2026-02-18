-- Create the database
CREATE DATABASE IF NOT EXISTS portfolio_db;
USE portfolio_db;

-- Create projects table
CREATE TABLE IF NOT EXISTS projects (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    image VARCHAR(500),
    technologies VARCHAR(500),
    link VARCHAR(500),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create contacts table
CREATE TABLE IF NOT EXISTS contacts (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    message TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Insert sample projects
INSERT INTO projects (title, description, image, technologies, link) VALUES
(
    'E-Commerce Platform',
    'A full-featured online shopping platform with payment integration, user authentication, and admin dashboard.',
    'https://images.unsplash.com/photo-1557821552-17105176677c?w=600&h=400&fit=crop',
    'React, Node.js, MongoDB, Stripe',
    '#'
),
(
    'Task Management App',
    'Collaborative project management tool with real-time updates, team chat, and progress tracking.',
    'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop',
    'Vue.js, Firebase, Tailwind',
    '#'
),
(
    'Portfolio Website',
    'Modern portfolio site with vintage aesthetics, featuring smooth animations and responsive design.',
    'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop',
    'React, Flask, MySQL',
    '#'
);