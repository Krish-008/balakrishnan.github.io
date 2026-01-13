import Section from './Section';

export default function UnfilteredMe() {
    return (
        <Section id="unfiltered-me" style={{ padding: 0 }}>
            {/* Background Layer */}
            <div className="section-background bg-unfiltered" />

            {/* Glass Container */}
            <div className="glass-container">

                <h2>Unfiltered Me</h2>
                <p>
                    Currently under construction.
                    This space will be for my random thoughts, behind-the-scenes, and everything in between.
                </p>
            </div>
        </Section>
    );
}
