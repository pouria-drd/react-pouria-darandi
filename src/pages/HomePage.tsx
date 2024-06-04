import PageLayout from "../components/layouts/PageLayout";

import HomeSection from "../components/home-content/home/HomeSection";
import AboutSection from "../components/home-content/about/AboutSection";
import SkillsSection from "../components/home-content/skills/SkillsSection";
import ServiceSection from "../components/home-content/service/ServiceSection";
import ProjectsSection from "../components/home-content/projects/ProjectsSection";

function HomePage() {
    return (
        <PageLayout>
            <HomeSection />
            <AboutSection />
            <SkillsSection />
            <ServiceSection />
            <ProjectsSection />
        </PageLayout>
    );
}

export default HomePage;
