import packageJson from "../../package.json";

function getAppVersion() {
    try {
        const version = packageJson.version;
        return version;
    } catch (error) {
        return "1.0.0";
    }
}

export default getAppVersion;
