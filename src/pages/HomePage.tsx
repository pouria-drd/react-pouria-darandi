import PageLayout from "../components/layouts/PageLayout";
import HomeSection from "../components/home-content/home/HomeSection";
import AboutSection from "../components/home-content/about/AboutSection";
import ServiceSection from "../components/home-content/service/ServiceSection";

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
