import { useEffect, useRef, useState } from "react";
import {
    SiReact,
    SiVite,
    SiBootstrap,
    SiTailwindcss,
    SiMui,
    SiShadcnui,
    SiNodedotjs,
    SiExpress,
    SiPhp,
    SiLaravel,
    SiPython,
    SiMongodb,
    SiSupabase,
    SiFirebase,
    SiMysql,
    SiPostgresql,
    SiAnthropic,
    SiOpenai,
    SiGooglegemini
} from "react-icons/si";
import { FiMonitor, FiServer, FiDatabase, FiCpu } from "react-icons/fi";

/* ── Intersection observer hook ── */
function useInView(threshold = 0.1) {
    const ref = useRef(null);
    const [visible, setVisible] = useState(false);
    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const obs = new IntersectionObserver(
            ([e]) => {
                if (e.isIntersecting) {
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

/* ── Data ── */
const categories = [
    {
        id: "frontend",
        label: "Frontend",
        icon: FiMonitor,
        color: "#0ea5e9",
        colorBg: "#e8f0fb",
        colorBorder: "#bae6fd",
        stacks: [
            { name: "React", icon: SiReact, color: "#61dafb" },
            { name: "Vite", icon: SiVite, color: "#646cff" },
            { name: "Bootstrap", icon: SiBootstrap, color: "#7952b3" },
            { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06b6d4" },
            { name: "MUI", icon: SiMui, color: "#007fff" },
            { name: "shadcn/ui", icon: SiShadcnui, color: "#0f172a" }
        ]
    },
    {
        id: "backend",
        label: "Backend",
        icon: FiServer,
        color: "#16a34a",
        colorBg: "#e8f0fb",
        colorBorder: "#bbf7d0",
        stacks: [
            { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
            { name: "Express.js", icon: SiExpress, color: "#000000" },
            { name: "PHP", icon: SiPhp, color: "#777bb4" },
            { name: "Laravel", icon: SiLaravel, color: "#ef4444" },
            { name: "Python", icon: SiPython, color: "#3776ab" }
        ]
    },
    {
        id: "database",
        label: "Database",
        icon: FiDatabase,
        color: "#f59e0b",
        colorBg: "#e8f0fb",
        colorBorder: "#fde68a",
        stacks: [
            { name: "MongoDB", icon: SiMongodb, color: "#47a248" },
            { name: "Supabase", icon: SiSupabase, color: "#3ecf8e" },
            { name: "Firebase", icon: SiFirebase, color: "#ffca28" },
            { name: "MySQL", icon: SiMysql, color: "#4479a1" },
            { name: "PostgreSQL", icon: SiPostgresql, color: "#336791" }
        ]
    },
    {
        id: "ai",
        label: "AI",
        icon: FiCpu,
        color: "#8b5cf6",
        colorBg: "#e8f0fb",
        colorBorder: "#ddd6fe",
        stacks: [
            { name: "Anthropic Claude", icon: SiAnthropic, color: "#d97757" },
            { name: "OpenAI", icon: SiOpenai, color: "#000000" },
            { name: "Google Gemini", icon: SiGooglegemini, color: "#4285f4" }
        ]
    }
];

/* ── Single tech card ── */
function TechCard({ name, icon: Icon, color, visible, delay }) {
    const [hovered, setHovered] = useState(false);
    return (
        <div
            className='tech-card'
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(16px)",
                transition: `opacity 0.5s ease ${delay}ms, transform 0.5s ease ${delay}ms, border 0.2s, background 0.2s`,
                border: hovered
                    ? `1px solid ${color}55`
                    : "1px solid var(--color-border)",
                background: hovered ? `${color}08` : "#fff"
            }}
        >
            <div
                className='tech-card__icon-wrap'
                style={{
                    border: hovered
                        ? `1px solid ${color}40`
                        : "1px solid var(--color-border-light)",
                    background: hovered ? `${color}12` : "var(--color-surface)"
                }}
            >
                <Icon
                    size={22}
                    style={{
                        color: hovered ? color : "#64748b",
                        transition: "color 0.2s"
                    }}
                />
            </div>
            <span
                className='tech-card__name'
                style={{
                    color: hovered
                        ? "var(--color-ink)"
                        : "var(--color-ink-light)"
                }}
            >
                {name}
            </span>
        </div>
    );
}

/* ── Category block ── */
function CategoryBlock({ category, visible, baseDelay }) {
    const {
        label,
        icon: CatIcon,
        color,
        colorBg,
        colorBorder,
        stacks
    } = category;
    return (
        <div
            className='category-block border'
            style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(20px)",
                transition: `opacity 0.6s ease ${baseDelay}ms, transform 0.6s ease ${baseDelay}ms`
            }}
        >
            {/* Header */}
            <div
                className='category-block__header d-flex align-items-center gap-2 border'
                style={{ background: colorBg }}
            >
                <div
                    className='category-block__icon-wrap d-flex align-items-center justify-content-center'
                    style={{ border: `1px solid ${colorBorder}` }}
                >
                    <CatIcon size={14} style={{ color }} />
                </div>
                <span className='category-block__label'>{label}</span>
            </div>

            {/* Tech cards grid */}
            <div className='row g-2 p-3 tech-cards-grid'>
                {stacks.map((tech, i) => (
                    <div key={tech.name} className='col-4 col-sm-4'>
                        <TechCard
                            {...tech}
                            visible={visible}
                            delay={baseDelay + 80 + i * 50}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

/* ── Main section ── */
export default function SkillsSection() {
    const [secRef, secVisible] = useInView(0.06);
    const [gridRef, gridVisible] = useInView(0.05);

    return (
        <section id='skills' ref={secRef} className='skills-section'>
            <div className='skills-container'>
                {/* Section label */}
                <div
                    className='d-flex align-items-center gap-3 mb-3'
                    style={{
                        opacity: secVisible ? 1 : 0,
                        transform: secVisible ? "none" : "translateY(16px)",
                        transition: "opacity 0.6s ease, transform 0.6s ease"
                    }}
                >
                    <span className='skills-section-label'>03 / Skills</span>
                    <div className='skills-section-rule' />
                </div>

                {/* Heading */}
                <div
                    className='mb-5'
                    style={{
                        opacity: secVisible ? 1 : 0,
                        transform: secVisible ? "none" : "translateY(16px)",
                        transition:
                            "opacity 0.6s ease 80ms, transform 0.6s ease 80ms"
                    }}
                >
                    <h2 className='skills-heading mb-2'>My Tech Stack</h2>
                    <p className='skills-subtext'>
                        Technologies I use to build full-stack applications.
                    </p>
                </div>

                {/* 2×2 category grid */}
                <div ref={gridRef} className='row g-4 skills-outer-grid'>
                    {categories.map((cat, i) => (
                        <div key={cat.id} className='col-12 col-md-6'>
                            <CategoryBlock
                                category={cat}
                                visible={gridVisible}
                                baseDelay={i * 100}
                            />
                        </div>
                    ))}
                </div>

                {/* Bottom note */}
                <div
                    className='d-flex align-items-center justify-content-center gap-2 mt-5'
                    style={{
                        opacity: gridVisible ? 1 : 0,
                        transition: "opacity 0.6s ease 600ms"
                    }}
                >
                    <div className='skills-note-line' />
                    <span className='skills-note-text'>
                        Always learning, always building
                    </span>
                    <div className='skills-note-line' />
                </div>
            </div>
        </section>
    );
}
