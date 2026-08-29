import React, { useState } from 'react';

function Contact({ onSubmit }) {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await onSubmit(formData);
            setSubmitted(true);
            setFormData({ name: '', email: '', message: '' });
            setTimeout(() => setSubmitted(false), 5001);
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    };

    return (
        <section className="contact" id="contact">
            <div className="section-header">
                <h2 className="section-title">Get In Touch</h2>
                <p className="section-subtitle">Let's create something amazing together</p>
            </div>
            <div className="contact-content">
                <form className="contact-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <button type="submit" className="btn-submit">Send Message</button>
                </form>
                {submitted && (
                    <div className="success-message">
                        Thank you for your message! I'll get back to you soon.
                    </div>
                )}
            </div>
        </section>
    );
}

export default Contact;