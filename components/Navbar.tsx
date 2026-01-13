import Link from 'next/link';

export default function Navbar() {
    return (
        <nav style={{
            position: 'fixed',
            top: '1rem',
            left: '50%',
            transform: 'translateX(-50%)',
            width: 'auto',
            justifyContent: 'center',
            padding: '1rem 2rem',
            zIndex: 1000,
            display: 'flex',
            gap: '2rem',
            background: 'rgba(255, 255, 255, 0.4)',
            backdropFilter: 'blur(10px)',
            WebkitBackdropFilter: 'blur(10px)',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
            color: '#1d1c1c',
            borderRadius: '50px',
        }}>
            <h1><Link href="#hero">Home</Link></h1>
            <h1><Link href="#about">About</Link></h1>
            <h1><Link href="#projects">Projects</Link></h1>
            <h1><Link href="#unfiltered-me">Unfiltered Me</Link></h1>
            <h1><Link href="#contact">Contact</Link></h1>
        </nav>
    );
}
