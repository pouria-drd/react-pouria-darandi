import {
    AboutSection,
    IntroSection,
    ProjectsSection,
    ServiceSection,
    SkillsSection,
} from "../components/sections/home";

function HomePage() {
    return (
        <>
            <IntroSection />
            <AboutSection />
            <ServiceSection />
            <SkillsSection />
            <ProjectsSection />
        </>
    );
}

export default HomePage;
