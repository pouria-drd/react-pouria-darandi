import Typewriter from "../components/typewriter/Typewriter";
import PouriaHexagonIcon from "../components/icons/PouriaHexagonIcon";

function HomePage() {
    return (
        <section className="bg-pd-primary-bg app-px pb-14 w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 md:gap-2">
                <div className="flex flex-col items-start gap-4 mt-20 md:mt-32 h-fit">
                    <div>
                        <h3 className="text-2xl mb-1">
                            Hello,
                            <span className="text-pd-primary"> I'm</span>
                        </h3>

                        <h1 className="text-pd-primary text-4xl font-bold">
                            Pouria Darandi
                        </h1>
                    </div>

                    <div className="text-left text-2xl w-full">
                        <Typewriter
                            texts={[
                                "React Developer",
                                "Vue Developer",
                                "Django Developer",
                                "Unity Developer",
                            ]}
                        />
                    </div>

                    <p className="text-pd-secondary-text w-fit max-w-80 sm:max-w-[350px]">
                        With knowledge in web and game development, I offer the
                        best projects resulting in quality work.
                    </p>

                    <a className="my-btn mt-4">Let's Talk</a>
                </div>

                <div className="flex items-center justify-center w-full h-full pt-10 md:pt-20">
                    <PouriaHexagonIcon />
                </div>
            </div>
        </section>
    );
}

export default HomePage;
