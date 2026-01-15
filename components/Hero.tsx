import Section from './Section';
import Image from 'next/image';

const skills = [
    { name: 'Python', icon: <svg viewBox="0 0 24 24" fill="#3776AB"><path d="M14.25.3c.1.34.13.68.12 1.02a3.8 3.8 0 01-3.6 3.6c-.34.02-.68-.01-1.02-.12v.12a5 5 0 004.5 4.5l.12-.12c-.1-.34-.13-.68-.12-1.02a3.8 3.8 0 013.6-3.6c.34-.02.68.01 1.02.12v-.12a5 5 0 00-4.5-4.5zM8.5 4.34a2.25 2.25 0 110 4.5 2.25 2.25 0 010-4.5zm0 .5c.97 0 1.75.78 1.75 1.75S9.47 8.34 8.5 8.34s-1.75-.78-1.75-1.75.78-1.75 1.75-1.75zM15.5 15.16a2.25 2.25 0 110-4.5 2.25 2.25 0 010 4.5zm0-.5c-.97 0-1.75-.78-1.75-1.75s.78-1.75 1.75-1.75 1.75.78 1.75 1.75-.78 1.75-1.75 1.75zM9.75 23.7c-.1-.34-.13-.68-.12-1.02a3.8 3.8 0 013.6-3.6c.34-.02.68.01 1.02.12v-.12a5 5 0 00-4.5-4.5l-.12.12c.1.34.13.68.12 1.02a3.8 3.8 0 01-3.6 3.6c-.34.02-.68-.01-1.02-.12v.12a5 5 0 004.5 4.5z" /></svg> },
    { name: 'Java', icon: <svg viewBox="0 0 24 24" fill="#007396"><path d="M12 18.5s-4.5-2.5-4.5-6.5S12 5.5 12 5.5s4.5 2.5 4.5 6.5-4.5 6.5-4.5 6.5zm-2-6.5h4v1h-4v-1zm0 2h4v1h-4v-1z" /></svg> },
    { name: 'SQL', icon: <svg viewBox="0 0 24 24" fill="#336791"><path d="M12 2C6.48 2 2 4.69 2 8s4.48 6 10 6 10-2.69 10-6-4.48-6-10-6zm0 10c-4.42 0-8-1.79-8-4s3.58-4 8-4 8 1.79 8 4-3.58 4-8 4zm0 2c-5.52 0-10 2.69-10 6s4.48 6 10 6 10-2.69 10-6-4.48-6-10-6zm0 10c-4.42 0-8-1.79-8-4s3.58-4 8-4 8 1.79 8 4-3.58 4-8 4z" /></svg> },
    { name: 'TensorFlow', icon: <svg viewBox="0 0 24 24" fill="#FF6F00"><path d="M12 1L2 6.5v11L12 23l10-5.5v-11L12 1zm0 3.5l7 4v7l-7 4-7-4v-7l7-4z" /></svg> },
    { name: 'Scikit-learn', icon: <svg viewBox="0 0 24 24" fill="#F7931E"><path d="M12 2L2 7v10l10 5 10-5V7L12 2zm0 17.5L4.5 16V8L12 4.5 19.5 8v8L12 19.5z" /></svg> },
    { name: 'NLP', icon: <svg viewBox="0 0 24 24" fill="#4CAF50"><path d="M20 2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z" /></svg> },
    { name: 'Pandas', icon: <svg viewBox="0 0 24 24" fill="#150458"><path d="M3 2h6v20H3V2zm12 0h6v20h-6V2zm-9 9h9v2H6v-2z" /></svg> },
    { name: 'NumPy', icon: <svg viewBox="0 0 24 24" fill="#013243"><path d="M12 2L2 7v10l10 5 10-5V7L12 2zm0 17l-7-3.5V8.5L12 5l7 3.5v7l-7 3.5z" /></svg> },
    { name: 'MySQL', icon: <svg viewBox="0 0 24 24" fill="#4479A1"><path d="M12 2C8.13 2 5 3.79 5 6s3.13 4 7 4 7-1.79 7-4-3.13-4-7-4zm0 18c-3.87 0-7-1.79-7-4s3.13-4 7-4 7 1.79 7 4-3.13 4-7 4z" /><path d="M5 6v10c0 2.21 3.13 4 7 4s7-1.79 7-4V6c0 2.21-3.13 4-7 4s-7-1.79-7-4z" /></svg> },
    { name: 'Azure', icon: <svg viewBox="0 0 24 24" fill="#0078D4"><path d="M12 2L2 22h20L12 2zm0 4.5l6.5 13H5.5l6.5-13z" /></svg> },
    { name: 'GCP', icon: <svg viewBox="0 0 24 24" fill="#4285F4"><path d="M12 2L2 7v10l10 5 10-5V7L12 2zm0 17l-7-3.5V8.5L12 5l7 3.5v7L12 19z" /></svg> },
    { name: 'Git', icon: <svg viewBox="0 0 24 24" fill="#F05032"><path d="M22.65 10.3L13.7 1.35a1.91 1.91 0 0 0-2.7 0L9.41 3.01l4.28 4.28a3 3 0 0 1 4.24 4.24l4.28 4.28a3 3 0 0 1-4.24 4.24l-4.28-4.28v6.78a3 3 0 0 1-5.76 1.16L3.92 15a1.91 1.91 0 0 0 0 2.7l8.95 8.95a1.91 1.91 0 0 0 2.7 0l8.95-8.95a1.91 1.91 0 0 0 0-2.7z" /></svg> },
    { name: 'Docker', icon: <svg viewBox="0 0 24 24" fill="#2496ED"><path d="M3 10V4h18v6h-2V6H5v4H3zm12.5-3h-9v1h9V7zm-9 2h9v1h-9V9zM2 13v7h20v-7H2z" /></svg> },
    { name: 'Figma', icon: <svg viewBox="0 0 24 24" fill="#F24E1E"><path d="M12 2A5 5 0 0 0 7 7a5 5 0 0 0 1.5 3.5A5 5 0 0 0 7 14a5 5 0 0 0 1.5 3.5A5 5 0 0 0 7 21a5 5 0 0 0 5 5 5 5 0 0 0 5-5 5 5 0 0 0-1.5-3.5A5 5 0 0 0 17 14a5 5 0 0 0-1.5-3.5A5 5 0 0 0 17 7a5 5 0 0 0-5-5z" /></svg> }
];

export default function Hero() {
    return (
        <Section id="hero" style={{ padding: 0 }}>
            <div className="section-background bg-hero" />

            <div className="glass-container">
                <div className="hero-content">
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <Image
                            src="/profile.jpeg"
                            alt="Profile"
                            className="profile-photo"
                            width={350}
                            height={350}
                            priority
                            style={{
                                borderRadius: '24px',
                                marginBottom: '1.5rem',
                                objectFit: 'cover',
                                boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)',
                                cursor: 'pointer',
                                border: '4px solid rgba(255, 255, 255, 0.3)'
                            }}
                        />
                        <h3 style={{ fontSize: '4rem', fontWeight: '600', color: '#1f2937' }}>Hi, I am Balakrishnan</h3>
                    </div>

                    <div style={{
                        maxWidth: '600px',
                        textAlign: 'left',
                    }}>
                        <h2 style={{
                            marginBottom: '0.2rem',
                            fontSize: '2.8rem',
                            fontWeight: '800',
                            background: 'linear-gradient(135deg, #1f2937 0%, #3b82f6 100%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent'
                        }}>About Me</h2>

                        <div style={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '1.2rem',
                            color: '#4b5563',
                            fontSize: '1.05rem',
                            lineHeight: '1.65',
                        }}>
                            <p style={{ margin: 0 }}>
                                <strong>What do curiosity and persistence have in common?</strong><br />
                                Yep that's me, a <strong>Master's student in Computer Science at <a href="https://www.smu.edu" target="_blank" rel="noopener noreferrer" style={{ color: '#3b82f6', textDecoration: 'none', fontWeight: '800' }}>SMU, Texas, USA</a></strong>.
                            </p>
                            <p style={{ margin: 0 }}>
                                I believe what we learn is just a <strong>stone compared to the sea of knowledge</strong>, and this realization drives me every day to <strong>keep learning, exploring, and improving</strong>.
                            </p>
                            <p style={{ margin: 0 }}>
                                I enjoy working across <strong>multiple domains of computer science</strong>, with a strong focus on <strong>building models using real-world data</strong>, particularly <strong>medical datasets</strong>.
                            </p>
                            <p style={{ margin: 0 }}>
                                At the same time, I genuinely enjoy <strong>building things end-to-end</strong>, which has made me comfortable working with <strong>applications, frontends, and system-level components</strong>.
                            </p>
                            <p style={{ margin: 0 }}>
                                Alongside my coursework, I work as a <strong>Teaching Assistant for the Operating Systems course at SMU</strong>, where I support students with <strong>core OS concepts, lab work, and problem-solving</strong>.
                            </p>
                        </div>
                    </div>
                </div>

                <div style={{
                    width: '100%',
                    padding: '0.5rem 2rem 2.5rem',
                    overflowY: 'visible',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center'
                }}>


                    <div style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'center',
                        flexWrap: 'wrap',
                        gap: '0.8rem',
                        maxWidth: '1100px',
                        background: 'rgba(255, 255, 255, 0.2)',
                        padding: '1rem 2rem',
                        borderRadius: '50px',
                        backdropFilter: 'blur(10px)',
                        boxShadow: 'inset 0 0 20px rgba(255, 255, 255, 0.2)',
                    }}>
                        {skills.map((skill, index) => (
                            <div
                                key={index}
                                className="skill-icon"
                                data-skill={skill.name}
                                style={{
                                    width: '35px',
                                    height: '35px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    background: 'rgba(255, 255, 255, 0.8)',
                                    borderRadius: '50%',
                                    padding: '8px',
                                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                                    cursor: 'pointer',
                                    position: 'relative',
                                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)'
                                }}
                            >
                                {skill.icon}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </Section>
    );
}
