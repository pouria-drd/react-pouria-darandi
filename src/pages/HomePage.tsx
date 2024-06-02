import PageLayout from "../components/layouts/PageLayout";

import HomeSection from "../components/home/HomeSection";
import AboutSection from "../components/about/AboutSection";
import ServiceSection from "../components/service/ServiceSection";

function HomePage() {
    return (
        <PageLayout>
            <HomeSection />
            <AboutSection />
            <ServiceSection />
        </PageLayout>
    );
}

export default HomePage;
