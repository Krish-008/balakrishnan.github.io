"use client"; // Client component for IntersectionObserver

import { useEffect, useRef, useState } from 'react';

interface SectionProps {
    children: React.ReactNode;
    id?: string;
    className?: string; // Allow custom classes for flexibility
    style?: React.CSSProperties;
}

export default function Section({ children, id, className = '', style }: SectionProps) {
    const sectionRef = useRef<HTMLElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                // Trigger when 10% of the section is visible
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    return (
        <section
            id={id}
            ref={sectionRef}
            className={`${className} ${isVisible ? 'reveal active' : 'reveal'}`}
            style={style}
        >
            {children}
        </section>
    );
}
