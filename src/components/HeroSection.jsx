import { FaGithub, FaFacebook, FaWhatsapp, FaLinkedinIn } from "react-icons/fa";
import { FiMapPin, FiMail } from "react-icons/fi";
import profileImg from "../assets/profile.png";
import cv from "../uploads/John_Ivan_Macaraeg_Resume.pdf";
import { useState, useEffect } from "react";
import { FiDownload, FiArrowRight } from "react-icons/fi";

const socials = [
    { icon: FaGithub, label: "GitHub", href: "https://github.com/jhnvnmcrg" },
    {
        icon: FaLinkedinIn,
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/jhnvnmcrg"
    },
    {
        icon: FaFacebook,
        label: "Facebook",
        href: "https://www.facebook.com/ivanpai15"
    },
    {
        icon: FaWhatsapp,
        label: "WhatsApp",
        href: "https://wa.me/qr/EQ3OASJD3HLIM1"
    }
];

const roles = [
    "Full Stack Developer",
    "Software Developer",
    "Frontend Developer",
    "Backend Developer"
];

export default function HeroSection() {
    const [idx, setIdx] = useState(0);
    const [text, setText] = useState("");
    const [typing, setTyping] = useState(true);

    useEffect(() => {
        const role = roles[idx];
        let t;
        if (typing) {
            if (text.length < role.length) {
                t = setTimeout(
                    () => setText(role.slice(0, text.length + 1)),
                    65
                );
            } else {
                t = setTimeout(() => setTyping(false), 2200);
            }
        } else {
            if (text.length > 0) {
                t = setTimeout(() => setText(text.slice(0, -1)), 35);
            } else {
                setIdx(i => (i + 1) % roles.length);
                setTyping(true);
            }
        }
        return () => clearTimeout(t);
    }, [text, typing, idx]);
    return (
        <>
            <div className='container mt-5'>
                <div className='row align-items-center'>
                    <div className='col-lg-5 col-md-8 mt-5 mt-lg-5'>
                        <div className='d-flex justify-content-center align-items-center'>
                            <div className='pcard anim-slide-left d0'>
                                <div className='pcard-header'>
                                    <div className='pcard-dot-pattern' />
                                    <div className='pcard-accent-bar' />
                                    <div className='pcard-avatar-wrap anim-float'>
                                        <div className='pcard-avatar'>
                                            <img
                                                src={profileImg}
                                                alt='Profile'
                                            />
                                        </div>
                                        <span className='pcard-online-dot' />
                                    </div>
                                    <div className='pcard-identity'>
                                        <h2 className='pcard-name'>
                                            John Ivan Macaraeg
                                        </h2>
                                        <span className='pcard-badge'>
                                            Full Stack Developer
                                        </span>
                                    </div>
                                </div>
                                <div className='pcard-info'>
                                    <div className='d-flex align-items-center gap-2'>
                                        <FiMapPin
                                            size={13}
                                            className='pcard-info-icon'
                                        />
                                        <span className='pcard-info-text'>
                                            South Cotabato, Philippines
                                        </span>
                                    </div>
                                    <div className='d-flex align-items-center gap-2'>
                                        <FiMail
                                            size={13}
                                            className='pcard-info-icon'
                                        />
                                        <span className='pcard-info-text'>
                                            jhvnmacaraeg@gmail.com
                                        </span>
                                    </div>
                                </div>
                                <hr className='pcard-divider' />
                                <hr className='pcard-divider' />
                                <div className='pcard-socials d-flex justify-content-center gap-2'>
                                    {socials.map(
                                        ({ icon: Icon, label, href }) => (
                                            <a
                                                key={label}
                                                href={href}
                                                target='_blank'
                                                rel='noopener noreferrer'
                                                className='social-icon'
                                                title={label}
                                            >
                                                <Icon size={15} />
                                            </a>
                                        )
                                    )}
                                </div>
                                <div className='pcard-availability d-flex align-items-center gap-2'>
                                    <span className='pcard-green-dot' />
                                    <span className='pcard-availability-text'>
                                        Available for work
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-7 col-md-4 mt-5 mt-lg-5'>
                        <div className='hero-section'>
                            <div className='hero-eyebrow anim-slide-right d1 d-flex align-items-center gap-2 mb-4'>
                                <div className='hero-eyebrow__line' />
                                <span className='hero-eyebrow__label'>
                                    Portfolio 2026
                                </span>
                            </div>
                            <div className='anim-slide-right d2 mb-3'>
                                <p className='hero-greeting mb-1'>Hello, I'm</p>
                                <h1 className='hero-name mb-3'>
                                    John Ivan Macaraeg
                                </h1>
                                <div className='d-flex align-items-center gap-2 hero-typewriter'>
                                    <div className='hero-typewriter__bar' />
                                    <span className='hero-typewriter__text'>
                                        {text}
                                        <span className='hero-typewriter__cursor' />
                                    </span>
                                </div>
                            </div>
                            <p className='hero-bio anim-slide-right d3'>
                                I build end-to-end web systems using modern
                                frameworks like React and Node.js. My focus is
                                on writing maintainable code, securing data
                                integrity, and creating seamless user
                                experiences. Currently based in the Philippines
                                and open to new opportunities.
                            </p>
                            <div className='d-flex flex-wrap gap-3 mb-5 anim-slide-right d4'>
                                <button className='hero-bg-pr d-flex align-items-center gap-2'>
                                    View Projects <FiArrowRight size={13} />
                                </button>
                                <a
                                    href={cv}
                                    download
                                    className='hero-bg-cv d-flex align-items-center gap-2'
                                >
                                    <FiDownload size={13} /> Download CV
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
