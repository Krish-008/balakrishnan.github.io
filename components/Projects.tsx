import Section from './Section';

const projects = [
    {
        title: "ML Modeling T-ALL Dataset",
        link: "https://github.com/Krish-008/ML-modeling-and-Data-Analysis-for-T-ALL-dataset",
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="60" color='black' height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" /><path d="M5 4.5V3" /><path d="M19 4.5V3" /><path d="M12 21v-1" /><path d="M12 8V7" /><path d="M16 16l3 3" /><path d="M8 16l-3 3" /><path d="M5 21a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h2" /><path d="M19 21a2 2 0 0 0 2-2v-5a2 2 0 0 0-2-2h-2" /></svg> // AI/Brain
    },
    {
        title: "Barcode Scanner App",
        link: "https://github.com/Krish-008/Barcode_scanner-app",
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="60" color='black' height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect width="14" height="20" x="5" y="2" rx="2" ry="2" /><path d="M12 18h.01" /></svg> // Mobile
    },
    {
        title: "Expense Tracker Fullstack",
        link: "https://github.com/Krish-008/Expense-Tracker-Fullstack-project",
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="60" color='black' height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg> // Finance/Money
    },
    {
        title: "Cricket World Cup Analysis",
        link: "https://github.com/Krish-008/Cricket-world-Cup-Analysis",
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="60" color='black' height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18" /><path d="M18 17V9" /><path d="M13 17V5" /><path d="M8 17v-3" /></svg> // Chart
    },
    {
        title: "Football Analysis using Data Science",
        link: "https://github.com/Krish-008/Football-Analysis-using-Data-Science-",
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="60" color='black' height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" /><path d="M2 12h20" /></svg> // Ball/Sport
    },
    {
        title: "Hybrid LSTM-GPT Model",
        link: "https://github.com/Krish-008/Hybrid-LSTM-GPT-model",
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="60" color='black' height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" /><polyline points="7.5 4.21 12 6.81 16.5 4.21" /><polyline points="7.5 19.79 7.5 14.6 3 12" /><polyline points="21 12 16.5 14.6 16.5 19.79" /><polyline points="3.27 6.96 12 12.01 20.73 6.96" /><line x1="12" y1="22.08" x2="12" y2="12" /></svg> // Cube/Model
    },
    {
        title: "Medical Disease Prediction",
        link: "https://github.com/Krish-008/Medical-Disease-Prediction-System",
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="60" color='black' height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2" /></svg> // Pulse/Medical
    },
    {
        title: "Customer Support Automation",
        link: "https://github.com/Krish-008/Customer-support-automation-of-Ticket-creation",
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="60" color='black' height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14 9a2 2 0 0 1-2 2H6l-4 4V4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v5Z" /><path d="M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1" /></svg> // Chat/Automation
    }
];

export default function Projects() {
    return (
        <Section id="projects" style={{ padding: 0 }}>
            {/* Background Layer */}
            <div className="section-background bg-projects" />

            {/* Glass Container */}
            <div className="glass-container">

                <h2 style={{ marginTop: '4rem', marginBottom: '2rem' }}>Projects</h2>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', // Reduced min width slightly
                    gridAutoRows: '1fr', // Ensure rows respect content
                    gap: '2rem', // Increased gap
                    maxWidth: '1200px',
                    width: '100%',
                    padding: '0 2rem 6rem 2rem',
                    overflowY: 'auto',
                    maxHeight: 'calc(100vh - 150px)',
                    alignContent: 'start' // Prevents stretching
                }}>
                    {projects.map((project, index) => (
                        <a
                            key={index}
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="project-card"
                            style={{
                                aspectRatio: '1 / 1', // Force square shape
                                display: 'flex',
                                flexDirection: 'column',
                                textDecoration: 'none',
                                color: 'inherit',
                                background: 'rgba(10, 9, 9, 0.05)',
                                borderRadius: '12px',
                                overflow: 'hidden',
                                transition: 'all 0.3s ease',
                                border: '1px solid rgba(14, 10, 10, 0.1)',
                                position: 'relative' // For absolute positioning content if needed
                            }}
                        >
                            <div style={{
                                flex: 1, // Icon takes available space
                                width: '100%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                transition: 'transform 0.5s ease',
                                color: 'rgba(29, 27, 27, 0.8)' // Icon color
                            }}>
                                <div className="project-icon">
                                    {project.icon}
                                </div>
                            </div>
                            <div style={{
                                padding: '1rem',
                                // Darker background for text area
                                backdropFilter: 'blur(5px)',
                                borderTop: '1px solid rgba(131, 128, 128, 0.1)'
                            }}>
                                <h4 style={{
                                    margin: '0',
                                    fontFamily: 'inherit',
                                    fontSize: '1rem',
                                    fontWeight: '600',
                                    textAlign: 'center',
                                    whiteSpace: 'nowrap',
                                    overflow: 'hidden',
                                    textOverflow: 'ellipsis'
                                }}>
                                    {project.title}
                                </h4>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </Section>
    );
}
