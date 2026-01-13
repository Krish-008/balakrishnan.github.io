import Section from './Section';

export default function Contact() {
    return (
        <Section id="contact" style={{ background: 'var(--foreground)', color: 'var(--background)' }}>
            <h2 style={{ color: 'var(--background)' }}>Get in Touch</h2>
            <p style={{ color: 'var(--gray-800)', marginBottom: '2rem', borderBottom: '1px solid var(--background)' }}>
                <a href="mailto:barumugam@smu.edu" style={{ fontSize: '2rem', fontWeight: 'bold', color: 'var(--background)' }}>
                    barumugam@smu.edu
                </a>
            </p>

            <div style={{ display: 'flex', gap: '2rem', fontSize: '1.2rem' }}>
                <a href="https://www.linkedin.com/in/barumugam08/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                <a href="https://github.com/Krish-008" target="_blank" rel="noopener noreferrer">GitHub</a>
            </div>
        </Section>
    );
}
