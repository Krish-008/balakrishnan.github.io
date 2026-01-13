import Section from './Section';

export default function About() {
    return (
        <Section id="about" style={{ padding: 0 }}>
            {/* Background Layer */}
            <div className="section-background bg-about" />

            {/* Glass Container */}
            <div className="glass-container">

                <div style={{
                    maxWidth: '900px',
                    padding: '0 2rem',
                    textAlign: 'left',
                    zIndex: 10,
                    width: '100%',
                    marginTop: '-50px', // Move content slightly up
                }}>
                    <h2 style={{ marginBottom: '4rem', textAlign: 'center' }}>About Me</h2>

                    <div style={{ marginBottom: '6rem', display: 'flex', flexDirection: 'column', gap: '1.5rem', color: 'var(--gray-800)', fontSize: '1.1rem', lineHeight: '1.7', fontFamily: 'Florence' }}>
                        <p>
                            An independent and self-motivated Computer Science graduate student with a strong foundation in AI, Machine Learning, and Software Development. I am passionate about Reinforcement Learning, NLP, and automation, constantly seeking opportunities to apply innovative AI techniques to real-world challenges.
                            With experience in full-stack development, database management, and AI-driven automation.
                        </p>




                        <p style={{ fontStyle: 'italic', textAlign: 'center', marginTop: '1rem' }}>
                            I am currently seeking internship opportunities for Summer 2025 in AI, software development, and research, where I can contribute my skills and continue to grow. Let's connect and innovate together!
                        </p>
                    </div>
                </div>
            </div>
        </Section>
    );
}
