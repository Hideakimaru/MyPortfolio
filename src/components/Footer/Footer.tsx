import "./Footer.css";
import FooterLogo from "../FooterLogo";
import GitHubIcon from "@mui/icons-material/GitHub";
import TelegramIcon from "@mui/icons-material/Telegram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { useState } from "react";

export default function Footer() {
	const [isHovered, setIsHover] = useState<string | null>(null);

	function handleMouseEnter(id: string): void {
		setIsHover(id);
	}

	function handleMouseLeave(): void {
		setIsHover(null);
	}

	return (
		<footer className='footer'>
			<div className='footer__wrapper'>
				<div className='footer__container'>
					<div className='footer-text__container'>
						<div className='footer-text__wrapper'>
							<FooterLogo />
							<div className='footer__email-wrapper'>
								<a
									className='footer__email'
									href='mailto:yehor.marchenko1997@gmail.com'
								>
									yehor.marchenko1997@gmail.com
								</a>
							</div>
						</div>
						<div className='footer__text'>
							<p>Markup and front-end developer</p>
						</div>
					</div>
					<div className='footer-media__wrapper'>
						<span className='footer-media__title'>
							<h1>Media</h1>
						</span>
						<div className='footer__images-wrapper'>
							<a
								onMouseEnter={() => handleMouseEnter("github")}
								onMouseLeave={handleMouseLeave}
								className='footer__images-link'
								href='https://github.com/Hideakimaru'
							>
								<GitHubIcon
									className={`footer__social ${
										isHovered === "github"
											? "footer__social-icon--active"
											: "footer__social-icon"
									}`}
									sx={{ fontSize: "25px", transition: "all 0.5s ease-in-out" }}
								/>
							</a>
							<a
								onMouseEnter={() => handleMouseEnter("telegram")}
								onMouseLeave={handleMouseLeave}
								className='footer__images-link'
								href='https://t.me/yehor_marchenko'
							>
								<TelegramIcon
									className={`footer__social ${
										isHovered === "telegram"
											? "footer__social-icon--active"
											: "footer__social-icon"
									}`}
									sx={{ fontSize: "25px", transition: "all 0.5s ease-in-out" }}
								/>
							</a>
							<a
								onMouseEnter={() => handleMouseEnter("linkedin")}
								onMouseLeave={handleMouseLeave}
								className='footer__images-link'
								href='https://www.linkedin.com/in/yehorm97/?locale=en_US'
							>
								<LinkedInIcon
									className={`footer__social ${
										isHovered === "linkedin"
											? "footer__social-icon--active"
											: "footer__social-icon"
									}`}
									sx={{ fontSize: "25px", transition: "all 0.5s ease-in-out" }}
								/>
							</a>
						</div>
					</div>
				</div>
				<div className='footer-copy__wrapper'>
					<span className='footer-copy'>© Copyright 2024. Made by Yehor</span>
				</div>
			</div>
		</footer>
	);
}
