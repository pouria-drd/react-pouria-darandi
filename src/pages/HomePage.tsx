import HomeSection from "../components/home/HomeSection";
import AboutSection from "../components/about/AboutSection";

import PageLayout from "../components/layouts/PageLayout";

function HomePage() {
    return (
        <PageLayout>
            <HomeSection />
            <AboutSection />
        </PageLayout>
    );
}

export default HomePage;
