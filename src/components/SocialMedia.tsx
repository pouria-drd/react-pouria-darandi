import { Link } from "react-router-dom";

import GithubIcon from "../components/icons/GithubIcon";
import DiscordIcon from "../components/icons/DiscordIcon";
import TwitterIcon from "../components/icons/TwitterIcon";
import WhatsappIcon from "../components/icons/WhatsappIcon";
import TelegramIcon from "../components/icons/TelegramIcon";
import InstagramIcon from "../components/icons/InstagramIcon";

interface SocialMediaProps {
    className?: string;
}

const SocialMedia = ({ className }: SocialMediaProps) => {
    return (
        <div
            className={`text-drd-text-primary flex items-center gap-4 ${className}`}>
            <Link
                className="hover:text-drd-primary transition-all"
                to="https://www.instagram.com/pouria.drd?igsh=OTdmZndkajBhbzF2&utm_source=qr/"
                target="_blank">
                <InstagramIcon />
            </Link>

            <Link
                className="hover:text-drd-primary transition-all"
                to="https://twitter.com/pour1a_d/"
                target="_blank">
                <TwitterIcon />
            </Link>

            <Link
                className="hover:text-drd-primary transition-all"
                to="https://t.me/pouria_drd/"
                target="_blank">
                <TelegramIcon />
            </Link>

            <Link
                className="hover:text-drd-primary transition-all"
                to="https://wa.me/+989226989288/"
                target="_blank">
                <WhatsappIcon />
            </Link>

            <Link
                className="hover:text-drd-primary transition-all"
                to="https://discordapp.com/users/pour1a/"
                target="_blank">
                <DiscordIcon />
            </Link>

            <Link
                className="hover:text-drd-primary transition-all"
                to="https://github.com/pouria-drd/"
                target="_blank">
                <GithubIcon />
            </Link>
        </div>
    );
};

export default SocialMedia;
