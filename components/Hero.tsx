import Section from './Section';

export default function Hero() {
    return (
        <Section id="hero" style={{ padding: 0 }}>
            {/* Background Layer */}
            <div className="section-background bg-hero" />

            {/* Glass Container */}
            <div className="glass-container">

                {/* Hero Content - Side by side layout */}
                <div style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '4rem',
                    padding: '2rem',
                    maxWidth: '1200px',
                }}>
                    {/* Left side - Profile Image */}
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <img
                            src="/profile.jpeg"
                            alt="Profile"
                            className="profile-photo"
                            style={{
                                width: '350px',
                                height: '350px',
                                borderRadius: '24px',
                                marginBottom: '1.5rem',
                                objectFit: 'cover',
                                boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.2)',
                                cursor: 'pointer'
                            }}
                        />
                        <h3>Hi, I am Balakrishnan</h3>
                    </div>

                    {/* Right side - About Me Content */}
                    <div style={{
                        maxWidth: '500px',
                        textAlign: 'left',
                    }}>
                        <h2 style={{ marginBottom: '1.5rem', fontSize: '3rem' }}>About Me</h2>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', color: 'var(--gray-800)', fontSize: '1.1rem', lineHeight: '1.7', fontFamily: 'Florence' }}>
                            <p>
                                An independent and self-motivated Computer Science graduate student with a strong foundation in AI, Machine Learning, and Software Development. I am passionate about Reinforcement Learning, NLP, and automation, constantly seeking opportunities to apply innovative AI techniques to real-world challenges.
                                With experience in full-stack development, database management, and AI-driven automation.
                            </p>

                            <p style={{ fontStyle: 'italic', marginTop: '1rem' }}>
                                I am currently seeking internship opportunities for Summer 2025 in AI, software development, and research, where I can contribute my skills and continue to grow. Let's connect and innovate together!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
}
