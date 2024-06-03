import PageLayout from "../components/layouts/PageLayout";

import HomeSection from "../components/home-content/home/HomeSection";
import AboutSection from "../components/home-content/about/AboutSection";
import SkillsSection from "../components/home-content/skills/SkillsSection";
import ServiceSection from "../components/home-content/service/ServiceSection";

function HomePage() {
    return (
        <PageLayout>
            <HomeSection />
            <AboutSection />
            <SkillsSection />
            <ServiceSection />
        </PageLayout>
    );
}

export default HomePage;
