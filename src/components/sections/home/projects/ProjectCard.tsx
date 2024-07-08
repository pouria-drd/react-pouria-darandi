interface ProjectCardProps {
    title: string;
    caption: string;
    link: string;
    scrolled: boolean;
}

const ProjectCard = (projectCardProps: ProjectCardProps) => {
    return (
        <div
            className={`bg-drd-bg-secondary transition-opacity duration-500
            flex flex-col items-center justify-center
            hover:outline hover:outline-drd-primary
            rounded-lg flex-grow px-4 py-6 opacity-0 ${
                projectCardProps.scrolled && "opacity-100"
            }`}>
            <div
                className="flex flex-col items-center justify-center gap-2
                text-center w-full h-full">
                <h3 className="text-xl sm:text-2xl">
                    {projectCardProps.title}
                </h3>

                <p className="text-center text-xs sm:text-sm max-w-60">
                    {projectCardProps.caption}
                </p>

                <a
                    href={projectCardProps.link}
                    target="_blank"
                    className="text-drd-primary text-center text-sm max-w-60 mt-2">
                    بیشتر
                </a>
            </div>
        </div>
    );
};

export default ProjectCard;
