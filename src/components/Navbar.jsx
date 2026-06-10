import { useState, useEffect } from "react";

const links = ["Home", "About", "Skills", "Projects", "Contact"];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [active, setActive] = useState("Home");

    useEffect(() => {
        const fn = () => setScrolled(window.scrollY > 10);
        window.addEventListener("scroll", fn);
        return () => window.removeEventListener("scroll", fn);
    }, []);

    return (
        <>
            <header className={`navbar-main${scrolled ? " scrolled" : ""}`}>
                <div className='navbar-inner d-flex align-items-center justify-content-between'>
                    <a
                        href='#'
                        className='d-flex align-items-center gap-2 text-decoration-none'
                    >
                        <span className='brand-name'>JHNVNMCRG</span>
                    </a>
                    <nav className='d-none d-md-flex align-items-center gap-4'>
                        {links.map(l => (
                            <button
                                key={l}
                                className={`nav-link-custom${active === l ? " active" : ""}`}
                                onClick={() => setActive(l)}
                            >
                                {l}
                            </button>
                        ))}
                    </nav>
                    <div className='d-none d-md-flex align-items-center'>
                        <a href='mailto:juan@email.com' className='btn-hire'>
                            Hire Me
                        </a>
                    </div>
                    <button
                        className='d-flex d-md-none flex-column justify-content-center align-items-center border-0 bg-transparent p-1'
                        data-bs-toggle='collapse'
                        data-bs-target='#mobileMenu'
                        aria-controls='mobileMenu'
                        aria-label='Toggle navigation'
                        style={{ gap: 5, cursor: "pointer" }}
                    >
                        <span className='hamburger-line' />
                        <span className='hamburger-line' />
                        <span className='hamburger-line' />
                    </button>
                </div>
                <div className='collapse d-md-none' id='mobileMenu'>
                    <div className='mobile-menu-panel'>
                        {links.map(l => (
                            <button
                                key={l}
                                className={`mobile-nav-item${active === l ? " active" : ""}`}
                                onClick={() => setActive(l)}
                            >
                                {l}
                            </button>
                        ))}
                    </div>
                </div>
            </header>
        </>
    );
}
