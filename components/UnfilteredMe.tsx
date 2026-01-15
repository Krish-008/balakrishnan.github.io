import Section from './Section';

const interests = [
    {
        title: "Sports",
        description: "My favorite way to escape reality. Forever inspired by the goat, Cristiano Ronaldo.",
        image: "/balakrishnan.github.io/image.png",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 2v20M2 12h20" />
            </svg>
        ),
        type: "bento-large",
        accent: "#3b82f6"
    },
    {
        title: "The Anime Fan",
        description: "Hardcore fan. I loved the Beyblade era—spinning tops and epic battles.",
        image: "/balakrishnan.github.io/anime.png",
        icon: (
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 14.5c-2.49 0-4.5-2.01-4.5-4.5S9.51 7.5 12 7.5s4.5 2.01 4.5 4.5-2.01 4.5-4.5 4.5z" />
            </svg>
        ),
        type: "bento-wide",
        accent: "#ef4444"
    },
    {
        title: "Kdramas",
        description: "KDramas are my escape. Reply 1995 holds a special place in my heart.",
        image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=1000",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
                <rect x="2" y="7" width="20" height="13" rx="2" />
                <path d="M17 2l-5 5-5-5" />
            </svg>
        ),
        type: "bento-tall",
        accent: "#f59e0b"
    },
    {
        title: "Sit-Coms",
        description: "Phil Dunphy is my spirit animal. Sitcoms keep the mood light!",
        image: "/balakrishnan.github.io/sitcom.png",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
                <path d="M3 12h18M3 12l9-9 9 9M5 12v9a1 1 0 001 1h12a1 1 0 001-1v-9M9 22V12h6v10" />
            </svg>
        ),
        type: "",
        accent: "#10b981"
    },
    {
        title: "Wanderlust",
        description: "I want to explore every corner of the world one day.",
        image: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&q=80&w=1000",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
                <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
            </svg>
        ),
        type: "bento-wide",
        accent: "#8b5cf6"
    },
    {
        title: "Art & Sketching",
        description: "Capturing thoughts and emotions through charcoal and graphite.",
        image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&q=80&w=1000",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
                <path d="M12 19l7-7 3 3-7 7-3-3zM18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
            </svg>
        ),
        type: "",
        accent: "#6b7280"
    },

];

export default function UnfilteredMe() {
    return (
        <Section id="unfiltered-me" style={{ padding: 0 }}>
            <div className="section-background bg-unfiltered" />

            <div className="glass-container" style={{ padding: '4rem 2rem' }}>
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <h2 style={{
                        fontSize: '3.5rem',
                        fontWeight: '800',
                        background: 'linear-gradient(135deg, #1f2937 0%, #3b82f6 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        marginBottom: '1rem'
                    }}>
                        The Persona Mosaic
                    </h2>
                    <p style={{ color: '#4b5563', fontSize: '1.2rem', maxWidth: '800px', margin: '0 auto' }}>
                        Beyond the code and data, here's a glimpse into the things that make me who I am.
                    </p>
                </div>

                <div className="bento-grid">
                    {interests.map((interest, index) => (
                        <div
                            key={index}
                            className={`bento-card ${interest.type}`}
                            style={{
                                backgroundImage: `url(${interest.image})`
                            }}
                        >
                            <h3>{interest.title}</h3>
                            <p>{interest.description}</p>
                            <div style={{
                                position: 'absolute',
                                bottom: 0,
                                left: 0,
                                width: '100%',
                                height: '6px',
                                background: interest.accent,
                                opacity: 0.8,
                                zIndex: 3
                            }} />
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    );
}
