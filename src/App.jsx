import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";

export default function App() {
    return (
        <div className='min-vh-100'>
            <Navbar />
            <HeroSection />
            <AboutSection />
        </div>
    );
}
