import { Link } from "react-router-dom";

function NotFoundPage() {
    return (
        <section
            className="bg-pd-primary-bg
            flex items-center justify-center
            w-full min-h-svh app-px">
            <div
                className="bg-pd-secondary-bg 
                flex flex-col items-center justify-center gap-5
                rounded-lg p-4 text-center w-full sm:w-96">
                <h1
                    className="font-mono font-bold
                    text-9xl text-pd-primary
                    drop-shadow-pdIcon">
                    404
                </h1>

                <div className="flex flex-col items-center justify-center gap-2">
                    <h3 className="text-xl">NotFoundPage</h3>

                    <Link to="/" className="text-pd-primary">
                        Back to Home
                    </Link>
                </div>
            </div>
        </section>
    );
}

export default NotFoundPage;
