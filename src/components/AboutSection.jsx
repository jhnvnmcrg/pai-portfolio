import { useEffect, useRef, useState } from "react";
import { FiCalendar, FiBookOpen, FiAward } from "react-icons/fi";

function useInView(threshold = 0.15) {
    const ref = useRef(null);
    const [visible, setVisible] = useState(false);
    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const obs = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                    obs.disconnect();
                }
            },
            { threshold }
        );
        obs.observe(el);
        return () => obs.disconnect();
    }, [threshold]);
    return [ref, visible];
}

const timeline = [
    {
        year: "2024 – Present",
        role: "Full Stack Developer",
        place: "Freelance / Remote",
        desc: "Building end-to-end web applications for clients across various industries using React, and Node.js.",
        icon: FiAward
    },
    {
        year: "2022 – 2026",
        role: "BS Information Technology",
        place: "Ramon Magsaysay Memorial Colleges - Marbel, Inc.",
        desc: "Graduated with honors. Focused on software development, database systems, and web development fundamentals.",
        icon: FiCalendar
    }
];

const bioParagraphs = [
    `I’m a Full Stack Developer passionate about creating clean, efficient, and user-centered web applications. I enjoy building projects from concept to deployment, combining thoughtful design with reliable developing.`,
    `My focus is on developing scalable solutions, writing maintainable code, and continuously improving my skills. I’m always eager to learn new technologies, take on meaningful challenges, and build experiences that make a difference.`,
    `I specialize in creating clean, performant applications using modern technologies like React and Node.js. I believe good software should be both technically sound and delightful to use.`,
    `When I'm not coding, you'll find me exploring design systems, contributing to open source projects, or enjoying a strong cup of coffee while brainstorming new ideas.`
];

export default function AboutSection() {
    const [sectionRef, sectionVisible] = useInView(0.08);
    const [timelineRef, timelineVisible] = useInView(0.1);

    const a = (cls, delay = 0) =>
        sectionVisible ? `${cls} delay-${delay}` : "opacity-0";

    return (
        <section id='about' ref={sectionRef} className='about-section'>
            <div className='about-container'>
                <div className='hero-eyebrow anim-slide-right d1 d-flex align-items-center gap-2 mb-4'>
                    <div className='hero-eyebrow__line' />
                    <span className='hero-eyebrow__label'>About</span>
                </div>
                <div className='row mb-5 about-bio-grid'>
                    <div className={`col-lg-12 ${a("animate-slide-r", 80)}`}>
                        <h2 className='about-heading mb-4'>
                            A developer who cares about
                            <span className='about-heading__accent'>
                                {" "}
                                craft and clarity.
                            </span>
                        </h2>
                        <div className='d-flex flex-column gap-3 mb-4'>
                            {bioParagraphs.map((para, i) => (
                                <p key={i} className='about-bio-text'>
                                    {para}
                                </p>
                            ))}
                        </div>
                    </div>
                </div>
                <div ref={timelineRef}>
                    <div
                        className={`d-flex align-items-center gap-3 mb-4 ${timelineVisible ? "animate-fade-up delay-0" : "opacity-0"}`}
                    >
                        <span className='about-timeline-label'>
                            Experience &amp; Education
                        </span>
                        <div className='about-section-rule' />
                    </div>
                    <div className='about-timeline'>
                        {timeline.map(
                            ({ year, role, place, desc, icon: Icon }, i) => (
                                <div
                                    key={i}
                                    className={`about-timeline__row ${timelineVisible ? `animate-fade-up delay-${(i + 1) * 80}` : "opacity-0"}`}
                                >
                                    <div className='about-timeline__year'>
                                        <span className='about-timeline__year-text'>
                                            {year}
                                        </span>
                                    </div>

                                    <div className='about-timeline__spine'>
                                        <div className='about-timeline__dot' />
                                        {i < timeline.length - 1 && (
                                            <div className='about-timeline__line' />
                                        )}
                                    </div>
                                    <div
                                        className={`about-timeline__card ${i < timeline.length - 1 ? "mb-3" : ""}`}
                                        onMouseEnter={e => {
                                            e.currentTarget.style.borderColor =
                                                "var(--color-accent)";
                                            e.currentTarget.style.background =
                                                "var(--color-accent-light)";
                                            e.currentTarget.style.transform =
                                                "translateX(4px)";
                                        }}
                                        onMouseLeave={e => {
                                            e.currentTarget.style.borderColor =
                                                "var(--color-border)";
                                            e.currentTarget.style.background =
                                                "#fff";
                                            e.currentTarget.style.transform =
                                                "none";
                                        }}
                                    >
                                        <div className='d-flex align-items-start justify-content-between gap-3 mb-2'>
                                            <div>
                                                <p className='about-timeline__role'>
                                                    {role}
                                                </p>
                                                <p className='about-timeline__place'>
                                                    {place}
                                                </p>
                                            </div>
                                            <div className='about-timeline__icon-wrap'>
                                                <Icon
                                                    size={13}
                                                    className='about-timeline__icon'
                                                />
                                            </div>
                                        </div>
                                        <p className='about-timeline__desc'>
                                            {desc}
                                        </p>
                                    </div>
                                </div>
                            )
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
