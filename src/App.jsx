import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import SkillsSection from "./components/SkillsSection"

export default function App() {
    return (
        <div className='min-vh-100'>
            <Navbar />
            <HeroSection />
            <AboutSection />
            <SkillsSection />
        </div>
    );
}
