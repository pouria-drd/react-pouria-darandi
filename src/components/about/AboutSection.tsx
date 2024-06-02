import SectionLayout from "../layouts/SectionLayout";
import PouriaBorderHexIcon from "../icons/PouriaBorderHexIcon";

const AboutSection = () => {
    return (
        <SectionLayout className="pt-32 pb-20" id="about">
            <div className="flex flex-col-reverse md:flex-row items-center justify-center gap-20 md:gap-4 h-full">
                <div className="flex items-center  justify-center w-full">
                    <PouriaBorderHexIcon />
                </div>

                <div
                    className="
                    flex flex-col items-center md:items-start justify-start gap-4
                    w-full h-full">
                    <h3 className="text-3xl text-pd-primary-text">About Me</h3>
                    <p className="text-pd-secondary-text text-center md:text-justify max-w-80 lg:max-w-96">
                        I'm React, Vue, Django and Unity developer, With 3 years
                        of experience in web and game development at ferait
                        team, I offer the best projects resulting in quality
                        work.
                    </p>
                    <a className="my-btn mt-3">Contact Me</a>
                </div>
            </div>
        </SectionLayout>
    );
};

export default AboutSection;
