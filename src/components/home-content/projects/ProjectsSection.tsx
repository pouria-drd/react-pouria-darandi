import ProjectCard from "./ProjectCard";
import SectionLayout from "../../layouts/SectionLayout";

const ProjectsSection = () => {
    return (
        <SectionLayout
            className="flex flex-col items-center justify-center gap-16"
            id="projects">
            <div className="text-center">
                <h5 className="text-xl">
                    My <span className="text-pd-primary">Jobs</span>
                </h5>
                <h3 className="font-bold text-3xl mt-1">Recent Projects</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full h-full">
                <ProjectCard
                    title="OnlineMenuApi"
                    link="https://github.com/pouria-drd/OnlineMenuApi"
                    caption="Menu manager that helps you to easily mange your menu,
                         made with Django REST framework."
                />
                <ProjectCard
                    title="CubeRunner"
                    link="https://github.com/pouria-drd/CubeRunner"
                    caption="CubeRunner is an exiting endless runner game,
                         made with unity game engine."
                />
                <ProjectCard
                    title="drd-ui"
                    link="https://github.com/pouria-drd/drd-ui"
                    caption="A React UI component such as buttons, inputs, dropdowns checkbox, toast and modal system"
                />

                <ProjectCard
                    title="Sitechoob Panel"
                    link="https://user.sitechoob.ir/"
                    caption="Internet market of wood and cabinet industry.
                         The possibility of searching and ordering from among the best and widely used brands"
                />
                <ProjectCard
                    title="Avacadu"
                    link="https://avacadu.ir/"
                    caption="With Avacadu, you can play your audio files such as music and voice along with images in the form of albums and give them as gifts."
                />
                <ProjectCard
                    title="Rasacrowd"
                    link="https://rasacrowd.ir/"
                    caption="People who have launched an idea or intend to launch it.
                         Companies or startups that intend to develope their products or services."
                />
            </div>
        </SectionLayout>
    );
};

export default ProjectsSection;
