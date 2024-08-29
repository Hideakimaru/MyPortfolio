import "./HeaderSocial.css";
import { useState } from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import TelegramIcon from "@mui/icons-material/Telegram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export default function HeaderSocial() {
	const [isHovered, setIsHovered] = useState<string | null>(null);

	function handleMouseEnter(iconId: string) {
		setIsHovered(iconId);
	}

	function handleMouseLeave() {
		setIsHovered(null);
	}

	return (
		<div className='header-social__container'>
			<div className='header-line__wrapper'>
				<span className='header-line' />
			</div>
			<div className='header-social__wrapper'>
				<span className='header-social'>
					<a
						onMouseEnter={() => handleMouseEnter("github")}
						onMouseLeave={handleMouseLeave}
						className='header-social__link'
						href='https://github.com/Hideakimaru'
					>
						<GitHubIcon
							className='header__social-icon'
							sx={{
								fontSize: "25px",
								color: isHovered === "github" ? "#fff" : "#9097a3",
								transition: "all 0.5s ease-in-out"
							}}
						/>
					</a>
					<a
						onMouseEnter={() => handleMouseEnter("telegram")}
						onMouseLeave={handleMouseLeave}
						className='header-social__link'
						href='https://t.me/yehor_marchenko'
					>
						<TelegramIcon
							className='header__social-icon'
							sx={{
								fontSize: "25px",
								color: isHovered === "telegram" ? "#fff" : "#9097a3",
								transition: "all 0.5s ease-in-out"
							}}
						/>
					</a>
					<a
						onMouseEnter={() => handleMouseEnter("linkedin")}
						onMouseLeave={handleMouseLeave}
						className='header-social__link'
						href='https://www.linkedin.com/in/yehorm97'
					>
						<LinkedInIcon
							className='header__social-icon'
							sx={{
								fontSize: "25px",
								color: isHovered === "linkedin" ? "#fff" : "#9097a3",
								transition: "all 0.5s ease-in-out"
							}}
						/>
					</a>
				</span>
			</div>
		</div>
	);
}
